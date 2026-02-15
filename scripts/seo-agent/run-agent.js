import { execSync } from 'child_process';
import * as fs from 'fs';

// Master Agent Runner
// Usage: node scripts/seo-agent/run-agent.js

console.log('🚀 Starting SEO & GEO Full Agent Cycle...');

const reportsDir = './reports';
if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
}

const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
const reportFile = `${reportsDir}/seo-report-${timestamp}.txt`;

try {
    try {
        // 1. Core Audit
        console.log('\n📝 Running Core Audit...');
        execSync('npx playwright test scripts/seo-agent/audit.spec.ts --reporter=line', { stdio: 'inherit' });
    } catch (e) {
        console.error('❌ Core Audit failed.');
    }

    // 2. SERP Checker (Only runs if HEADED or specialized, might fail in headless CI if Google blocks)
    console.log('\n🔍 Running SERP Checker...');
    // Relaxed failure condition for SERP as it depends on external blocking
    try {
        execSync('npx playwright test scripts/seo-agent/serp-checker.spec.ts --reporter=line', { stdio: 'inherit' });
    } catch (e) {
        console.warn('⚠️ SERP Checker encountered an issue (likely captcha or not found). Continuing...');
    }

    // 3. Site Monitor
    console.log('\n🕷️ Running Site Content Monitor (Crawl)...');
    try {
        execSync('npx playwright test scripts/seo-agent/content-monitor.spec.ts --reporter=line', { stdio: 'inherit' });
    } catch (e) {
        console.error('❌ Content Monitor failed.');
    }

    console.log(`\n✅ Agent Cycle Complete.`);

} catch (error) {
    console.error('\n❌ Fatal Agent Error:', error);
}
