/**
 * P4 系列：光谱数据模块
 * 包含：原子发射光谱、X射线荧光、XPS结合能、NMR性质
 * 用法：在 element.html 中加载此文件，然后调用 renderSpectral(el)
 */

// ══════════════════════════════════════════════════════
//  精确 P4 光谱数据（按 z 索引）
// ══════════════════════════════════════════════════════

var P4_SPECTRAL = {};

// ── 第 1 周期 ────────────────────────────────────────────
P4_SPECTRAL[1] = {  // H 氢
  emissionLines: [
    { wavelength: 656.28, intensity: '强', transition: '3→2 (Hα)', region: '可见/红' },
    { wavelength: 486.13, intensity: '强', transition: '4→2 (Hβ)', region: '可见/蓝绿' },
    { wavelength: 434.05, intensity: '中', transition: '5→2 (Hγ)', region: '可见/紫' },
    { wavelength: 410.17, intensity: '中', transition: '6→2 (Hδ)', region: '可见/紫' },
    { wavelength: 121.57, intensity: '极强', transition: '2→1 (Lyα)', region: '紫外' },
  ],
  xray: null,  // H 无 X 射线荧光
  xps: null,
  nmr: {
    spin: 0.5,
    naturalAbundance: 99.9885,
    magnetogyricRatio: 267.522187,
    reference: 'TMS (δ=0), H₂O (δ=4.79)',
    note: '¹H 是最灵敏的 NMR 核，广泛用于有机化学结构解析',
  },
};

P4_SPECTRAL[2] = {  // He 氦
  emissionLines: [
    { wavelength: 587.56, intensity: '强', transition: '3p→2s', region: '可见/黄' },
    { wavelength: 706.52, intensity: '中', transition: '3s→2p', region: '可见/红' },
    { wavelength: 388.86, intensity: '中', transition: '3p→2s', region: '可见/紫' },
  ],
  xray: null,
  xps: null,
  nmr: null,  // ³He 丰度极低，非常用 NMR 核
};

P4_SPECTRAL[3] = {  // Li 锂
  emissionLines: [
    { wavelength: 670.79, intensity: '强', transition: '2p→2s', region: '可见/红' },
    { wavelength: 610.36, intensity: '中', transition: '3d→2p', region: '可见/橙' },
    { wavelength: 460.30, intensity: '弱', transition: '4f→2p', region: '可见/蓝' },
  ],
  xray: { Ka: 0.054, Kb: 0.055, La: null },
  xps: { coreLevel: 'Li 1s', bindingEnergy: 54.7, note: '结合能低，易受荷电效应影响' },
  nmr: {
    spin: 1,
    naturalAbundance: 92.5,
    magnetogyricRatio: 103.962,
    reference: 'LiCl / D₂O',
    note: '⁶Li (I=1) 和 ⁷Li (I=3/2) 均有 NMR 活性',
  },
};

P4_SPECTRAL[4] = {  // Be 铍
  emissionLines: [
    { wavelength: 234.86, intensity: '强', transition: '2p→2s', region: '紫外' },
  ],
  xray: { Ka: 0.109, Kb: 0.112, La: null },
  xps: { coreLevel: 'Be 1s', bindingEnergy: 111.0 },
  nmr: {
    spin: 3,
    naturalAbundance: 100,
    magnetogyricRatio: -37.620,
    reference: 'Be(H₂O)₄²⁺ / D₂O',
    note: '⁹Be (I=3/2) 是唯一的稳定 Be 同位素',
  },
};

P4_SPECTRAL[5] = {  // B 硼
  emissionLines: [
    { wavelength: 249.68, intensity: '强', transition: '2p→2s', region: '紫外' },
    { wavelength: 208.89, intensity: '中', transition: '3s→2p', region: '紫外' },
  ],
  xray: { Ka: 0.183, Kb: 0.188, La: null },
  xps: { coreLevel: 'B 1s', bindingEnergy: 187.1 },
  nmr: {
    spin: 3,
    naturalAbundance: 80.1,
    magnetogyricRatio: 85.841,
    reference: 'BF₃·OEt₂ (δ=0)',
    note: '¹¹B (I=3/2) 是常用 NMR 核，四极矩较大',
  },
};

