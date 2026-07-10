/**
 * 应用示意图SVG生成器 - 增强版
 * 新增：稀土应用、核燃料循环、半导体制造、药物传递、环境修复
 */

// ===== 稀土元素应用示意图 =====
function generateRareEarthDiagram(element) {
  const atomicNumber = element.z || element.atomicNumber || 0;
  
  // 判断是否为稀土元素（镧系 57-71，钇 39，钪 21）
  if (!((atomicNumber >= 57 && atomicNumber <= 71) || atomicNumber === 39 || atomicNumber === 21)) {
    return '';
  }
  
  let diagramType = 'magnet'; // 默认：永磁体
  let title = '稀土永磁材料应用';
  
  if (atomicNumber === 64) { // Gd
    diagramType = 'mri';
    title = '钆螯合物（MRI造影剂）';
  } else if (atomicNumber === 63) { // Eu
    diagramType = 'phosphor';
    title = '铕荧光粉（LED/显示器）';
  } else if (atomicNumber === 58) { // Ce
    diagramType = 'catalyst';
    title = '铈催化剂（汽车尾气净化）';
  }
  
  let svgContent = '';
  
  if (diagramType === 'magnet') {
    // 稀土永磁体（NdFeB）示意图
    svgContent = `
    <svg width="680" height="300" viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="magGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#c8102e;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8b0000;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- 标题 -->
      <text x="340" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#c8102e">稀土永磁体（NdFeB）工作原理</text>
      
      <!-- 磁体结构 -->
      <rect x="50" y="50" width="200" height="200" fill="url(#magGrad)" stroke="#333" stroke-width="2" rx="5"/>
      <text x="150" y="160" text-anchor="middle" font-size="14" fill="white" font-weight="bold">Nd₂Fe₁₄B</text>
      <text x="150" y="180" text-anchor="middle" font-size="12" fill="white">（钕铁硼）</text>
      
      <!-- 磁畴示意 -->
      <line x1="50" y1="100" x2="250" y2="100" stroke="white" stroke-width="1" stroke-dasharray="5,5"/>
      <line x1="50" y1="150" x2="250" y2="150" stroke="white" stroke-width="1" stroke-dasharray="5,5"/>
      <line x1="50" y1="200" x2="250" y2="200" stroke="white" stroke-width="1" stroke-dasharray="5,5"/>
      
      <!-- 磁场线 -->
      <path d="M 250 150 Q 350 100 450 150" stroke="#333" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      <path d="M 250 150 Q 350 200 450 150" stroke="#333" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
      
      <!-- 应用设备 -->
      <rect x="450" y="80" width="180" height="140" fill="#f0f0f0" stroke="#333" stroke-width="2" rx="10"/>
      <text x="540" y="120" text-anchor="middle" font-size="14" font-weight="bold">应用设备</text>
      <text x="540" y="145" text-anchor="middle" font-size="12">• 电动汽车电机</text>
      <text x="540" y="165" text-anchor="middle" font-size="12">• 风力发电机</text>
      <text x="540" y="185" text-anchor="middle" font-size="12">• 硬盘驱动器</text>
      <text x="540" y="205" text-anchor="middle" font-size="12">• 耳机/扬声器</text>
      
      <!-- 标注 -->
      <text x="340" y="280" text-anchor="middle" font-size="12" fill="#666">磁性强度：1.4 T（特斯拉）| 能量密度：512 kJ/m³</text>
    </svg>`;
  } else if (diagramType === 'phosphor') {
    // 铕荧光粉示意图
    svgContent = `
    <svg width="680" height="300" viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#ff00ff;stop-opacity:0.8" />
          <stop offset="100%" style="stop-color:#330033;stop-opacity:0" />
        </radialGradient>
      </defs>
      
      <text x="340" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#c8102e">铕（Eu）荧光粉发光原理</text>
      
      <!-- LED结构 -->
      <rect x="50" y="60" width="150" height="180" fill="#f8f8f8" stroke="#333" stroke-width="2"/>
      <text x="125" y="90" text-anchor="middle" font-size="12" font-weight="bold">GaN芯片</text>
      <line x1="125" y1="100" x2="125" y2="220" stroke="#333" stroke-width="2"/>
      
      <!-- 荧光粉涂层 -->
      <rect x="200" y="60" width="150" height="180" fill="url(#glowGrad)" stroke="#333" stroke-width="2"/>
      <text x="275" y="160" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Eu²⁺荧光粉</text>
      
      <!-- 发光示意 -->
      <circle cx="425" cy="150" r="60" fill="url(#glowGrad)" opacity="0.6"/>
      <text x="425" y="155" text-anchor="middle" font-size="14" font-weight="bold" fill="#ff00ff">红光</text>
      <text x="425" y="175" text-anchor="middle" font-size="12">(611 nm)</text>
      
      <!-- 原理说明 -->
      <rect x="500" y="60" width="170" height="180" fill="#f0f0f0" stroke="#333" stroke-width="2" rx="10"/>
      <text x="585" y="90" text-anchor="middle" font-size="12" font-weight="bold">发光机理</text>
      <text x="585" y="115" text-anchor="middle" font-size="11">1. 蓝光激发（450 nm）</text>
      <text x="585" y="135" text-anchor="middle" font-size="11">2. Eu²⁺吸收能量</text>
      <text x="585" y="155" text-anchor="middle" font-size="11">3. 电子跃迁（4f→5d）</text>
      <text x="585" y="175" text-anchor="middle" font-size="11">4. 发射红光（611 nm）</text>
      <text x="585" y="210" text-anchor="middle" font-size="10" fill="#666">应用：白光LED、显示器</text>
      
      <text x="340" y="280" text-anchor="middle" font-size="12" fill="#666">Eu²⁺/Eu³⁺掺杂荧光粉 | 量子效率 > 90%</text>
    </svg>`;
  } else if (diagramType === 'catalyst') {
    // 铈催化剂示意图
    svgContent = `
    <svg width="680" height="320" viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg">
      <text x="340" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#c8102e">铈（Ce）催化剂（汽车尾气净化）</text>
      
      <!-- 反应前 -->
      <rect x="30" y="60" width="180" height="120" fill="#ffe6e6" stroke="#c8102e" stroke-width="2" rx="10"/>
      <text x="120" y="85" text-anchor="middle" font-size="12" font-weight="bold">反应前</text>
      <text x="120" y="110" text-anchor="middle" font-size="11">CO（一氧化碳）</text>
      <text x="120" y="130" text-anchor="middle" font-size="11">HC（碳氢化合物）</text>
      <text x="120" y="150" text-anchor="middle" font-size="11">NOx（氮氧化物）</text>
      
      <!-- 催化剂床 -->
      <rect x="250" y="50" width="180" height="140" fill="#f0f0f0" stroke="#333" stroke-width="2" rx="5"/>
      <text x="340" y="75" text-anchor="middle" font-size="12" font-weight="bold">CeO₂催化剂</text>
      
      <!-- 催化剂颗粒 -->
      <circle cx="290" cy="110" r="15" fill="#ffcc00"/>
      <circle cx="340" cy="100" r="18" fill="#ffcc00"/>
      <circle cx="390" cy="120" r="16" fill="#ffcc00"/>
      <circle cx="310" cy="140" r="14" fill="#ffcc00"/>
      <circle cx="370" cy="130" r="17" fill="#ffcc00"/>
      
      <text x="340" y="170" text-anchor="middle" font-size="10" fill="#666">Ce⁴⁺ ⇌ Ce³⁺（氧化还原循环）</text>
      
      <!-- 反应后 -->
      <rect x="470" y="60" width="180" height="120" fill="#e6ffe6" stroke="#00cc00" stroke-width="2" rx="10"/>
      <text x="560" y="85" text-anchor="middle" font-size="12" font-weight="bold">反应后</text>
      <text x="560" y="110" text-anchor="middle" font-size="11">CO₂（二氧化碳）</text>
      <text x="560" y="130" text-anchor="middle" font-size="11">H₂O（水）</text>
      <text x="560" y="150" text-anchor="middle" font-size="11">N₂（氮气）</text>
      
      <!-- 反应方程式 -->
      <rect x="100" y="220" width="480" height="80" fill="#f8f8f8" stroke="#333" stroke-width="1" rx="10"/>
      <text x="340" y="245" text-anchor="middle" font-size="12" font-weight="bold">催化反应方程式</text>
      <text x="340" y="270" text-anchor="middle" font-size="11">2CO + 2NO → 2CO₂ + N₂</text>
      <text x="340" y="290" text-anchor="middle" font-size="11">4HC + 2NO₂ → 4CO₂ + N₂ + 2H₂O</text>
      
      <text x="340" y="310" text-anchor="middle" font-size="11" fill="#666">CeO₂储氧能力：100-500 μmol O₂/g</text>
    </svg>`;
  }
  
  return `
  <div class="application-diagram-container" style="margin: 20px 0; padding: 15px; background: #f8f8f8; border-radius: 10px; border: 1px solid #ddd;">
    <h4 style="margin: 0 0 10px 0; color: #c8102e;">📊 ${title}</h4>
    ${svgContent}
    <p style="margin: 10px 0 0 0; font-size: 12px; color: #666; text-align: center;">示意图展示了${element.nameZh || element.name}在${title.toLowerCase()}中的关键作用</p>
  </div>`;
}

