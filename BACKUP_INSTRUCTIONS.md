# Atsarginių kopijų instrukcijos / Backup Instructions

## Lietuvių kalba

### Kaip atkurti atsarginę kopiją
```bash
# Atkurti konkretų backup versiją
git checkout v1.0.0-backup

# Sukurti naują šaką iš backup versijos
git checkout -b nauja-saka v1.0.0-backup

# Peržiūrėti visas backup versijas
git tag -l "*backup*"
```

### Kaip sukurti naują atsarginę kopiją
```bash
# Sukurti naują backup tag'ą
git tag -a "v1.1.0-backup" -m "Aprašymas naujos versijos"

# Išstumti tag'ą į remote repository
git push origin v1.1.0-backup
```

### Dabartinės atsarginės kopijos
- **v1.0.0-backup**: Pirma stabili versija su baziniu projekto aprašymu

---

## English

### How to restore backup
```bash
# Restore specific backup version
git checkout v1.0.0-backup

# Create new branch from backup version  
git checkout -b new-branch v1.0.0-backup

# View all backup versions
git tag -l "*backup*"
```

### How to create new backup
```bash
# Create new backup tag
git tag -a "v1.1.0-backup" -m "Description of new version"

# Push tag to remote repository
git push origin v1.1.0-backup
```

### Current backups
- **v1.0.0-backup**: First stable version with basic project description