P4_SPECTRAL[6] = {  // C 碳
  emissionLines: [
    { wavelength: 247.86, intensity: '强', transition: '2p→2s (C I)', region: '紫外' },
    { wavelength: 193.09, intensity: '强', transition: '3p→2s (C I)', region: '紫外' },
    { wavelength: 426.73, intensity: '强', transition: '3p→2s (C₂ 斯万带)', region: '可见/蓝' },
  ],
  xray: { Ka: 0.277, Kb: 0.283, La: null },
  xps: { coreLevel: 'C 1s', bindingEnergy: 284.8, note: '有机化合物中最常用的 XPS 峰，作为结合能校准参考' },
  nmr: {
    spin: 0.5,
    naturalAbundance: 1.07,
    magnetogyricRatio: 67.2828,
    reference: 'TMS (δ=0)',
    note: '¹³C (I=1/2) 天然丰度低，需长时间累加；¹²C 无 NMR 活性',
  },
};

P4_SPECTRAL[7] = {  // N 氮
  emissionLines: [
    { wavelength: 149.26, intensity: '强', transition: '3p→2s (N I)', region: '紫外' },
    { wavelength: 174.27, intensity: '中', transition: '3d→2p (N I)', region: '紫外' },
  ],
  xray: { Ka: 0.392, Kb: 0.401, La: null },
  xps: { coreLevel: 'N 1s', bindingEnergy: 399.0, note: '胺基 (~399 eV)、硝基 (~406 eV) 有特征位移' },
  nmr: {
    spin: 1,
    naturalAbundance: 0.37,
    magnetogyricRatio: -27.116,
    reference: 'CH₃NO₂ (δ=0)',
    note: '¹⁵N (I=1/2) 天然丰度极低，需富集后测定',
  },
};

P4_SPECTRAL[8] = {  // O 氧
  emissionLines: [
    { wavelength: 130.22, intensity: '强', transition: '3p→2s (O I)', region: '紫外' },
    { wavelength: 777.19, intensity: '强', transition: '3p→3s (O I)', region: '近红外' },
  ],
  xray: { Ka: 0.525, Kb: 0.541, La: null },
  xps: { coreLevel: 'O 1s', bindingEnergy: 531.0, note: '金属氧化物 (~530 eV)、有机含氧 (~532 eV) 可区分' },
  nmr: null,  // ¹⁷O (I=5/2) 四极矩大，分辨率差
};

P4_SPECTRAL[9] = {  // F 氟
  emissionLines: [
    { wavelength: 95.48, intensity: '强', transition: '3p→2s (F I)', region: '真空紫外' },
  ],
  xray: { Ka: 0.677, Kb: 0.700, La: null },
  xps: { coreLevel: 'F 1s', bindingEnergy: 685.0 },
  nmr: {
    spin: 0.5,
    naturalAbundance: 100,
    magnetogyricRatio: 251.6232,
    reference: 'CFCl₃ (δ=0)',
    note: '¹⁹F (I=1/2) 天然丰度 100%，NMR 灵敏度高',
  },
};

P4_SPECTRAL[10] = {  // Ne 氖
  emissionLines: [
    { wavelength: 585.25, intensity: '强', transition: '3p→3s (Ne I)', region: '可见/黄' },
    { wavelength: 640.22, intensity: '强', transition: '3p→3s (Ne I)', region: '可见/红' },
    { wavelength: 703.24, intensity: '中', transition: '3p→3s (Ne I)', region: '可见/红' },
  ],
  xray: { Ka: 0.849, Kb: 0.883, La: null },
  xps: null,
  nmr: null,
};

// ── 第 2 周期金属 ─────────────────────────────────────────
P4_SPECTRAL[11] = {  // Na 钠
  emissionLines: [
    { wavelength: 589.00, intensity: '极强', transition: '3p→3s (Na D₂)', region: '可见/黄' },
    { wavelength: 589.59, intensity: '极强', transition: '3p→3s (Na D₁)', region: '可见/黄' },
    { wavelength: 330.23, intensity: '强', transition: '4s→3p (Na I)', region: '紫外' },
  ],
  xray: { Ka: 1.041, Kb: 1.082, La: null },
  xps: { coreLevel: 'Na 1s', bindingEnergy: 1071.5 },
  nmr: null,
};

