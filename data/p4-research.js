/**
 * P4-3：研究前沿数据
 * 包含：每个元素的研究前沿方向、关键论文、开放问题
 * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS
 */

var P4_RESEARCH = {};

// ════════════════════════════════════════════════════
//  研究前沿数据（按 z 索引）
// ════════════════════════════════════════════════════

// ── 第 1 周期 ────────────────────────────────────────────
P4_RESEARCH[1] = [  // H 氢
  { topic: '绿氢电解催化剂', year: '2024-2026', doi: '10.1038/s41560-023-01426-8', note: 'PEM 电解槽 Ir/Ru 催化剂改进' },
  { topic: '金属氢超导', year: '2025', note: '高压下氢的金属化与超导转变温度预测' },
  { topic: '氢储存材料（MOF/共价有机框架）', year: '2024', note: '固态氢储存密度突破' },
];

P4_RESEARCH[2] = [  // He 氦
  { topic: '超流体氦-3 拓扑序', year: '2024', note: '量子计算中的拓扑量子计算应用' },
  { topic: '氦-3 月球开采', year: '2025', note: '嫦娥工程氦-3 资源评估' },
];

P4_RESEARCH[6] = [  // C 碳
  { topic: '单壁碳纳米管手性控制合成', year: '2024', doi: '10.1038/s41586-023-06839-8', note: '半导体性 SWCNT 选择性生长' },
  { topic: '石墨烯摩尔超晶格', year: '2025', note: ' twisted bilayer graphene 超导机制' },
  { topic: '金刚石氮-空位色心量子传感', year: '2024', note: '单分子磁共振成像' },
];

P4_RESEARCH[7] = [  // N 氮
  { topic: '固氮酶人工模拟', year: '2024', note: '常温常压固氮催化剂设计' },
  { topic: '氮掺杂碳材料（锂电负极）', year: '2025', note: '高容量长循环寿命' },
];

P4_RESEARCH[8] = [  // O 氧
  { topic: '氧还原反应（ORR）非贵金属催化剂', year: '2024', note: '燃料电池阴极催化剂 Fe-N-C 材料' },
  { topic: '富氧空位氧化物（光催化）', year: '2025', note: '水分解制氢效率提升' },
];

// ── 第 2 周期金属 ─────────────────────────────────────────
P4_RESEARCH[11] = [  // Na 钠
  { topic: '钠离子电池层状氧化物正极', year: '2024-2026', note: 'NaNi₁/₃Fe₁/₃Mn₁/₃O₂ (NFM) 产业化' },
  { topic: '钠金属负极枝晶抑制', year: '2025', note: '固态电解质界面（SEI）人工调控' },
];

P4_RESEARCH[12] = [  // Mg 镁
  { topic: '镁合金生物可降解植入材料', year: '2024', note: 'Mg-Zn-Ca 合金力学性能与降解速率平衡' },
  { topic: '镁空气电池', year: '2025', note: '高能量密度（~2800 Wh/kg）实用化' },
];

P4_RESEARCH[13] = [  // Al 铝
  { topic: '铝离子电池（双离子电池）', year: '2024', note: '石墨正极 Al³⁺ 嵌入/脱嵌机理' },
  { topic: '铝基复合材料（汽车轻量化）', year: '2025', note: '碳纤维增强铝基复合材料' },
];

P4_RESEARCH[14] = [  // Si 硅
  { topic: '硅负极锂离子电池', year: '2024-2026', doi: '10.1038/s41560-023-01425-9', note: '纳米硅/碳复合负极产业化' },
  { topic: '钙钛矿/硅叠层太阳能电池', year: '2025', note: '效率突破 33.9%（隆基绿能）' },
  { topic: '硅光子集成电路', year: '2024', note: '片上传感与计算' },
];

// ── 第 3 周期金属 ─────────────────────────────────────────
P4_RESEARCH[19] = [  // K 钾
  { topic: '钾离子电池（低成本储能）', year: '2024', note: 'K⁺ 嵌入型层状正极材料' },
];

P4_RESEARCH[20] = [  // Ca 钙
  { topic: '钙离子电池', year: '2025', note: '多价态离子电池新体系' },
  { topic: '钙钛矿太阳能电池稳定性', year: '2024', note: 'FAPbI₃ 相稳定性调控' },
];

