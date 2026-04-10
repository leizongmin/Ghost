const fs = require('fs');
const path = require('path');

// 统计依赖出现次数的函数
function analyzeDependencies() {
  const dependencyCount = new Map();
  
  // 递归遍历目录
  function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // 跳过node_modules和.git等目录
        if (file === 'node_modules' || file === '.git' || file === '.next' || file === 'dist') {
          continue;
        }
        traverseDirectory(filePath);
      } else if (file === 'package.json') {
        // 读取package.json文件
        const packageJson = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // 统计dependencies
        if (packageJson.dependencies) {
          Object.keys(packageJson.dependencies).forEach(dep => {
            dependencyCount.set(dep, (dependencyCount.get(dep) || 0) + 1);
          });
        }
        
        // 统计devDependencies
        if (packageJson.devDependencies) {
          Object.keys(packageJson.devDependencies).forEach(dep => {
            dependencyCount.set(dep, (dependencyCount.get(dep) || 0) + 1);
          });
        }
      }
    }
  }
  
  // 从当前目录开始遍历
  traverseDirectory('/workspace');
  
  // 转换为数组并排序
  const sortedDependencies = Array.from(dependencyCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20);
  
  // 输出结果
  console.log('Top 20 最常被依赖的包:');
  console.log('================================');
  sortedDependencies.forEach(([name, count], index) => {
    console.log(`${index + 1}. ${name}: ${count} 次`);
  });
}

// 执行分析
analyzeDependencies();