P4_SPECTRAL[12] = {  // Mg 镁
  emissionLines: [
    { wavelength: 285.21, intensity: '强', transition: '3p→3s (Mg I)', region: '紫外' },
    { wavelength: 383.83, intensity: '强', transition: '4s→3p (Mg I)', region: '可见/紫' },
    { wavelength: 518.36, intensity: '中', transition: '5s→3p (Mg I)', region: '可见/绿' },
  ],
  xray: { Ka: 1.254, Kb: 1.307, La: null },
  xps: { coreLevel: 'Mg 2p', bindingEnergy: 49.8, note: 'Mg 2p 是 Mg 最常用的 XPS 峰' },
  nmr: null,
};

P4_SPECTRAL[13] = {  // Al 铝
  emissionLines: [
    { wavelength: 308.22, intensity: '强', transition: '4s→3p (Al I)', region: '紫外' },
    { wavelength: 396.15, intensity: '强', transition: '4s→3p (Al I)', region: '可见/紫' },
  ],
  xray: { Ka: 1.487, Kb: 1.553, La: null },
  xps: { coreLevel: 'Al 2p', bindingEnergy: 72.5, note: '金属 Al (~72.5 eV)、Al₂O₃ (~75.5 eV) 可区分' },
  nmr: {
    spin: 5,
    naturalAbundance: 100,
    magnetogyricRatio: 69.655,
    reference: 'Al(NO₃)₃ / D₂O (δ=0)',
    note: '²⁷Al (I=5/2) 四极矩大，谱线易展宽',
  },
};

P4_SPECTRAL[14] = {  // Si 硅
  emissionLines: [
    { wavelength: 243.52, intensity: '强', transition: '4p→4s (Si I)', region: '紫外' },
    { wavelength: 250.69, intensity: '强', transition: '4p→4s (Si I)', region: '紫外' },
    { wavelength: 288.16, intensity: '中', transition: '5s→4p (Si I)', region: '紫外' },
  ],
  xray: { Ka: 1.740, Kb: 1.829, La: null },
  xps: { coreLevel: 'Si 2p', bindingEnergy: 99.0, note: '单晶硅 (~99 eV)、SiO₂ (~103 eV) 有明显位移' },
  nmr: {
    spin: 0.5,
    naturalAbundance: 4.68,
    magnetogyricRatio: -53.190,
    reference: 'TMS (δ=0)',
    note: '²⁹Si (I=1/2) 天然丰度低，但半导体研究中重要',
  },
};

P4_SPECTRAL[15] = {  // P 磷
  emissionLines: [
    { wavelength: 177.50, intensity: '强', transition: '4p→4s (P I)', region: '紫外' },
    { wavelength: 185.46, intensity: '强', transition: '4p→4s (P I)', region: '紫外' },
    { wavelength: 213.55, intensity: '中', transition: '5s→4p (P I)', region: '紫外' },
  ],
  xray: { Ka: 2.013, Kb: 2.124, La: null },
  xps: { coreLevel: 'P 2p', bindingEnergy: 130.0 },
  nmr: {
    spin: 0.5,
    naturalAbundance: 100,
    magnetogyricRatio: 108.291,
    reference: 'H₃PO₄ (δ=0)',
    note: '³¹P (I=1/2) 天然丰度 100%，磷化学常用 NMR 核',
  },
};

P4_SPECTRAL[16] = {  // S 硫
  emissionLines: [
    { wavelength: 180.73, intensity: '强', transition: '4p→4s (S I)', region: '紫外' },
    { wavelength: 182.04, intensity: '强', transition: '4p→4s (S I)', region: '紫外' },
  ],
  xray: { Ka: 2.308, Kb: 2.445, La: null },
  xps: { coreLevel: 'S 2p', bindingEnergy: 164.0, note: '硫醚 (~164 eV)、砜 (~168 eV) 有特征位移' },
  nmr: null,  // ³³S (I=3/2) 天然丰度低且四极矩大
};

