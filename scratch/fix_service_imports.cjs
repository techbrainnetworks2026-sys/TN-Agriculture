const fs = require('fs');
const path = require('path');

const dir = 'src/components/Services/services_info';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Ensure useEffect is imported from react
    if (content.includes('useEffect') && !content.includes('import { useEffect } from \'react\'')) {
        if (!content.includes('from \'react\'')) {
            content = 'import { useEffect } from \'react\';\n' + content;
        } else {
            // Already has some react import, maybe React itself?
            content = content.replace(/import React from 'react';/, "import React, { useEffect } from 'react';");
            content = content.replace(/import { (.*) } from 'react';/, (match, group) => {
                if (group.includes('useEffect')) return match;
                return `import { ${group}, useEffect } from 'react';`;
            });
        }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
