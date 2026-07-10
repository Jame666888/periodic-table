/**
 * P4-2：先进晶体学数据
 * 包含：空间群、晶格参数、单胞原子数、配位数
 * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS
 */

var P4_CRYSTAL = {};

// ══════════════════════════════════════════════════════
//  精确晶体学数据（按 z 索引）
// ══════════════════════════════════════════════════════

// ── 第 1 周期 ────────────────────────────────────────────
P4_CRYSTAL[1] = {  // H 氢（固态：氢分子晶体）
  spaceGroup: 'P2₁/c (H₂)',
  latticeParams: { a: 4.47, b: 4.47, c: 4.47, alpha: 90, beta: 90, gamma: 90, note: 'H₂ 固态为分子晶体，温度 < 14 K' },
  Z: 4,
  coordinationNumber: 0,
  crystalSystem: '立方',
  note: '氢无典型金属/共价晶体结构；固态 H₂ 为分子晶体',
};

P4_CRYSTAL[2] = {  // He 氦（固态：稀有气体晶体）
  spaceGroup: 'Fd3m (³He) / P6₃/mmc (⁴He)',
  latticeParams: { a: 3.57, b: null, c: 5.83, alpha: 90, beta: 90, gamma: 120, note: '⁴He 在 < 1.7 K 为 hcp' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '⁴He 在极低温下为 hcp 结构',
};

P4_CRYSTAL[6] = {  // C 碳（金刚石）
  spaceGroup: 'Fd3m (金刚石) / P6₃/mmc (石墨)',
  latticeParams: { a: 3.567, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '金刚石：a=3.567 Å；石墨：a=2.461 Å, c=6.708 Å' },
  Z: 8,
  coordinationNumber: 4,  // 金刚石 sp³
  crystalSystem: '立方（金刚石）/ 六方（石墨）',
  note: '金刚石：每个 C 与 4 个 C 形成 sp³ 四面体；石墨：sp² 层状结构',
};

// ── 第 2 周期金属 ─────────────────────────────────────────
P4_CRYSTAL[11] = {  // Na 钠（bcc）
  spaceGroup: 'Im3m',
  latticeParams: { a: 4.2906, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '碱金属典型 bcc 结构，体心立方',
};

P4_CRYSTAL[12] = {  // Mg 镁（hcp）
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.2094, b: null, c: 5.2105, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: 'hcp 结构，ABAB 堆垛',
};

P4_CRYSTAL[13] = {  // Al 铝（fcc）
  spaceGroup: 'Fm3m',
  latticeParams: { a: 4.0495, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: 'fcc 结构，面心立方，ABCABC 堆垛',
};

P4_CRYSTAL[14] = {  // Si 硅（金刚石型）
  spaceGroup: 'Fd3m',
  latticeParams: { a: 5.4307, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 8,
  coordinationNumber: 4,
  crystalSystem: '立方',
  note: '金刚石型结构，每个 Si 与 4 个 Si 形成 sp³ 四面体',
};

// ── 第 3 周期金属 ─────────────────────────────────────────
P4_CRYSTAL[19] = {  // K 钾（bcc）
  spaceGroup: 'Im3m',
  latticeParams: { a: 5.328, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '碱金属典型 bcc 结构',
};

P4_CRYSTAL[20] = {  // Ca 钙（fcc，常温）
  spaceGroup: 'Fm3m (fcc) / P6₃/mmc (hcp, > 450°C)',
  latticeParams: { a: 5.588, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '常温 fcc；> 450°C 转为 hcp' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方 / 六方',
  note: '钙有多晶型转变',
};

// ── 过渡金属（部分重点）────────────────────────────────────
P4_CRYSTAL[22] = {  // Ti 钛（hcp，常温）
  spaceGroup: 'P6₃/mmc (hcp) / Im3m (bcc, > 882°C)',
  latticeParams: { a: 2.9506, b: null, c: 4.6788, alpha: 90, beta: 90, gamma: 120, note: '常温 α-Ti (hcp)；> 882°C β-Ti (bcc)' },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方 / 立方',
  note: '钛的 α→β 相变对合金设计重要',
};

P4_CRYSTAL[24] = {  // Cr 铬（bcc）
  spaceGroup: 'Im3m',
  latticeParams: { a: 2.884, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '体心立方结构',
};

P4_CRYSTAL[26] = {  // Fe 铁（bcc，常温）
  spaceGroup: 'Im3m (α-Fe, bcc) / Fm3m (γ-Fe, fcc, 912-1394°C)',
  latticeParams: { a: 2.8664, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: 'α-Fe (bcc, < 912°C)；γ-Fe (fcc, 912-1394°C)；δ-Fe (bcc, > 1394°C)' },
  Z: 2,
  coordinationNumber: 8,  // α-Fe
  crystalSystem: '立方（多晶型）',
  note: '铁有 α→γ→δ 多晶型转变，是钢热处理的基础',
};

P4_CRYSTAL[28] = {  // Ni 镍（fcc）
  spaceGroup: 'Fm3m',
  latticeParams: { a: 3.524, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '面心立方结构，磁有序温度 Tc = 627 K',
};

P4_CRYSTAL[29] = {  // Cu 铜（fcc）
  spaceGroup: 'Fm3m',
  latticeParams: { a: 3.6147, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '面心立方结构，高导电性',
};

P4_CRYSTAL[30] = {  // Zn 锌（hcp）
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 2.6649, b: null, c: 4.9468, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,  // 实际为 6+6
  crystalSystem: '六方',
  note: 'hcp 结构，但 c/a = 1.856 偏离理想值 1.633',
};

// ── 其余元素默认数据 ──────────────────────────────────────

function defaultP4Crystal(category, symbol) {
  var d = {
    spaceGroup: null,
    latticeParams: null,
    Z: null,
    coordinationNumber: null,
    crystalSystem: null,
    note: null,
  };

  // 根据类别生成合理的默认数据
  if (category === 'transition') {
    // 过渡金属：大多数为 bcc/fcc/hcp
    d.note = '过渡金属典型结构：bcc/fcc/hcp，具体参数待补充';
  } else if (category === 'alkali') {
    d.spaceGroup = 'Im3m (bcc)';
    d.coordinationNumber = 8;
    d.crystalSystem = '立方';
    d.note = '碱金属典型 bcc 结构';
  } else if (category === 'alkaline') {
    d.spaceGroup = 'Fm3m (fcc) / P6₃/mmc (hcp)';
    d.coordinationNumber = 12;
    d.crystalSystem = '立方 / 六方';
    d.note = '碱土金属有 fcc/hcp 多晶型';
  }

  return d;
}

// ══════════════════════════════════════════════════════
//  合并 P4 晶体学数据到 ELEMENTS 数组
// ══════════════════════════════════════════════════════

function mergeP4Crystal(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;

    if (P4_CRYSTAL[z]) {
      var p4 = P4_CRYSTAL[z];
      el.spaceGroup       = p4.spaceGroup;
      el.latticeParams    = p4.latticeParams;
      el.Z               = p4.Z;
      el.coordinationNumber = p4.coordinationNumber;
      el.crystalSystem   = p4.crystalSystem;
      el.crystalNote     = p4.note;
    } else {
      var d = defaultP4Crystal(el.category, el.symbol);
      el.spaceGroup       = d.spaceGroup;
      el.latticeParams    = d.latticeParams;
      el.Z               = d.Z;
      el.coordinationNumber = d.coordinationNumber;
      el.crystalSystem   = d.crystalSystem;
      el.crystalNote     = d.note;
    }
  }
}

// 自动合并
if (typeof ELEMENTS !== 'undefined') {
  mergeP4Crystal(ELEMENTS);
}