P4_SPECTRAL[17] = {  // Cl 氯
  emissionLines: [
    { wavelength: 134.72, intensity: '强', transition: '4p→4s (Cl I)', region: '紫外' },
    { wavelength: 138.97, intensity: '强', transition: '4p→4s (Cl I)', region: '紫外' },
  ],
  xray: { Ka: 2.622, Kb: 2.790, La: null },
  xps: { coreLevel: 'Cl 2p', bindingEnergy: 200.0 },
  nmr: {
    spin: 3,
    naturalAbundance: 75.78,
    magnetogyricRatio: 20.964,
    reference: 'NaCl / D₂O (δ=0)',
    note: '³⁵Cl 和 ³⁷Cl 均有 NMR 活性，四极矩较大',
  },
};

// ── 第 3 周期金属 ─────────────────────────────────────────
P4_SPECTRAL[19] = {  // K 钾
  emissionLines: [
    { wavelength: 766.49, intensity: '极强', transition: '5p→4s (K I)', region: '近红外/红' },
    { wavelength: 769.90, intensity: '极强', transition: '5p→4s (K I)', region: '近红外/红' },
  ],
  xray: { Ka: 3.313, Kb: 3.589, La: null },
  xps: { coreLevel: 'K 2p₃/₂', bindingEnergy: 293.0 },
  nmr: null,
};

P4_SPECTRAL[20] = {  // Ca 钙
  emissionLines: [
    { wavelength: 422.67, intensity: '极强', transition: '4p→4s (Ca I)', region: '可见/紫' },
    { wavelength: 643.91, intensity: '强', transition: '5p→4s (Ca I)', region: '可见/红' },
  ],
  xray: { Ka: 3.690, Kb: 4.012, La: null },
  xps: { coreLevel: 'Ca 2p₃/₂', bindingEnergy: 347.0 },
  nmr: null,
};

// ── 过渡金属（部分重点）────────────────────────────────────
P4_SPECTRAL[24] = {  // Cr 铬
  emissionLines: [
    { wavelength: 357.87, intensity: '强', transition: '4p→4s (Cr I)', region: '可见/紫' },
    { wavelength: 359.35, intensity: '强', transition: '4p→4s (Cr I)', region: '可见/紫' },
    { wavelength: 425.44, intensity: '中', transition: '3d4p→3d4s (Cr I)', region: '可见/紫' },
  ],
  xray: { Ka: 5.412, Kb: 5.946, La: 0.572 },
  xps: { coreLevel: 'Cr 2p₃/₂', bindingEnergy: 574.0, note: 'Cr(0) ~574 eV, Cr(III) ~577 eV, Cr(VI) ~580 eV' },
  nmr: null,
};

P4_SPECTRAL[25] = {  // Mn 锰
  emissionLines: [
    { wavelength: 279.48, intensity: '强', transition: '4p→4s (Mn I)', region: '紫外' },
    { wavelength: 403.08, intensity: '强', transition: '5s→4p (Mn I)', region: '可见/紫' },
  ],
  xray: { Ka: 5.895, Kb: 6.490, La: 0.637 },
  xps: { coreLevel: 'Mn 2p₃/₂', bindingEnergy: 642.0 },
  nmr: null,
};

P4_SPECTRAL[26] = {  // Fe 铁
  emissionLines: [
    { wavelength: 248.33, intensity: '强', transition: '4p→4s (Fe I)', region: '紫外' },
    { wavelength: 352.12, intensity: '强', transition: '5s→4p (Fe I)', region: '可见/紫' },
    { wavelength: 438.35, intensity: '中', transition: '5s→4p (Fe I)', region: '可见/蓝' },
  ],
  xray: { Ka: 6.400, Kb: 7.058, La: 0.705 },
  xps: { coreLevel: 'Fe 2p₃/₂', bindingEnergy: 707.0, note: 'Fe(0) ~707 eV, Fe(II) ~710 eV, Fe(III) ~711 eV' },
  nmr: null,
};