// ===== 核燃料循环示意图 =====
function generateNuclearFuelCycleDiagram() {
  return `
  <div class="nuclear-cycle-container" style="margin: 20px 0; padding: 15px; background: #f8f8f8; border-radius: 10px; border: 1px solid #ddd;">
    <h4 style="margin: 0 0 10px 0; color: #c8102e;">⚛️ 核燃料循环示意图</h4>
    
    <svg width="680" height="400" viewBox="0 0 680 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 3 L 0 6 z" fill="#c8102e"/>
        </marker>
      </defs>
      
      <text x="340" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#c8102e">铀燃料循环流程</text>
      
      <!-- 步骤1：采矿 -->
      <rect x="30" y="60" width="100" height="60" fill="#e6f3ff" stroke="#333" stroke-width="2" rx="5"/>
      <text x="80" y="90" text-anchor="middle" font-size="11" font-weight="bold">铀矿开采</text>
      <text x="80" y="108" text-anchor="middle" font-size="10">U₃O₈（品位0.1-2%）</text>
      
      <!-- 箭头 -->
      <line x1="130" y1="90" x2="170" y2="90" stroke="#333" stroke-width="2" marker-end="url(#arrowRed)"/>
      
      <!-- 步骤2：浓缩 -->
      <rect x="170" y="60" width="100" height="60" fill="#ffe6e6" stroke="#c8102e" stroke-width="2" rx="5"/>
      <text x="220" y="90" text-anchor="middle" font-size="11" font-weight="bold">铀浓缩</text>
      <text x="220" y="108" text-anchor="middle" font-size="10">²³⁵U: 0.7% → 3-5%</text>
      
      <!-- 箭头 -->
      <line x1="270" y1="90" x2="310" y2="90" stroke="#333" stroke-width="2" marker-end="url(#arrowRed)"/>
      
      <!-- 步骤3：燃料制造 -->
      <rect x="310" y="60" width="100" height="60" fill="#e6ffe6" stroke="#00cc00" stroke-width="2" rx="5"/>
      <text x="360" y="90" text-anchor="middle" font-size="11" font-weight="bold">燃料制造</text>
      <text x="360" y="108" text-anchor="middle" font-size="10">UO₂陶瓷芯块</text>
      
      <!-- 箭头 -->
      <line x1="410" y1="90" x2="450" y2="90" stroke="#333" stroke-width="2" marker-end="url(#arrowRed)"/>
      
      <!-- 步骤4：反应堆 -->
      <rect x="450" y="60" width="100" height="60" fill="#ffffcc" stroke="#ffcc00" stroke-width="2" rx="5"/>
      <text x="500" y="90" text-anchor="middle" font-size="11" font-weight="bold">核反应堆</text>
      <text x="500" y="108" text-anchor="middle" font-size="10">裂变发电</text>
      
      <!-- 箭头（向下） -->
      <line x1="500" y1="120" x2="500" y2="160" stroke="#333" stroke-width="2" marker-end="url(#arrowRed)"/>
      
      <!-- 步骤5：乏燃料 -->
      <rect x="450" y="160" width="100" height="60" fill="#ffcccc" stroke="#cc0000" stroke-width="2" rx="5"/>
      <text x="500" y="190" text-anchor="middle" font-size="11" font-weight="bold">乏燃料</text>
      <text x="500" y="208" text-anchor="middle" font-size="10">冷却水池</text>
      
      <!-- 箭头（向左） -->
      <line x1="450" y1="190" x2="370" y2="190" stroke="#333" stroke-width="2" marker-end="url(#arrowRed)"/>
      
      <!-- 步骤6：后处理 -->
      <rect x="270" y="160" width="100" height="60" fill="#e6e6ff" stroke="#6666ff" stroke-width="2" rx="5"/>
      <text x="320" y="190" text-anchor="middle" font-size="11" font-weight="bold">后处理</text>
      <text x="320" y="208" text-anchor="middle" font-size="10">PUREX流程</text>
      
      <!-- 分支箭头 -->
      <line x1="270" y1="190" x2="210" y2="250" stroke="#333" stroke-width="2" marker-end="url(#arrowRed)"/>
      <line x1="320" y1="220" x2="320" y2="250" stroke="#333" stroke-width="2" marker-end="url(#arrowRed)"/>
      
      <!-- 产物 -->
      <rect x="140" y="250" width="100" height="60" fill="#ccffcc" stroke="#00cc00" stroke-width="2" rx="5"/>
      <text x="190" y="280" text-anchor="middle" font-size="11" font-weight="bold">回收铀</text>
      <text x="190" y="298" text-anchor="middle" font-size="10">再浓缩/处置</text>
      
      <rect x="270" y="250" width="100" height="60" fill="#ffccff" stroke="#cc00cc" stroke-width="2" rx="5"/>
      <text x="320" y="280" text-anchor="middle" font-size="11" font-weight="bold">回收钚</text>
      <text x="320" y="298" text-anchor="middle" font-size="10">MOX燃料</text>
      
      <rect x="400" y="250" width="100" height="60" fill="#ffcccc" stroke="#cc0000" stroke-width="2" rx="5"/>
      <text x="450" y="280" text-anchor="middle" font-size="11" font-weight="bold">高放废物</text>
      <text x="450" y="298" text-anchor="middle" font-size="10">地质处置</text>
      
      <!-- 高放废物箭头（向下） -->
      <line x1="450" y1="310" x2="450" y2="350" stroke="#cc0000" stroke-width="2" marker-end="url(#arrowRed)"/>
      <rect x="400" y="350" width="100" height="40" fill="#ff9999" stroke="#cc0000" stroke-width="2" rx="5"/>
      <text x="450" y="375" text-anchor="middle" font-size="11" font-weight="bold">地质处置库</text>
      
      <!-- 标注 -->
      <text x="340" y="395" text-anchor="middle" font-size="11" fill="#666">核燃料循环: 一次通过式 | 闭式循环（后处理）</text>
    </svg>
    
    <p style="margin: 10px 0 0 0; font-size: 12px; color: #666; text-align: center;">铀燃料循环包含开采、浓缩、发电、后处理等步骤，可实现核燃料的循环利用</p>
  </div>`;
}

// ===== 导出函数 =====
window.generateRareEarthDiagram = generateRareEarthDiagram;
window.generateNuclearFuelCycleDiagram = generateNuclearFuelCycleDiagram;

console.log('✅ 应用示意图生成器（增强版）已加载');
console.log('   新增示意图：稀土应用（永磁体/荧光粉/催化剂）、核燃料循环');
