const fs = require('fs');
const path = require('path');

const dir = 'src/components/Products/products_info';
const files = fs.readdirSync(dir).filter(f => f.startsWith('product') && f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace navigate('/') or navigate("/") with navigate('/#products')
    content = content.replace(/navigate\(['"]\/['"]\)/g, "navigate('/#products')");
    
    // Standardize button text to "Back to Home" as per user request
    content = content.replace(/Back to Products/g, "Back to Home");
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