P4_SPECTRAL[27] = {  // Co 钴
  emissionLines: [
    { wavelength: 240.72, intensity: '强', transition: '4p→4s (Co I)', region: '紫外' },
    { wavelength: 345.35, intensity: '强', transition: '5s→4p (Co I)', region: '可见/紫' },
  ],
  xray: { Ka: 6.930, Kb: 7.649, La: 0.776 },
  xps: { coreLevel: 'Co 2p₃/₂', bindingEnergy: 778.0 },
  nmr: {
    spin: 7,
    naturalAbundance: 100,
    magnetogyricRatio: 63.789,
    reference: 'K₃[Co(CN)₆] (δ=0)',
    note: '⁵⁹Co (I=7/2) 天然丰度 100%，四极矩大',
  },
};

P4_SPECTRAL[28] = {  // Ni 镍
  emissionLines: [
    { wavelength: 232.00, intensity: '强', transition: '4p→4s (Ni I)', region: '紫外' },
    { wavelength: 341.48, intensity: '强', transition: '5s→4p (Ni I)', region: '可见/紫' },
  ],
  xray: { Ka: 7.478, Kb: 8.265, La: 0.851 },
  xps: { coreLevel: 'Ni 2p₃/₂', bindingEnergy: 852.6, note: '金属 Ni ~852.6 eV, NiO ~854.5 eV' },
  nmr: null,
};

P4_SPECTRAL[29] = {  // Cu 铜
  emissionLines: [
    { wavelength: 324.75, intensity: '极强', transition: '4p→4s (Cu I)', region: '紫外' },
    { wavelength: 327.40, intensity: '极强', transition: '4p→4s (Cu I)', region: '紫外' },
    { wavelength: 510.55, intensity: '强', transition: '5s→4p (Cu I)', region: '可见/绿' },
  ],
  xray: { Ka: 8.047, Kb: 8.905, La: 0.930 },
  xps: { coreLevel: 'Cu 2p₃/₂', bindingEnergy: 932.7, note: 'Cu(0) ~932.7 eV, Cu(I) ~932.5 eV, Cu(II) ~934.5 eV' },
  nmr: {
    spin: 3,
    naturalAbundance: 69.17,
    magnetogyricRatio: 71.182,
    reference: 'CuCl₂ / D₂O',
    note: '⁶³Cu 和 ⁶⁵Cu 均有 NMR 活性',
  },
};

P4_SPECTRAL[30] = {  // Zn 锌
  emissionLines: [
    { wavelength: 213.86, intensity: '强', transition: '4p→4s (Zn I)', region: '紫外' },
    { wavelength: 307.59, intensity: '强', transition: '5s→4p (Zn I)', region: '紫外' },
  ],
  xray: { Ka: 8.638, Kb: 9.572, La: 1.022 },
  xps: { coreLevel: 'Zn 2p₃/₂', bindingEnergy: 1022.0, note: 'Zn 2p 峰形对称，无震激伴峰' },
  nmr: null,
};

// ── 其余元素默认数据 ──────────────────────────────────────

function defaultP4(category, symbol) {
  var d = {
    emissionLines: null,
    xray: null,
    xps: null,
    nmr: null,
  };

  // 根据类别生成合理的默认数据
  if (category === 'nonmetal' || category === 'halogen' || category === 'noble') {
    // 非金属/卤素/稀有气体：可能有紫外发射线
    d.emissionLines = null;  // 需要具体数据
  }

  if (category === 'metal' || category === 'transition' || category === 'alkali' || category === 'alkaline') {
    // 金属：有 X 射线荧光
    // 但这里留空，等待具体数据
  }

  return d;
}

// ══════════════════════════════════════════════════════
//  合并 P4 光谱数据到 ELEMENTS 数组
// ══════════════════════════════════════════════════════

function mergeP4Spectral(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;

    if (P4_SPECTRAL[z]) {
      var p4 = P4_SPECTRAL[z];
      el.emissionLines   = p4.emissionLines;
      el.xray           = p4.xray;
      el.xps            = p4.xps;
      el.nmr            = p4.nmr;
    } else {
      var d = defaultP4(el.category, el.symbol);
      el.emissionLines   = d.emissionLines;
      el.xray           = d.xray;
      el.xps            = d.xps;
      el.nmr            = d.nmr;
    }
  }
}

// 自动合并
if (typeof ELEMENTS !== 'undefined') {
  mergeP4Spectral(ELEMENTS);
}