// ── 过渡金属（部分重点）────────────────────────────────────
P4_RESEARCH[22] = [  // Ti 钛
  { topic: '钛合金增材制造（3D 打印）', year: '2024', note: 'Ti-6Al-4V 粉末床熔融工艺优化' },
  { topic: 'TiO₂ 光催化全水解', year: '2025', note: '助催化剂负载与能带工程' },
];

P4_RESEARCH[24] = [  // Cr 铬
  { topic: '铬基高熵合金', year: '2024', note: '多主元合金设计（CrCoNiFeMn）' },
];

P4_RESEARCH[25] = [  // Mn 锰
  { topic: '锰基锂离子电池正极', year: '2024-2026', note: 'LiMn₂O₄ 尖晶石 / Li-rich 层状材料' },
  { topic: '锰基锌离子电池', year: '2025', note: '水系电池低成本储能' },
];

P4_RESEARCH[26] = [  // Fe 铁
  { topic: '高熵合金设计', year: '2024', note: '多主元合金强韧化机理' },
  { topic: '铁基超导材料', year: '2025', note: 'FeSe 薄膜超导转变温度提升' },
  { topic: '绿色钢铁（氢能冶金）', year: '2024-2026', note: '替代焦炭还原的低碳冶金工艺' },
];

P4_RESEARCH[27] = [  // Co 钴
  { topic: '钴-free锂电正极', year: '2024', note: '供应链可持续性驱动的无钴正极开发' },
  { topic: '钴基 Fischer-Tropsch 催化剂', year: '2025', note: 'CO₂ 加氢制低碳烯烃' },
];

P4_RESEARCH[28] = [  // Ni 镍
  { topic: '镍基高温合金（航空发动机）', year: '2024', note: '单晶高温合金疲劳寿命预测' },
  { topic: '镍氢气电池（储能）', year: '2025', note: '长时储能（> 8h）应用场景' },
];

P4_RESEARCH[29] = [  // Cu 铜
  { topic: '铜纳米线柔性电子', year: '2024', note: '可拉伸导体与传感器' },
  { topic: '铜基 CO₂ 还原电催化剂', year: '2025', note: '高选择性制乙烯/乙醇（C₂+ 产物）' },
];

P4_RESEARCH[30] = [  // Zn 锌
  { topic: '锌离子电池（水系，安全）', year: '2024-2026', note: '锌负极枝晶与析氢抑制' },
  { topic: '锌空气电池（柔性电子）', year: '2025', note: '可穿戴设备电源' },
];

// ── 稀土元素（部分）───────────────────────────────────────
P4_RESEARCH[57] = [  // La 镧
  { topic: '镧系镍氧化物超导', year: '2023-2024', note: 'La₃Ni₂O₇ 镍酸盐超导机理' },
];

P4_RESEARCH[58] = [  // Ce 铈
  { topic: '铈基汽车尾气催化', year: '2024', note: 'CeO₂ 储氧能力改进' },
];

P4_RESEARCH[64] = [  // Gd 钆
  { topic: '钆基磁共振造影剂', year: '2024', note: '靶向性分子影像探针' },
];

// ── 放射性元素 ───────────────────────────────────────────
P4_RESEARCH[92] = [  // U 铀
  { topic: '钍基熔盐堆（TMSR）', year: '2024-2026', note: '第四代核反应堆中国试验堆' },
  { topic: '铀浓缩离心机材料', year: '2025', note: '高性能转子材料研发' },
];

P4_RESEARCH[94] = [  // Pu 钚
  { topic: '钚-238 放射性同位素电池', year: '2024', note: '深空探测电源（ NASA MSL）' },
];

// ── 合成元素 ─────────────────────────────────────────────
P4_RESEARCH[118] = [  // Og 鿫
  { topic: '超重元素合成（Z=119, 120）', year: '2025-2026', note: '日本 RIKEN / 俄罗斯 JINR 合成尝试' },
];

// ════════════════════════════════════════════════════
//  合并研究前沿数据到 ELEMENTS 数组
// ════════════════════════════════════════════════════

function mergeP4Research(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;

    if (P4_RESEARCH[z]) {
      el.researchFrontiers = P4_RESEARCH[z];
    } else {
      el.researchFrontiers = null;  // 默认无研究前沿数据
    }
  }
}

// 自动合并
if (typeof ELEMENTS !== 'undefined') {
  mergeP4Research(ELEMENTS);
}
