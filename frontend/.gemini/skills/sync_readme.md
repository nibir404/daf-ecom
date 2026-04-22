# Skill: Sync README with Project Structure

This skill ensures that the `README.md` is always up-to-date with the actual directory structure of the project.

## Instructions

Whenever you:
1. Create a new directory in `src/`.
2. Move or rename existing directories in `src/`.
3. Add a new feature or major module.

**You MUST run the following command to update the README:**

```bash
node scripts/update-readme.js
```

## How it Works
The script `scripts/update-readme.js` scans the `src/` directory and updates the `📂 Project Architecture` section in `README.md` by looking for `<!-- ARCHITECTURE_START -->` and `<!-- ARCHITECTURE_END -->` markers.

## Maintenance
If you add a new top-level directory in `src/` that requires a specific description, update the `getPurpose` function in `scripts/update-readme.js`.
