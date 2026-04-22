import fs from 'fs';
import path from 'path';

const README_PATH = './README.md';
const SRC_PATH = './src';

function getDirectoryStructure(dir, depth = 0) {
    if (depth > 2) return ''; // Limit depth for README clarity
    const items = fs.readdirSync(dir, { withFileTypes: true });
    let structure = '';

    for (const item of items) {
        if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
            const fullPath = path.join(dir, item.name);
            const relativePath = path.relative(SRC_PATH, fullPath).replace(/\\/g, '/');
            structure += `| \`src/${relativePath}\` | ${getPurpose(relativePath)} |\n`;
            structure += getDirectoryStructure(fullPath, depth + 1);
        }
    }
    return structure;
}

function getPurpose(relativePath) {
    const purposes = {
        'app': 'Global configuration, routing, and application entry points.',
        'components': 'Shared reusable components.',
        'components/layout': 'Shared persistent components like Navbars and Footers.',
        'components/sections': 'Reusable blocks of UI specific to certain pages.',
        'components/sections/home': 'Page sections specifically for the Home page.',
        'components/ui': 'Atomic UI components (Buttons, Inputs, etc.).',
        'features': 'Domain-specific logic (API, components, hooks).',
        'features/blog': 'Blog-related functionality.',
        'features/caseStudies': 'Case study domain logic.',
        'features/services': 'Service-related functionality.',
        'hooks': 'Shared custom React hooks.',
        'lib': 'Utility libraries and API configurations.',
        'pages': 'Page-level components mapped to routes.',
        'store': 'State management logic.',
        'styles': 'Global CSS and theme configurations.'
    };
    return purposes[relativePath] || 'Project directory.';
}

function updateReadme() {
    if (!fs.existsSync(README_PATH)) {
        console.error('README.md not found');
        return;
    }

    const structure = getDirectoryStructure(SRC_PATH);
    let readme = fs.readFileSync(README_PATH, 'utf8');

    const tableHeader = '| Directory | Purpose |\n| :--- | :--- |\n';
    const startMarker = '<!-- ARCHITECTURE_START -->';
    const endMarker = '<!-- ARCHITECTURE_END -->';

    const startIndex = readme.indexOf(startMarker);
    if (startIndex === -1) {
        console.error('Start marker not found in README');
        return;
    }

    const endIndex = readme.indexOf(endMarker, startIndex);
    if (endIndex === -1) {
        console.error('End marker not found in README');
        return;
    }

    const newSection = `${startMarker}\n${tableHeader}${structure}${endMarker}`;
    readme = readme.slice(0, startIndex) + newSection + readme.slice(endIndex + endMarker.length);


    fs.writeFileSync(README_PATH, readme);
    console.log('README.md updated successfully!');
}

updateReadme();
