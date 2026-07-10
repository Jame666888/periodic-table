/**
 * P3 工业安全数据 — 独立数据文件
 * 加载方式：<script src="data/p3-safety.js"></script>
 * 加载后调用  mergeP3Data(ELEMENTS)  合并到主数组
 */

const P3_SAFETY = {};

/**
 * 辅助：GHS 代码
 */
function G(s) { return 'GHS' + s; }

/**
 * 辅助：生成默认 P3 数据
 */
function defaultP3(z, category, symbol) {
  const d = {
    ghsPictograms:      [],
    ghsSignal:           null,
    ghsHStatements:     [],
    ghsPStatements:     [],
    unNumber:            null,
    transportClass:       null,
    ld50Oral:            null,
    ld50Dermal:          null,
    lc50Inhalation:      null,
    oelTWA:             null,
    oelSTEL:            null,
    idlh:                null,
    carcinogenicity:      '0',
    pricePerKg:          '数据整理中…',
    majorMinerals:       [],
    ergGuide:            null,
    ppe:                 '防尘口罩、手套',
    firefightingAgent:    '水、干粉、CO₂',
    neutralizationMethod:  '清扫收集',
  };

  const isAlkali   = /alkali|碱金属/.test(category || '');
  const isAlkaline = /alkaline|碱土金属/.test(category || '');
  const isNoble    = /noble|稀有气体/.test(category || '');
  const isHalogen  = /halogen|卤素/.test(category || '');
  const isTrans    = /transition|过渡金属/.test(category || '');
  const isLan      = /lanthanide|镧系/.test(category || '');
  const isAct      = /actinide|锕系/.test(category || '');
  const isMetal    = isAlkali || isAlkaline || isTrans || isLan || isAct;
  const isRadio    = isAct || /radioactive|放射性/.test(category || '');

  if (isAlkali || isAlkaline) {
    d.ghsPictograms  = [G('02'), G('05')];
    d.ghsSignal      = 'Danger';
    d.ghsHStatements = ['H228','H260','H314'];
    d.ghsPStatements = ['P210','P223','P280','P305+P351+P338'];
    d.transportClass   = '4.3';
    d.unNumber        = 'UN 待查';
    d.ergGuide        = 'ERG 138';
    d.firefightingAgent = '干砂、D类灭火器；禁止用水';
    d.ppe              = '防火防毒手套、面罩、防护服';
    d.neutralizationMethod = '用干砂覆盖；生成氢氧化物用稀酸中和';
  } else if (isHalogen) {
    d.ghsPictograms  = [G('02'), G('05'), G('06'), G('09')];
    d.ghsSignal      = 'Danger';
    d.ghsHStatements = ['H260','H300','H310','H314','H330','H400'];
    d.ghsPStatements = ['P210','P260','P280','P284','P305+P351+P338'];
    d.transportClass   = '2.3';
    d.unNumber        = 'UN 待查';
    d.ergGuide        = 'ERG 124';
    d.ppe              = '供气式呼吸器、防化服、耐酸/耐卤素手套';
    d.neutralizationMethod = '用碱液（NaOH/Na₂CO₃）洗涤吸收';
  } else if (isNoble) {
    d.ghsPictograms  = [G('04')];
    d.ghsSignal      = 'Warning';
    d.ghsHStatements = ['H280'];
    d.ghsPStatements = ['P403'];
    d.transportClass   = '2.2';
    d.ergGuide        = 'ERG 120/121';
    d.firefightingAgent = '不适用（不燃）';
    d.neutralizationMethod = '通风扩散';
  } else if (isMetal) {
    d.ghsPictograms  = [G('02'), G('07')];
    d.ghsSignal      = 'Warning';
    d.ghsHStatements = ['H228','H319','H335'];
    d.ghsPStatements = ['P210','P280','P305+P351+P338'];
    d.transportClass   = '4.1';
    d.ergGuide        = 'ERG 133';
    d.firefightingAgent = '干砂、干粉、CO₂；活泼金属禁止用水';
    d.ppe              = '防尘口罩（N95）、手套、护目镜';
    d.neutralizationMethod = '清扫收集；大量水冲洗（惰性金属）';
  }

  if (isRadio) {
    d.ghsPictograms  = [G('05'), G('06'), G('08')];
    d.ghsSignal      = 'Danger';
    d.ghsHStatements = ['H301','H315','H319','H350','H372'];
    d.ghsPStatements = ['P201','P261','P280','P305+P351+P338'];
    d.transportClass   = '7';
    d.carcinogenicity  = '1';
    d.ergGuide        = 'ERG 161';
    d.ppe              = '辐射防护服、供气式呼吸器、双层手套';
    d.firefightingAgent = '按放射性物质专项应急预案';
    d.neutralizationMethod = '放射性废物专业处置（专用设施）';
  }

  return d;
}

// ══════════════════════════════════════════════════════
//  精确 P3 数据（按 z 索引）
// ══════════════════════════════════════════════════════

// ── 第 1 周期 ────────────────────────────────────────────
P3_SAFETY[1] = {  // H 氢
  ghsPictograms: ['GHS02','GHS04'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H220','H280'],
  ghsPStatements: ['P210','P403'],
  unNumber: 'UN 1049',
  transportClass: '2.1',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: 13000,
  oelTWA: 0.001,
  oelSTEL: null,
  idlh: 0.04,
  carcinogenicity: '0',
  pricePerKg: '¥ 9–14 / kg (H₂, 工业级)',
  majorMinerals: ['水','碳氢化合物','天然气'],
  ergGuide: 'ERG 116',
  ppe: '防爆服、防静电手套、护目镜',
  firefightingAgent: '切断气源；CO₂、干粉灭火器',
  neutralizationMethod: '自然扩散；通风置换；燃烧产物为水，无残留',
};

P3_SAFETY[2] = {  // He 氦
  ghsPictograms: ['GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H280'],
  ghsPStatements: ['P403'],
  unNumber: 'UN 1046',
  transportClass: '2.2',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 200–400 / kg (工业级)',
  majorMinerals: ['天然气田','放射性矿物（独居石等）'],
  ergGuide: 'ERG 120',
  ppe: '防冻手套、护目镜',
  firefightingAgent: '不适用（不燃）',
  neutralizationMethod: '通风扩散',
};

P3_SAFETY[3] = {  // Li 锂
  ghsPictograms: ['GHS02','GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228','H260','H314'],
  ghsPStatements: ['P210','P223','P280','P305+P351+P338'],
  unNumber: 'UN 1415',
  transportClass: '4.3',
  ld50Oral: 526,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.025,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 180–240 / kg (Li₂CO₃, 中国)',
  majorMinerals: ['锂辉石 (spodumene)','锂云母','卤水'],
  ergGuide: 'ERG 138',
  ppe: '防火防毒手套、面罩、防护服（防碱兼防燃）',
  firefightingAgent: '干砂、D类灭火器；禁止用水/泡沫',
  neutralizationMethod: '用干砂覆盖；在惰性气氛下处理；生成 LiOH 用稀酸中和',
};

P3_SAFETY[4] = {  // Be 铍
  ghsPictograms: ['GHS05','GHS06','GHS08','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H301','H315','H317','H319','H330','H350','H372'],
  ghsPStatements: ['P201','P261','P280','P305+P351+P338'],
  unNumber: 'UN 1567',
  transportClass: '6.1',
  ld50Oral: 111,
  ld50Dermal: null,
  lc50Inhalation: 0.05,
  oelTWA: 0.000002,
  oelSTEL: null,
  idlh: 0.000004,
  carcinogenicity: '1',
  pricePerKg: '¥ 6000–9000 / kg (Be 金属)',
  majorMinerals: ['绿柱石 (beryl)','硅铍石 (phenakite)','金绿宝石 (chrysoberyl)'],
  ergGuide: 'ERG 154',
  ppe: 'P100 防毒面具、防护服、双层手套（Be 尘致癌）',
  firefightingAgent: '水雾（注意有毒烟尘）；避免 BeO 粉尘扩散',
  neutralizationMethod: '湿法洗涤（HEPA 高效过滤）；危险废物专业处置',
};

P3_SAFETY[5] = {  // B 硼
  ghsPictograms: ['GHS02','GHS07'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H228','H319','H335'],
  ghsPStatements: ['P210','P280','P305+P351+P338'],
  unNumber: null,
  transportClass: null,
  ld50Oral: 3450,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 5,
  oelSTEL: 10,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 18–28 / kg (硼砂)',
  majorMinerals: ['硼砂 (borax)','硼铁矿','硬硼钙石'],
  ergGuide: 'ERG 133',
  ppe: '防尘口罩、手套、护目镜',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '清扫收集；大量水冲洗',
};

P3_SAFETY[6] = {  // C 碳（石墨）
  ghsPictograms: [],
  ghsSignal: null,
  ghsHStatements: [],
  ghsPStatements: [],
  unNumber: null,
  transportClass: null,
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 3,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 8–80 / kg (石墨, 取决于纯度)',
  majorMinerals: ['石墨','金刚石'],
  ergGuide: null,
  ppe: '防尘口罩（石墨粉尘）',
  firefightingAgent: '水、泡沫、干粉',
  neutralizationMethod: '清扫收集',
};

P3_SAFETY[7] = {  // N 氮
  ghsPictograms: ['GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H280'],
  ghsPStatements: ['P403'],
  unNumber: 'UN 1066',
  transportClass: '2.2',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 1–3 / kg (工业氮, 液态)',
  majorMinerals: ['空气 (78% v/v)'],
  ergGuide: 'ERG 121',
  ppe: '防冻手套、护目镜',
  firefightingAgent: '不适用（不燃）',
  neutralizationMethod: '通风扩散',
};

P3_SAFETY[8] = {  // O 氧
  ghsPictograms: ['GHS03','GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H270','H280'],
  ghsPStatements: ['P220','P403'],
  unNumber: 'UN 1072',
  transportClass: '2.2 (助燃)',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 0.8–2 / kg (工业氧, 液态)',
  majorMinerals: ['空气 (21% v/v)','硅酸盐矿物'],
  ergGuide: 'ERG 122',
  ppe: '防冻手套、护目镜；禁油工具（氧助燃）',
  firefightingAgent: '先切断氧源，再灭周边火；禁油灭火器',
  neutralizationMethod: '通风扩散；避免油脂接触（氧助燃）',
};

P3_SAFETY[9] = {  // F 氟
  ghsPictograms: ['GHS02','GHS05','GHS06','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H260','H300','H310','H314','H330','H400'],
  ghsPStatements: ['P210','P260','P280','P284','P305+P351+P338'],
  unNumber: 'UN 1045',
  transportClass: '2.3 (有毒气体)',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: 0.185,
  oelTWA: 0.001,
  oelSTEL: 0.002,
  idlh: 0.002,
  carcinogenicity: '0',
  pricePerKg: '¥ 80–200 / kg (F₂, 瓶装)',
  majorMinerals: ['萤石 (fluorite)','冰晶石 (cryolite)'],
  ergGuide: 'ERG 124',
  ppe: '供气式呼吸器、特氟龙/氟橡胶防护服、面罩（防 HF 灼伤）',
  firefightingAgent: '切断气源；CO₂（注意生成氟光气）；禁水',
  neutralizationMethod: '用碱液（NaOH/Ca(OH)₂）洗涤吸收：F₂ + 2NaOH → NaF + NaFO + H₂O',
};

P3_SAFETY[10] = {  // Ne 氖
  ghsPictograms: ['GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H280'],
  ghsPStatements: ['P403'],
  unNumber: 'UN 1065',
  transportClass: '2.2',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 200000–500000 / kg (Ne, 高纯)',
  majorMinerals: ['空气 (18.2 ppm v/v)'],
  ergGuide: 'ERG 120',
  ppe: '防冻手套、护目镜',
  firefightingAgent: '不适用（不燃）',
  neutralizationMethod: '通风扩散',
};

// ── 第 2 周期 ────────────────────────────────────────────
P3_SAFETY[11] = {  // Na 钠
  ghsPictograms: ['GHS02','GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228','H260','H314'],
  ghsPStatements: ['P210','P223','P280','P305+P351+P338'],
  unNumber: 'UN 1428',
  transportClass: '4.3',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 2,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 8–15 / kg (金属钠)',
  majorMinerals: ['岩盐 (halite, NaCl)','苏打灰 (trona)'],
  ergGuide: 'ERG 138',
  ppe: '防火防毒手套、面罩、防碱防护服',
  firefightingAgent: '干砂、D类灭火器；禁止用水/泡沫（剧烈反应）',
  neutralizationMethod: '用干砂覆盖；生成 NaOH 用稀乙酸/柠檬酸中和',
};

P3_SAFETY[12] = {  // Mg 镁
  ghsPictograms: ['GHS02','GHS07'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228','H261','H319','H335'],
  ghsPStatements: ['P210','P223','P280','P305+P351+P338'],
  unNumber: 'UN 1869',
  transportClass: '4.3',
  ld50Oral: 9700,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 10,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 18–30 / kg (镁锭)',
  majorMinerals: ['菱镁矿 (magnesite)','白云石 (dolomite)','海水'],
  ergGuide: 'ERG 138',
  ppe: '防尘口罩、手套、护目镜',
  firefightingAgent: '干砂、D类灭火器、金属灭火剂；禁止用水/泡沫',
  neutralizationMethod: '用干砂覆盖；大量镁火用专用 D 类灭火剂',
};

P3_SAFETY[13] = {  // Al 铝
  ghsPictograms: ['GHS02','GHS07'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H228','H319','H335'],
  ghsPStatements: ['P210','P280','P305+P351+P338'],
  unNumber: 'UN 1309',
  transportClass: '4.3 (铝粉)',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 10,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 14–22 / kg (铝锭)',
  majorMinerals: ['铝土矿 (bauxite)','刚玉 (corundum)'],
  ergGuide: 'ERG 133 / ERG 138 (铝粉)',
  ppe: '防尘口罩、手套、护目镜',
  firefightingAgent: '干砂、金属灭火剂；禁止用水（铝粉燃烧）',
  neutralizationMethod: '清扫收集；大量水冲洗（铝片/块）',
};

P3_SAFETY[14] = {  // Si 硅
  ghsPictograms: ['GHS02'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H228'],
  ghsPStatements: ['P210','P280'],
  unNumber: null,
  transportClass: null,
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 10,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 12–20 / kg (冶金级 Si)；¥ 200–500 / kg (太阳能级)',
  majorMinerals: ['石英 (quartz)','硅酸盐矿物'],
  ergGuide: 'ERG 133 (Si 粉)',
  ppe: '防尘口罩（N95）、手套',
  firefightingAgent: '干砂、干粉；禁止用水（Si 粉燃烧）',
  neutralizationMethod: '清扫收集',
};

P3_SAFETY[15] = {  // P 磷（黄磷）
  ghsPictograms: ['GHS02','GHS05','GHS06','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228','H250','H301','H314','H400','H410'],
  ghsPStatements: ['P210','P260','P280','P305+P351+P338','P391'],
  unNumber: 'UN 1381 (黄磷), UN 1338 (赤磷)',
  transportClass: '4.2 (自燃固体)',
  ld50Oral: 3.03,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.1,
  oelSTEL: null,
  idlh: 5,
  carcinogenicity: '0',
  pricePerKg: '¥ 7–12 / kg (黄磷)',
  majorMinerals: ['磷灰石 (apatite)','磷酸盐岩'],
  ergGuide: 'ERG 136',
  ppe: '供气式呼吸器、防护服、耐酸手套；禁止用水（黄磷燃烧）',
  firefightingAgent: '大量水（保持黄磷在水下）；干砂；禁止用常规灭火剂',
  neutralizationMethod: '黄磷：保持水下贮存；燃烧产物用碱液吸收（P₄O₁₀ + NaOH → Na₃PO₄）',
};

P3_SAFETY[16] = {  // S 硫
  ghsPictograms: ['GHS07','GHS09'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H315','H319','H400','H410'],
  ghsPStatements: ['P280','P305+P351+P338','P391'],
  unNumber: null,
  transportClass: null,
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 10,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 1.5–3 / kg (硫磺, 颗粒)',
  majorMinerals: ['天然硫矿','黄铁矿 (pyrite, FeS₂)'],
  ergGuide: null,
  ppe: '防尘口罩、手套',
  firefightingAgent: '水雾、干粉、CO₂；产生 SO₂ 需防毒面具',
  neutralizationMethod: '清扫收集；燃烧产物 SO₂ 用碱液吸收（SO₂ + 2NaOH → Na₂SO₃ + H₂O）',
};

P3_SAFETY[17] = {  // Cl 氯
  ghsPictograms: ['GHS03','GHS05','GHS06','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H270','H314','H330','H400','H410'],
  ghsPStatements: ['P220','P260','P280','P284','P305+P351+P338'],
  unNumber: 'UN 1017',
  transportClass: '2.3+8 (有毒气体+腐蚀)',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: 0.293,
  oelTWA: 1.5,
  oelSTEL: 3,
  idlh: 30,
  carcinogenicity: '0',
  pricePerKg: '¥ 2–5 / kg (液氯, 钢瓶)',
  majorMinerals: ['岩盐 (NaCl)','天然卤水'],
  ergGuide: 'ERG 124',
  ppe: '供气式呼吸器（SCBA）、A级防化服、耐氯手套（丁基橡胶）',
  firefightingAgent: '先切断氯源；用雾状水降温（注意 Cl₂ 烟雾）；灭火人员需 SCBA',
  neutralizationMethod: '泄漏：用碱液（NaOH/Na₂CO₃/Ca(OH)₂）吸收中和：Cl₂ + 2NaOH → NaCl + NaClO + H₂O',
};

P3_SAFETY[18] = {  // Ar 氩
  ghsPictograms: ['GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H280'],
  ghsPStatements: ['P403'],
  unNumber: 'UN 1006',
  transportClass: '2.2',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 30–60 / kg (高纯氩)',
  majorMinerals: ['空气 (0.93% v/v)'],
  ergGuide: 'ERG 121',
  ppe: '防冻手套、护目镜；注意缺氧环境',
  firefightingAgent: '不适用（不燃）',
  neutralizationMethod: '通风扩散',
};

// ── 第 3 周期（精选重点）────────────────────────────────────
P3_SAFETY[19] = {  // K 钾
  ghsPictograms: ['GHS02','GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228','H260','H314'],
  ghsPStatements: ['P210','P223','P280','P305+P351+P338'],
  unNumber: 'UN 2257',
  transportClass: '4.3',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 80–150 / kg (金属钾)',
  majorMinerals: ['钾盐 (sylvite, KCl)','光卤石 (carnallite)','死海卤水'],
  ergGuide: 'ERG 138',
  ppe: '防火防毒手套、面罩、防碱防护服',
  firefightingAgent: '干砂、D类灭火器；禁止用水',
  neutralizationMethod: '用干砂覆盖；生成 KOH 用稀酸中和',
};

P3_SAFETY[20] = {  // Ca 钙
  ghsPictograms: ['GHS02','GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228','H260','H314'],
  ghsPStatements: ['P210','P223','P280','P305+P351+P338'],
  unNumber: 'UN 1401',
  transportClass: '4.3',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 5,
  oelSTEL: 10,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 60–120 / kg (金属钙)',
  majorMinerals: ['方解石 (calcite, CaCO₃)','石膏 (gypsum)','萤石 (fluorite)'],
  ergGuide: 'ERG 138',
  ppe: '防火防毒手套、面罩、防碱防护服',
  firefightingAgent: '干砂、D类灭火器；禁止用水',
  neutralizationMethod: '用干砂覆盖；生成 Ca(OH)₂ 用稀酸中和',
};

P3_SAFETY[24] = {  // Cr 铬
  ghsPictograms: ['GHS05','GHS06','GHS08','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H301','H311','H315','H317','H319','H350','H372','H410'],
  ghsPStatements: ['P201','P261','P272','P280','P305+P351+P338'],
  unNumber: 'UN 1755',
  transportClass: '8',
  ld50Oral: 190,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.5,
  oelSTEL: null,
  idlh: 250,
  carcinogenicity: '1',
  pricePerKg: '¥ 40–80 / kg (金属铬)',
  majorMinerals: ['铬铁矿 (chromite)'],
  ergGuide: 'ERG 154',
  ppe: '供气式呼吸器、防化服、耐酸手套（Cr(VI) 致癌）',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '还原 Cr(VI) 为 Cr(III) 后沉淀处置；含 Cr(VI) 废液为危险废物',
};

P3_SAFETY[25] = {  // Mn 锰
  ghsPictograms: ['GHS05','GHS06','GHS08'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H302','H315','H319','H332','H370','H372'],
  ghsPStatements: ['P201','P260','P280','P305+P351+P338'],
  unNumber: 'UN 3089',
  transportClass: '9',
  ld50Oral: 540,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.2,
  oelSTEL: null,
  idlh: 500,
  carcinogenicity: '0',
  pricePerKg: '¥ 18–35 / kg (电解锰)',
  majorMinerals: ['软锰矿 (pyrolusite)','菱锰矿 (rhodochrosite)'],
  ergGuide: 'ERG 154',
  ppe: '防尘口罩（P100）、手套',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '湿法除尘；含锰废液化学沉淀（加 NaOH 生成 Mn(OH)₂ 后氧化为 MnO(OH) 过滤）',
};

P3_SAFETY[26] = {  // Fe 铁
  ghsPictograms: ['GHS02','GHS07'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H228','H319','H335'],
  ghsPStatements: ['P210','P280','P305+P351+P338'],
  unNumber: 'UN 3089',
  transportClass: '4.1 (铁粉)',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 5,
  oelSTEL: 10,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 4–8 / kg (铁锭)',
  majorMinerals: ['赤铁矿 (hematite)','磁铁矿 (magnetite)','菱铁矿 (siderite)'],
  ergGuide: 'ERG 133 (铁粉)',
  ppe: '防尘口罩、手套',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '清扫收集',
};

P3_SAFETY[27] = {  // Co 钴
  ghsPictograms: ['GHS05','GHS06','GHS08','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H301','H311','H315','H317','H319','H332','H351','H372','H410'],
  ghsPStatements: ['P201','P261','P272','P280','P305+P351+P338'],
  unNumber: 'UN 3089',
  transportClass: '6.1',
  ld50Oral: 617,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.02,
  oelSTEL: 0.05,
  idlh: null,
  carcinogenicity: '2B',
  pricePerKg: '¥ 400–800 / kg (金属钴)',
  majorMinerals: ['砷钴矿 (skutterudite)','辉钴矿 (cobaltite)'],
  ergGuide: 'ERG 154',
  ppe: 'P100 防毒面具、防护服、手套（Co 化合物 2B 类致癌）',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '湿法除尘；含钴废液沉淀回收（加 Na₂S 生成 CoS 过滤）',
};

P3_SAFETY[28] = {  // Ni 镍
  ghsPictograms: ['GHS05','GHS06','GHS08','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H301','H311','H315','H317','H319','H332','H351','H372','H410'],
  ghsPStatements: ['P201','P261','P272','P280','P305+P351+P338'],
  unNumber: 'UN 3089',
  transportClass: '4.1 / 6.1',
  ld50Oral: 890,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.1,
  oelSTEL: 0.3,
  idlh: 10,
  carcinogenicity: '1',
  pricePerKg: '¥ 120–250 / kg (电解镍)',
  majorMinerals: ['镍黄铁矿 (pentlandite)','红砷镍矿 (niccolite)'],
  ergGuide: 'ERG 154',
  ppe: 'P100 防毒面具、防护服、手套（Ni 化合物 1 类致癌）',
  firefightingAgent: '水、干粉、CO₂；镍粉火用干砂',
  neutralizationMethod: '湿法除尘；含镍废液沉淀回收（加 Na₂CO₃ 生成 NiCO₃ 过滤）',
};

P3_SAFETY[29] = {  // Cu 铜
  ghsPictograms: ['GHS05','GHS06','GHS09'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H302','H315','H319','H400','H410'],
  ghsPStatements: ['P280','P305+P351+P338','P391'],
  unNumber: 'UN 3089',
  transportClass: '9',
  ld50Oral: 472,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 1,
  oelSTEL: 2,
  idlh: 100,
  carcinogenicity: '0',
  pricePerKg: '¥ 60–90 / kg (阴极铜)',
  majorMinerals: ['黄铜矿 (chalcopyrite)','孔雀石 (malachite)','斑铜矿'],
  ergGuide: 'ERG 133 (铜粉)',
  ppe: '防尘口罩、手套',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '清扫收集；含铜废液沉淀回收（加 Na₂S 生成 CuS 过滤）',
};

P3_SAFETY[33] = {  // As 砷
  ghsPictograms: ['GHS05','GHS06','GHS08','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H301','H311','H315','H319','H331','H350','H372','H410'],
  ghsPStatements: ['P201','P260','P280','P284','P305+P351+P338'],
  unNumber: 'UN 1558',
  transportClass: '6.1',
  ld50Oral: 15,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.01,
  oelSTEL: null,
  idlh: 5,
  carcinogenicity: '1',
  pricePerKg: '¥ 60–120 / kg (砷金属)',
  majorMinerals: ['雄黄 (realgar, As₄S₄)','雌黄 (orpiment, As₂S₃)','毒砂 (arsenopyrite)'],
  ergGuide: 'ERG 154',
  ppe: '供气式呼吸器、防化服、双层手套（As 剧毒+致癌）',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '还原为 As(0) 或沉淀为 FeAsO₄；含砷废物为危险废物，专业处置',
};

P3_SAFETY[35] = {  // Br 溴
  ghsPictograms: ['GHS05','GHS06','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H300','H310','H314','H330','H400','H410'],
  ghsPStatements: ['P260','P280','P284','P305+P351+P338'],
  unNumber: 'UN 1744',
  transportClass: '8',
  ld50Oral: 14,
  ld50Dermal: null,
  lc50Inhalation: 0.043,
  oelTWA: 0.7,
  oelSTEL: null,
  idlh: 4,
  carcinogenicity: '0',
  pricePerKg: '¥ 25–60 / kg (溴液)',
  majorMinerals: ['天然卤水（伴生）','海水'],
  ergGuide: 'ERG 156',
  ppe: '供气式呼吸器、防化服、耐溴手套（丁基橡胶）',
  firefightingAgent: '切断溴源；用雾状水降温；灭火剂需防爆',
  neutralizationMethod: '用 Na₂S₂O₃ 或 FeSO₄ 还原为 Br⁻ 后中和（Br₂ + Na₂S₂O₃ + H₂O → NaBr + NaBrO + H₂SO₄）',
};

P3_SAFETY[48] = {  // Cd 镉
  ghsPictograms: ['GHS05','GHS06','GHS08','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H301','H311','H315','H319','H350','H372','H410'],
  ghsPStatements: ['P201','P261','P280','P305+P351+P338'],
  unNumber: 'UN 2570',
  transportClass: '6.1',
  ld50Oral: 72,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.002,
  oelSTEL: 0.01,
  idlh: 9,
  carcinogenicity: '1',
  pricePerKg: '¥ 1500–3500 / kg (镉金属)',
  majorMinerals: ['硫镉矿 (greenockite)','闪锌矿（伴生）'],
  ergGuide: 'ERG 154',
  ppe: 'P100 防毒面具、防护服、手套（Cd 致癌）',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '湿法除尘；含镉废液沉淀为 CdS/Cd(OH)₂ 后专业处置',
};

P3_SAFETY[51] = {  // Sb 锑
  ghsPictograms: ['GHS05','GHS06','GHS08','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H301','H311','H315','H319','H331','H350','H372','H410'],
  ghsPStatements: ['P201','P260','P280','P284','P305+P351+P338'],
  unNumber: 'UN 2871',
  transportClass: '6.1',
  ld50Oral: 20,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.5,
  oelSTEL: null,
  idlh: 50,
  carcinogenicity: '2B',
  pricePerKg: '¥ 60–150 / kg (锑锭)',
  majorMinerals: ['辉锑矿 (stibnite, Sb₂S₃)','方锑矿 (senarmontite)'],
  ergGuide: 'ERG 154',
  ppe: 'P100 防毒面具、防护服、手套（Sb 2B 类致癌）',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '湿法除尘；含锑废液沉淀处置',
};

P3_SAFETY[53] = {  // I 碘
  ghsPictograms: ['GHS05','GHS06','GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H300','H310','H314','H330','H400','H410'],
  ghsPStatements: ['P260','P280','P284','P305+P351+P338'],
  unNumber: 'UN 1759',
  transportClass: '8',
  ld50Oral: 14,
  ld50Dermal: null,
  lc50Inhalation: 0.026,
  oelTWA: 1,
  oelSTEL: null,
  idlh: 10,
  carcinogenicity: '0',
  pricePerKg: '¥ 300–800 / kg (碘片)',
  majorMinerals: ['智利硝石（伴生）','海草（富集碘）'],
  ergGuide: 'ERG 156',
  ppe: '防毒面具、耐碘手套（丁基橡胶）、护目镜',
  firefightingAgent: '切断碘源；用雾状水降温（注意 I₂ 蒸气）',
  neutralizationMethod: '用 Na₂S₂O₃ 还原为 I⁻ 后中和；大量碘用淀粉检测确认清除',
};

// ── 第 4 周期（精选重点）────────────────────────────────────
P3_SAFETY[37] = {  // Rb 铷
  ghsPictograms: ['GHS02','GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228','H260','H314'],
  ghsPStatements: ['P210','P223','P280','P305+P351+P338'],
  unNumber: 'UN 3023',
  transportClass: '4.3',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 2000–5000 / kg (金属铷)',
  majorMinerals: ['锂云母（伴生）','铯榴石（伴生）'],
  ergGuide: 'ERG 138',
  ppe: '防火防毒手套、面罩、防碱防护服',
  firefightingAgent: '干砂、D类灭火器；禁止用水',
  neutralizationMethod: '用干砂覆盖；生成 RbOH 用稀酸中和',
};

P3_SAFETY[38] = {  // Sr 锶
  ghsPictograms: ['GHS02','GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228','H260','H314'],
  ghsPStatements: ['P210','P223','P280','P305+P351+P338'],
  unNumber: 'UN 1408',
  transportClass: '4.3',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  pricePerKg: '¥ 600–1500 / kg (碳酸锶)',
  majorMinerals: ['天青石 (celestine)','菱锶矿 (strontianite)'],
  ergGuide: 'ERG 138',
  ppe: '防火防毒手套、面罩、防碱防护服',
  firefightingAgent: '干砂、D类灭火器；禁止用水',
  neutralizationMethod: '用干砂覆盖；生成 Sr(OH)₂ 用稀酸中和',
};

// ══════════════════════════════════════════════════════
//  为其余 118-z 元素填充默认 P3 数据
//  （在 HTML 加载时由 mergeP3Data 完成）
// ══════════════════════════════════════════════════════

/**
 * 合并 P3_SAFETY 数据到 ELEMENTS 数组
 * 用法：在元素数据加载后调用  mergeP3Data(ELEMENTS);
 */
function mergeP3Data(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;

    // 如果 P3_SAFETY 中已有精确数据，直接合并
    if (P3_SAFETY[z]) {
      var p3 = P3_SAFETY[z];
      for (var key in p3) {
        if (p3.hasOwnProperty(key)) {
          el[key] = p3[key];
        }
      }
      continue;
    }

    // 否则生成默认数据并合并
    var d = defaultP3(z, el.category, el.symbol);
    for (var key in d) {
      if (d.hasOwnProperty(key)) {
        el[key] = d[key];
      }
    }
  }
}

// 自动合并：脚本加载后立即合并 P3 数据到 ELEMENTS
if (typeof ELEMENTS !== 'undefined') {
  mergeP3Data(ELEMENTS);
}
