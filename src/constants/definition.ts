export const DEFINITION = {
  sCL: {
    tag: 'SCL',
    attributes: {
      available: ['release', 'revision', 'version'],
      details: {
        release: {
          required: true,
          default: '4',
          validation: ['4'],
          enum: [],
        },
        revision: {
          required: true,
          default: 'B',
          validation: ['B'],
          enum: [],
        },
        version: {
          required: true,
          default: '2007',
          validation: ['2007'],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'header',
        'substation',
        'communication',
        'iED',
        'dataTypeTemplates',
        'line',
        'process',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        header: {
          required: true,
          maxOccurrences: 1,
        },
        substation: {
          required: false,
          maxOccurrences: null,
        },
        communication: {
          required: false,
          maxOccurrences: 1,
        },
        iED: {
          required: false,
          maxOccurrences: null,
        },
        dataTypeTemplates: {
          required: false,
          maxOccurrences: 1,
        },
        line: {
          required: false,
          maxOccurrences: null,
        },
        process: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  text: {
    tag: 'Text',
    attributes: {
      available: ['source'],
      details: {
        source: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  private: {
    tag: 'Private',
    attributes: {
      available: ['source', 'type'],
      details: {
        source: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        type: {
          required: true,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString', '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  header: {
    tag: 'Header',
    attributes: {
      available: ['id', 'version', 'revision', 'toolID', 'nameStructure'],
      details: {
        id: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        version: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        revision: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        toolID: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        nameStructure: {
          required: false,
          default: 'IEDName',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['IEDName'],
        },
      },
    },
    subElements: {
      available: ['text', 'history'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        history: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  history: {
    tag: 'History',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: ['hitem'],
      details: {
        hitem: {
          required: true,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  hitem: {
    tag: 'Hitem',
    attributes: {
      available: ['revision', 'version', 'what', 'when', 'who', 'why'],
      details: {
        revision: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        version: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        what: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        when: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        who: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        why: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  substation: {
    tag: 'Substation',
    attributes: {
      available: ['desc', 'name'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'lNode',
        'powerTransformer',
        'generalEquipment',
        'voltageLevel',
        'function',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        powerTransformer: {
          required: false,
          maxOccurrences: null,
        },
        generalEquipment: {
          required: false,
          maxOccurrences: null,
        },
        voltageLevel: {
          required: true,
          maxOccurrences: null,
        },
        function: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  lNode: {
    tag: 'LNode',
    attributes: {
      available: ['desc', 'iedName', 'ldInst', 'lnClass', 'lnInst', 'lnType', 'prefix'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        iedName: {
          required: false,
          default: 'None',
          validation: [
            {
              OR: [
                {
                  AND: [
                    [
                      'xs:Name',
                      {
                        OR: ['[A-Za-z][0-9A-Za-z_]*'],
                      },
                    ],
                    {
                      OR: [
                        '[A-Za-z][0-9A-Za-z_]{0,2}',
                        '[A-Za-z][0-9A-Za-z_]{4,63}',
                        '[A-MO-Za-z][0-9A-Za-z_]{3}',
                        'N[0-9A-Za-np-z_][0-9A-Za-z_]{2}',
                        'No[0-9A-Za-mo-z_][0-9A-Za-z_]',
                        'Non[0-9A-Za-df-z_]',
                      ],
                    },
                    '.{,64}',
                  ],
                },
                {
                  AND: [
                    [
                      'xs:Name',
                      {
                        OR: ['[A-Za-z][0-9A-Za-z_]*'],
                      },
                    ],
                    {
                      OR: ['None'],
                    },
                  ],
                },
              ],
            },
          ],
          enum: [],
        },
        ldInst: {
          required: false,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:normalizedString',
                    {
                      OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                    },
                    '.{,64}',
                  ],
                },
                {
                  AND: ['xs:normalizedString', '.{,0}'],
                },
              ],
            },
          ],
          enum: [],
        },
        lnClass: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        lnInst: {
          required: false,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:normalizedString',
                    {
                      OR: ['[0-9]{1,12}'],
                    },
                  ],
                },
                {
                  AND: ['xs:normalizedString', '.{,0}'],
                },
              ],
            },
          ],
          enum: [],
        },
        lnType: {
          required: false,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        prefix: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*', ''],
                },
                '.{,11}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  powerTransformer: {
    tag: 'PowerTransformer',
    attributes: {
      available: ['desc', 'name', 'type', 'virtual'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: true,
          default: 'PTR',
          validation: ['PTR'],
          enum: [],
        },
        virtual: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'lNode', 'transformerWinding', 'subEquipment', 'eqFunction'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        transformerWinding: {
          required: true,
          maxOccurrences: null,
        },
        subEquipment: {
          required: false,
          maxOccurrences: null,
        },
        eqFunction: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  transformerWinding: {
    tag: 'TransformerWinding',
    attributes: {
      available: ['desc', 'name', 'type', 'virtual'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: true,
          default: 'PTW',
          validation: ['PTW'],
          enum: [],
        },
        virtual: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'lNode',
        'terminal',
        'subEquipment',
        'tapChanger',
        'neutralPoint',
        'eqFunction',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        terminal: {
          required: false,
          maxOccurrences: 2,
        },
        subEquipment: {
          required: false,
          maxOccurrences: null,
        },
        tapChanger: {
          required: false,
          maxOccurrences: 1,
        },
        neutralPoint: {
          required: false,
          maxOccurrences: 1,
        },
        eqFunction: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  terminal: {
    tag: 'Terminal',
    attributes: {
      available: [
        'bayName',
        'cNodeName',
        'connectivityNode',
        'desc',
        'lineName',
        'name',
        'processName',
        'substationName',
        'voltageLevelName',
      ],
      details: {
        bayName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        cNodeName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        connectivityNode: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['.+/.+(/.+)*'],
                },
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        lineName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        name: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: [],
        },
        processName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['.+(/.+)*'],
                },
              ],
            },
          ],
          enum: [],
        },
        substationName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        voltageLevelName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  subEquipment: {
    tag: 'SubEquipment',
    attributes: {
      available: ['desc', 'name', 'phase', 'virtual'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        phase: {
          required: false,
          default: 'none',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['A', 'B', 'C', 'N', 'all', 'none', 'AB', 'BC', 'CA'],
        },
        virtual: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'lNode', 'eqFunction'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        eqFunction: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  eqFunction: {
    tag: 'EqFunction',
    attributes: {
      available: ['desc', 'name', 'type'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'lNode', 'generalEquipment', 'eqSubFunction'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        generalEquipment: {
          required: false,
          maxOccurrences: null,
        },
        eqSubFunction: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  generalEquipment: {
    tag: 'GeneralEquipment',
    attributes: {
      available: ['desc', 'name', 'type', 'virtual'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['\\i\\c*'],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['E[A-Z]*'],
                    },
                    '.{3,}',
                  ],
                },
              ],
            },
          ],
          enum: ['AXN', 'BAT', 'MOT', 'FAN', 'FIL', 'PMP', 'TNK', 'VLV'],
        },
        virtual: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'lNode', 'eqFunction'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        eqFunction: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  eqSubFunction: {
    tag: 'EqSubFunction',
    attributes: {
      available: ['desc', 'name', 'type'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'lNode', 'generalEquipment', 'eqSubFunction'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        generalEquipment: {
          required: false,
          maxOccurrences: null,
        },
        eqSubFunction: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  tapChanger: {
    tag: 'TapChanger',
    attributes: {
      available: ['desc', 'name', 'type', 'virtual'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: true,
          default: 'LTC',
          validation: ['LTC'],
          enum: [],
        },
        virtual: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'lNode', 'subEquipment', 'eqFunction'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        subEquipment: {
          required: false,
          maxOccurrences: null,
        },
        eqFunction: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  neutralPoint: {
    tag: 'NeutralPoint',
    attributes: {
      available: [
        'bayName',
        'cNodeName',
        'connectivityNode',
        'desc',
        'lineName',
        'name',
        'processName',
        'substationName',
        'voltageLevelName',
      ],
      details: {
        bayName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        cNodeName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        connectivityNode: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['.+/.+(/.+)*'],
                },
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        lineName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        name: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: [],
        },
        processName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['.+(/.+)*'],
                },
              ],
            },
          ],
          enum: [],
        },
        substationName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        voltageLevelName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  voltageLevel: {
    tag: 'VoltageLevel',
    attributes: {
      available: ['desc', 'name', 'nomFreq', 'numPhases'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        nomFreq: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:decimal'],
            },
          ],
          enum: [],
        },
        numPhases: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedByte'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'lNode',
        'powerTransformer',
        'generalEquipment',
        'voltage',
        'bay',
        'function',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        powerTransformer: {
          required: false,
          maxOccurrences: null,
        },
        generalEquipment: {
          required: false,
          maxOccurrences: null,
        },
        voltage: {
          required: false,
          maxOccurrences: 1,
        },
        bay: {
          required: true,
          maxOccurrences: null,
        },
        function: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  voltage: {
    tag: 'Voltage',
    attributes: {
      available: ['unit', 'multiplier'],
      details: {
        unit: {
          required: true,
          default: 'V',
          validation: ['V'],
          enum: [],
        },
        multiplier: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: [
            '',
            'm',
            'k',
            'M',
            'mu',
            'y',
            'z',
            'a',
            'f',
            'p',
            'n',
            'c',
            'd',
            'da',
            'h',
            'G',
            'T',
            'P',
            'E',
            'Z',
            'Y',
          ],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  bay: {
    tag: 'Bay',
    attributes: {
      available: ['desc', 'name'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'lNode',
        'powerTransformer',
        'generalEquipment',
        'conductingEquipment',
        'connectivityNode',
        'function',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        powerTransformer: {
          required: false,
          maxOccurrences: null,
        },
        generalEquipment: {
          required: false,
          maxOccurrences: null,
        },
        conductingEquipment: {
          required: false,
          maxOccurrences: null,
        },
        connectivityNode: {
          required: false,
          maxOccurrences: null,
        },
        function: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  conductingEquipment: {
    tag: 'ConductingEquipment',
    attributes: {
      available: ['desc', 'name', 'type', 'virtual'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['\\i\\c*'],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['E[A-Z]*'],
                    },
                    '.{3,}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'CBR',
            'DIS',
            'VTR',
            'CTR',
            'GEN',
            'CAP',
            'REA',
            'CON',
            'MOT',
            'EFN',
            'PSH',
            'BAT',
            'BSH',
            'CAB',
            'GIL',
            'LIN',
            'RES',
            'RRC',
            'SAR',
            'TCF',
            'TCR',
            'IFL',
            'FAN',
            'SCR',
            'SMC',
            'PMP',
          ],
        },
        virtual: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'lNode', 'terminal', 'subEquipment', 'eqFunction'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        terminal: {
          required: false,
          maxOccurrences: 2,
        },
        subEquipment: {
          required: false,
          maxOccurrences: null,
        },
        eqFunction: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  connectivityNode: {
    tag: 'ConnectivityNode',
    attributes: {
      available: ['desc', 'name', 'pathName'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        pathName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['.+/.+(/.+)*'],
                },
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'lNode'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  function: {
    tag: 'Function',
    attributes: {
      available: ['desc', 'name', 'type'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'lNode',
        'subFunction',
        'generalEquipment',
        'conductingEquipment',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        subFunction: {
          required: false,
          maxOccurrences: null,
        },
        generalEquipment: {
          required: false,
          maxOccurrences: null,
        },
        conductingEquipment: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  subFunction: {
    tag: 'SubFunction',
    attributes: {
      available: ['desc', 'name', 'type'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'lNode',
        'generalEquipment',
        'conductingEquipment',
        'subFunction',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        generalEquipment: {
          required: false,
          maxOccurrences: null,
        },
        conductingEquipment: {
          required: false,
          maxOccurrences: null,
        },
        subFunction: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  communication: {
    tag: 'Communication',
    attributes: {
      available: ['desc'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'subNetwork'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        subNetwork: {
          required: true,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  subNetwork: {
    tag: 'SubNetwork',
    attributes: {
      available: ['desc', 'name', 'type'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString', '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'bitRate', 'connectedAP'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        bitRate: {
          required: false,
          maxOccurrences: 1,
        },
        connectedAP: {
          required: true,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  bitRate: {
    tag: 'BitRate',
    attributes: {
      available: ['unit', 'multiplier'],
      details: {
        unit: {
          required: false,
          default: 'b/s',
          validation: ['b/s'],
          enum: [],
        },
        multiplier: {
          required: false,
          default: 'M',
          validation: ['M'],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  connectedAP: {
    tag: 'ConnectedAP',
    attributes: {
      available: ['apName', 'desc', 'iedName', 'redProt'],
      details: {
        apName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        iedName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: [
                    '[A-Za-z][0-9A-Za-z_]{0,2}',
                    '[A-Za-z][0-9A-Za-z_]{4,63}',
                    '[A-MO-Za-z][0-9A-Za-z_]{3}',
                    'N[0-9A-Za-np-z_][0-9A-Za-z_]{2}',
                    'No[0-9A-Za-mo-z_][0-9A-Za-z_]',
                    'Non[0-9A-Za-df-z_]',
                  ],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        redProt: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['none', 'hsr', 'prp', 'rstp'],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'address', 'gSE', 'sMV', 'physConn'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        address: {
          required: false,
          maxOccurrences: 1,
        },
        gSE: {
          required: false,
          maxOccurrences: null,
        },
        sMV: {
          required: false,
          maxOccurrences: null,
        },
        physConn: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  address: {
    tag: 'Address',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: ['p'],
      details: {
        p: {
          required: true,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  p: {
    tag: 'P',
    attributes: {
      available: ['type'],
      details: {
        type: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['\\i\\c*'],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:normalizedString',
                    {
                      OR: ['[A-Z][0-9A-Za-z\\-]*'],
                    },
                  ],
                },
              ],
            },
          ],
          enum: [
            'IP',
            'IP-SUBNET',
            'IP-GATEWAY',
            'OSI-NSAP',
            'OSI-TSEL',
            'OSI-SSEL',
            'OSI-PSEL',
            'OSI-AP-Title',
            'OSI-AP-Invoke',
            'OSI-AE-Qualifier',
            'OSI-AE-Invoke',
            'MAC-Address',
            'APPID',
            'VLAN-PRIORITY',
            'VLAN-ID',
            'SNTP-Port',
            'MMS-Port',
            'DNSName',
            'IPv6FlowLabel',
            'IPv6ClassOfTraffic',
            'C37-118-IP-Port',
            'IP-UDP-PORT',
            'IP-TCP-PORT',
            'IPv6',
            'IPv6-SUBNET',
            'IPv6-GATEWAY',
            'IPv6-IGMPv3Src',
            'IP-IGMPv3Src',
            'IP-ClassOfTraffic',
          ],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  gSE: {
    tag: 'GSE',
    attributes: {
      available: ['cbName', 'desc', 'ldInst'],
      details: {
        cbName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        ldInst: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'address', 'minTime', 'maxTime'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        address: {
          required: false,
          maxOccurrences: 1,
        },
        minTime: {
          required: false,
          maxOccurrences: 1,
        },
        maxTime: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  minTime: {
    tag: 'MinTime',
    attributes: {
      available: ['unit', 'multiplier'],
      details: {
        unit: {
          required: false,
          default: 's',
          validation: ['s'],
          enum: [],
        },
        multiplier: {
          required: false,
          default: 'm',
          validation: ['m'],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  maxTime: {
    tag: 'MaxTime',
    attributes: {
      available: ['unit', 'multiplier'],
      details: {
        unit: {
          required: false,
          default: 's',
          validation: ['s'],
          enum: [],
        },
        multiplier: {
          required: false,
          default: 'm',
          validation: ['m'],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  sMV: {
    tag: 'SMV',
    attributes: {
      available: ['cbName', 'desc', 'ldInst'],
      details: {
        cbName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        ldInst: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'address'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        address: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  physConn: {
    tag: 'PhysConn',
    attributes: {
      available: ['desc', 'type'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        type: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: ['xs:normalizedString'],
                },
                {
                  AND: [
                    'xs:normalizedString',
                    {
                      OR: ['[A-Z][0-9A-Za-z\\-]*'],
                    },
                  ],
                },
              ],
            },
          ],
          enum: ['Connection', 'RedConn'],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'p'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        p: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  iED: {
    tag: 'IED',
    attributes: {
      available: [
        'configVersion',
        'desc',
        'engRight',
        'manufacturer',
        'name',
        'originalSclRelease',
        'originalSclRevision',
        'originalSclVersion',
        'owner',
        'type',
      ],
      details: {
        configVersion: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        engRight: {
          required: false,
          default: 'full',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: ['full', 'fix', 'dataflow'],
        },
        manufacturer: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: [
                    '[A-Za-z][0-9A-Za-z_]{0,2}',
                    '[A-Za-z][0-9A-Za-z_]{4,63}',
                    '[A-MO-Za-z][0-9A-Za-z_]{3}',
                    'N[0-9A-Za-np-z_][0-9A-Za-z_]{2}',
                    'No[0-9A-Za-mo-z_][0-9A-Za-z_]',
                    'Non[0-9A-Za-df-z_]',
                  ],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        originalSclRelease: {
          required: false,
          default: '1',
          validation: [
            {
              AND: ['xs:unsignedByte'],
            },
          ],
          enum: [],
        },
        originalSclRevision: {
          required: false,
          default: 'A',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['[A-Z]'],
                },
              ],
            },
          ],
          enum: [],
        },
        originalSclVersion: {
          required: false,
          default: '2003',
          validation: [
            {
              AND: [
                [['xs:normalizedString'], '.{1,}'],
                {
                  OR: ['2[0-2][0-9]{2}'],
                },
              ],
            },
          ],
          enum: [],
        },
        owner: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'services', 'accessPoint', 'kDC'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        services: {
          required: false,
          maxOccurrences: 1,
        },
        accessPoint: {
          required: true,
          maxOccurrences: null,
        },
        kDC: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  services: {
    tag: 'Services',
    attributes: {
      available: ['nameLength'],
      details: {
        nameLength: {
          required: false,
          default: '32',
          validation: [
            {
              AND: [
                'xs:token',
                {
                  OR: ['32', '64', '6[5-9]', '[7-9]\\d', '[1-9]\\d\\d+'],
                },
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'dynAssociation',
        'settingGroups',
        'getDirectory',
        'getDataObjectDefinition',
        'dataObjectDirectory',
        'getDataSetValue',
        'setDataSetValue',
        'dataSetDirectory',
        'confDataSet',
        'dynDataSet',
        'readWrite',
        'timerActivatedControl',
        'confReportControl',
        'getCBValues',
        'confLogControl',
        'reportSettings',
        'logSettings',
        'gSESettings',
        'sMVSettings',
        'gSEDir',
        'gOOSE',
        'gSSE',
        'sMVsc',
        'fileHandling',
        'confLNs',
        'clientServices',
        'confLdName',
        'supSubscription',
        'confSigRef',
        'valueHandling',
        'redProt',
        'timeSyncProt',
        'commProt',
      ],
      details: {
        dynAssociation: {
          required: false,
          maxOccurrences: 1,
        },
        settingGroups: {
          required: false,
          maxOccurrences: 1,
        },
        getDirectory: {
          required: false,
          maxOccurrences: 1,
        },
        getDataObjectDefinition: {
          required: false,
          maxOccurrences: 1,
        },
        dataObjectDirectory: {
          required: false,
          maxOccurrences: 1,
        },
        getDataSetValue: {
          required: false,
          maxOccurrences: 1,
        },
        setDataSetValue: {
          required: false,
          maxOccurrences: 1,
        },
        dataSetDirectory: {
          required: false,
          maxOccurrences: 1,
        },
        confDataSet: {
          required: false,
          maxOccurrences: 1,
        },
        dynDataSet: {
          required: false,
          maxOccurrences: 1,
        },
        readWrite: {
          required: false,
          maxOccurrences: 1,
        },
        timerActivatedControl: {
          required: false,
          maxOccurrences: 1,
        },
        confReportControl: {
          required: false,
          maxOccurrences: 1,
        },
        getCBValues: {
          required: false,
          maxOccurrences: 1,
        },
        confLogControl: {
          required: false,
          maxOccurrences: 1,
        },
        reportSettings: {
          required: false,
          maxOccurrences: 1,
        },
        logSettings: {
          required: false,
          maxOccurrences: 1,
        },
        gSESettings: {
          required: false,
          maxOccurrences: 1,
        },
        sMVSettings: {
          required: false,
          maxOccurrences: 1,
        },
        gSEDir: {
          required: false,
          maxOccurrences: 1,
        },
        gOOSE: {
          required: false,
          maxOccurrences: 1,
        },
        gSSE: {
          required: false,
          maxOccurrences: 1,
        },
        sMVsc: {
          required: false,
          maxOccurrences: 1,
        },
        fileHandling: {
          required: false,
          maxOccurrences: 1,
        },
        confLNs: {
          required: false,
          maxOccurrences: 1,
        },
        clientServices: {
          required: false,
          maxOccurrences: 1,
        },
        confLdName: {
          required: false,
          maxOccurrences: 1,
        },
        supSubscription: {
          required: false,
          maxOccurrences: 1,
        },
        confSigRef: {
          required: false,
          maxOccurrences: 1,
        },
        valueHandling: {
          required: false,
          maxOccurrences: 1,
        },
        redProt: {
          required: false,
          maxOccurrences: 1,
        },
        timeSyncProt: {
          required: false,
          maxOccurrences: 1,
        },
        commProt: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  dynAssociation: {
    tag: 'DynAssociation',
    attributes: {
      available: ['max'],
      details: {
        max: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  settingGroups: {
    tag: 'SettingGroups',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: ['sGEdit', 'confSG'],
      details: {
        sGEdit: {
          required: false,
          maxOccurrences: 1,
        },
        confSG: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  sGEdit: {
    tag: 'SGEdit',
    attributes: {
      available: ['resvTms'],
      details: {
        resvTms: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  confSG: {
    tag: 'ConfSG',
    attributes: {
      available: ['resvTms'],
      details: {
        resvTms: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  getDirectory: {
    tag: 'GetDirectory',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  getDataObjectDefinition: {
    tag: 'GetDataObjectDefinition',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  dataObjectDirectory: {
    tag: 'DataObjectDirectory',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  getDataSetValue: {
    tag: 'GetDataSetValue',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  setDataSetValue: {
    tag: 'SetDataSetValue',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  dataSetDirectory: {
    tag: 'DataSetDirectory',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  confDataSet: {
    tag: 'ConfDataSet',
    attributes: {
      available: ['max', 'maxAttributes', 'modify'],
      details: {
        max: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        maxAttributes: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
        modify: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  dynDataSet: {
    tag: 'DynDataSet',
    attributes: {
      available: ['max', 'maxAttributes'],
      details: {
        max: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        maxAttributes: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  readWrite: {
    tag: 'ReadWrite',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  timerActivatedControl: {
    tag: 'TimerActivatedControl',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  confReportControl: {
    tag: 'ConfReportControl',
    attributes: {
      available: ['max', 'bufMode', 'bufConf', 'maxBuf'],
      details: {
        max: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        bufMode: {
          required: false,
          default: 'both',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['unbuffered', 'buffered', 'both'],
        },
        bufConf: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        maxBuf: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  getCBValues: {
    tag: 'GetCBValues',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  confLogControl: {
    tag: 'ConfLogControl',
    attributes: {
      available: ['max'],
      details: {
        max: {
          required: true,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  reportSettings: {
    tag: 'ReportSettings',
    attributes: {
      available: [
        'cbName',
        'datSet',
        'rptID',
        'optFields',
        'bufTime',
        'trgOps',
        'intgPd',
        'resvTms',
        'owner',
      ],
      details: {
        cbName: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Conf', 'Fix'],
        },
        datSet: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        rptID: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        optFields: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        bufTime: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        trgOps: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        intgPd: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        resvTms: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        owner: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  logSettings: {
    tag: 'LogSettings',
    attributes: {
      available: ['cbName', 'datSet', 'logEna', 'trgOps', 'intgPd'],
      details: {
        cbName: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Conf', 'Fix'],
        },
        datSet: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        logEna: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        trgOps: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        intgPd: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  gSESettings: {
    tag: 'GSESettings',
    attributes: {
      available: ['cbName', 'datSet', 'appID', 'dataLabel', 'kdaParticipant'],
      details: {
        cbName: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Conf', 'Fix'],
        },
        datSet: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        appID: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        dataLabel: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        kdaParticipant: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['mcSecurity'],
      details: {
        mcSecurity: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  mcSecurity: {
    tag: 'McSecurity',
    attributes: {
      available: ['signature', 'encryption'],
      details: {
        signature: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        encryption: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  sMVSettings: {
    tag: 'SMVSettings',
    attributes: {
      available: [
        'cbName',
        'datSet',
        'svID',
        'optFields',
        'smpRate',
        'samplesPerSec',
        'pdcTimeStamp',
        'synchSrcId',
        'nofASDU',
        'kdaParticipant',
      ],
      details: {
        cbName: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Conf', 'Fix'],
        },
        datSet: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        svID: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        optFields: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        smpRate: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Dyn', 'Conf', 'Fix'],
        },
        samplesPerSec: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        pdcTimeStamp: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        synchSrcId: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        nofASDU: {
          required: false,
          default: 'Fix',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Conf', 'Fix'],
        },
        kdaParticipant: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['smpRate', 'samplesPerSec', 'secPerSamples', 'mcSecurity'],
      details: {
        smpRate: {
          required: true,
          maxOccurrences: 1,
        },
        samplesPerSec: {
          required: true,
          maxOccurrences: 1,
        },
        secPerSamples: {
          required: true,
          maxOccurrences: 1,
        },
        mcSecurity: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  smpRate: {
    tag: 'SmpRate',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  samplesPerSec: {
    tag: 'SamplesPerSec',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  secPerSamples: {
    tag: 'SecPerSamples',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  gSEDir: {
    tag: 'GSEDir',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  gOOSE: {
    tag: 'GOOSE',
    attributes: {
      available: ['max', 'fixedOffs', 'goose', 'rGOOSE'],
      details: {
        max: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        fixedOffs: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        goose: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
        rGOOSE: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  gSSE: {
    tag: 'GSSE',
    attributes: {
      available: ['max'],
      details: {
        max: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  sMVsc: {
    tag: 'SMVsc',
    attributes: {
      available: ['max', 'delivery', 'deliveryConf', 'sv', 'rSV'],
      details: {
        max: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        delivery: {
          required: false,
          default: 'multicast',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['unicast', 'multicast', 'both'],
        },
        deliveryConf: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        sv: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
        rSV: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  fileHandling: {
    tag: 'FileHandling',
    attributes: {
      available: ['mms', 'ftp', 'ftps'],
      details: {
        mms: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
        ftp: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        ftps: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  confLNs: {
    tag: 'ConfLNs',
    attributes: {
      available: ['fixPrefix', 'fixLnInst'],
      details: {
        fixPrefix: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        fixLnInst: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  clientServices: {
    tag: 'ClientServices',
    attributes: {
      available: [
        'goose',
        'gsse',
        'bufReport',
        'unbufReport',
        'readLog',
        'sv',
        'supportsLdName',
        'maxAttributes',
        'maxReports',
        'maxGOOSE',
        'maxSMV',
        'rGOOSE',
        'rSV',
        'noIctBinding',
      ],
      details: {
        goose: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        gsse: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        bufReport: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        unbufReport: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        readLog: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        sv: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        supportsLdName: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        maxAttributes: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
        maxReports: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
        maxGOOSE: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
        maxSMV: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
        rGOOSE: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        rSV: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        noIctBinding: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['timeSyncProt', 'mcSecurity'],
      details: {
        timeSyncProt: {
          required: false,
          maxOccurrences: 1,
        },
        mcSecurity: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  timeSyncProt: {
    tag: 'TimeSyncProt',
    attributes: {
      available: ['sntp', 'iec61850_9_3', 'c37_238', 'other'],
      details: {
        sntp: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
        iec61850_9_3: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        c37_238: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        other: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  confLdName: {
    tag: 'ConfLdName',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  supSubscription: {
    tag: 'SupSubscription',
    attributes: {
      available: ['maxGo', 'maxSv'],
      details: {
        maxGo: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        maxSv: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  confSigRef: {
    tag: 'ConfSigRef',
    attributes: {
      available: ['max'],
      details: {
        max: {
          required: true,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  valueHandling: {
    tag: 'ValueHandling',
    attributes: {
      available: ['setToRO'],
      details: {
        setToRO: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  redProt: {
    tag: 'RedProt',
    attributes: {
      available: ['hsr', 'prp', 'rstp'],
      details: {
        hsr: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        prp: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        rstp: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  commProt: {
    tag: 'CommProt',
    attributes: {
      available: ['ipv6'],
      details: {
        ipv6: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  accessPoint: {
    tag: 'AccessPoint',
    attributes: {
      available: ['clock', 'desc', 'kdc', 'name', 'router'],
      details: {
        clock: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        kdc: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        router: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'server',
        'lN',
        'serverAt',
        'services',
        'gOOSESecurity',
        'sMVSecurity',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        server: {
          required: true,
          maxOccurrences: 1,
        },
        lN: {
          required: true,
          maxOccurrences: null,
        },
        serverAt: {
          required: true,
          maxOccurrences: 1,
        },
        services: {
          required: false,
          maxOccurrences: 1,
        },
        gOOSESecurity: {
          required: false,
          maxOccurrences: 7,
        },
        sMVSecurity: {
          required: false,
          maxOccurrences: 7,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  server: {
    tag: 'Server',
    attributes: {
      available: ['desc', 'timeout'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        timeout: {
          required: false,
          default: '30',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'authentication', 'lDevice', 'association'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        authentication: {
          required: true,
          maxOccurrences: 1,
        },
        lDevice: {
          required: true,
          maxOccurrences: null,
        },
        association: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  authentication: {
    tag: 'Authentication',
    attributes: {
      available: ['none', 'password', 'weak', 'strong', 'certificate'],
      details: {
        none: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
        password: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        weak: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        strong: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        certificate: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  lDevice: {
    tag: 'LDevice',
    attributes: {
      available: ['desc', 'inst', 'ldName'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        inst: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        ldName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'lN0', 'lN', 'accessControl'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lN0: {
          required: true,
          maxOccurrences: 1,
        },
        lN: {
          required: false,
          maxOccurrences: null,
        },
        accessControl: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  lN0: {
    tag: 'LN0',
    attributes: {
      available: ['desc', 'inst', 'lnClass', 'lnType'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        inst: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        lnClass: {
          required: true,
          default: 'LLN0',
          validation: ['LLN0'],
          enum: [],
        },
        lnType: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'dataSet',
        'reportControl',
        'logControl',
        'dOI',
        'inputs',
        'log',
        'gSEControl',
        'sampledValueControl',
        'settingControl',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        dataSet: {
          required: false,
          maxOccurrences: null,
        },
        reportControl: {
          required: false,
          maxOccurrences: null,
        },
        logControl: {
          required: false,
          maxOccurrences: null,
        },
        dOI: {
          required: false,
          maxOccurrences: null,
        },
        inputs: {
          required: false,
          maxOccurrences: 1,
        },
        log: {
          required: false,
          maxOccurrences: null,
        },
        gSEControl: {
          required: false,
          maxOccurrences: null,
        },
        sampledValueControl: {
          required: false,
          maxOccurrences: null,
        },
        settingControl: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  dataSet: {
    tag: 'DataSet',
    attributes: {
      available: ['desc', 'name'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'fCDA'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        fCDA: {
          required: true,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  fCDA: {
    tag: 'FCDA',
    attributes: {
      available: ['ldInst', 'prefix', 'lnClass', 'lnInst', 'doName', 'daName', 'fc', 'ix'],
      details: {
        ldInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        prefix: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*', ''],
                },
                '.{,11}',
              ],
            },
          ],
          enum: [],
        },
        lnClass: {
          required: false,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        lnInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[0-9]{1,12}'],
                },
              ],
            },
          ],
          enum: [],
        },
        doName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?'],
                },
              ],
            },
          ],
          enum: [],
        },
        daName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: [
                    '[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*',
                  ],
                },
              ],
            },
          ],
          enum: [],
        },
        fc: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['ST', 'MX', 'CO', 'SP', 'SG', 'SE', 'SV', 'CF', 'DC', 'EX', 'SR', 'BL', 'OR'],
        },
        ix: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  reportControl: {
    tag: 'ReportControl',
    attributes: {
      available: [
        'bufTime',
        'buffered',
        'confRev',
        'datSet',
        'desc',
        'indexed',
        'intgPd',
        'name',
        'rptID',
      ],
      details: {
        bufTime: {
          required: false,
          default: '0',
          validation: [],
          enum: [],
        },
        buffered: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        confRev: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        datSet: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        indexed: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
        intgPd: {
          required: false,
          default: '0',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        rptID: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:normalizedString',
                  {
                    OR: ['[ -~]*'],
                  },
                ],
                {
                  OR: ['[ -~]*'],
                },
                '.{1,}',
                '.{,129}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'trgOps', 'optFields', 'rptEnabled'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        trgOps: {
          required: false,
          maxOccurrences: 1,
        },
        optFields: {
          required: true,
          maxOccurrences: 1,
        },
        rptEnabled: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  trgOps: {
    tag: 'TrgOps',
    attributes: {
      available: ['dchg', 'qchg', 'dupd', 'period', 'gi'],
      details: {
        dchg: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        qchg: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        dupd: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        period: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        gi: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  optFields: {
    tag: 'OptFields',
    attributes: {
      available: [
        'seqNum',
        'timeStamp',
        'dataSet',
        'reasonCode',
        'dataRef',
        'entryID',
        'configRef',
        'bufOvfl',
      ],
      details: {
        seqNum: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        timeStamp: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        dataSet: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        reasonCode: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        dataRef: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        entryID: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        configRef: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        bufOvfl: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  rptEnabled: {
    tag: 'RptEnabled',
    attributes: {
      available: ['desc', 'max'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        max: {
          required: false,
          default: '1',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'clientLN'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        clientLN: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  clientLN: {
    tag: 'ClientLN',
    attributes: {
      available: ['desc', 'iedName', 'ldInst', 'prefix', 'lnClass', 'lnInst', 'apRef'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        iedName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: [
                    '[A-Za-z][0-9A-Za-z_]{0,2}',
                    '[A-Za-z][0-9A-Za-z_]{4,63}',
                    '[A-MO-Za-z][0-9A-Za-z_]{3}',
                    'N[0-9A-Za-np-z_][0-9A-Za-z_]{2}',
                    'No[0-9A-Za-mo-z_][0-9A-Za-z_]',
                    'Non[0-9A-Za-df-z_]',
                  ],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        ldInst: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        prefix: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*', ''],
                },
                '.{,11}',
              ],
            },
          ],
          enum: [],
        },
        lnClass: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        lnInst: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:normalizedString',
                    {
                      OR: ['[0-9]{1,12}'],
                    },
                  ],
                },
                {
                  AND: ['xs:normalizedString', '.{,0}'],
                },
              ],
            },
          ],
          enum: [],
        },
        apRef: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  logControl: {
    tag: 'LogControl',
    attributes: {
      available: [
        'bufTime',
        'datSet',
        'desc',
        'intgPd',
        'ldInst',
        'lnClass',
        'lnInst',
        'logEna',
        'logName',
        'name',
        'prefix',
        'reasonCode',
      ],
      details: {
        bufTime: {
          required: false,
          default: '0',
          validation: [],
          enum: [],
        },
        datSet: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        intgPd: {
          required: false,
          default: '0',
          validation: [],
          enum: [],
        },
        ldInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        lnClass: {
          required: false,
          default: 'LLN0',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        lnInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[0-9]{1,12}'],
                },
              ],
            },
          ],
          enum: [],
        },
        logEna: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
        logName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        prefix: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*', ''],
                },
                '.{,11}',
              ],
            },
          ],
          enum: [],
        },
        reasonCode: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'trgOps'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        trgOps: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  dOI: {
    tag: 'DOI',
    attributes: {
      available: ['accessControl', 'desc', 'ix', 'name'],
      details: {
        accessControl: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        ix: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Z][0-9A-Za-z]*'],
                  },
                ],
                {
                  OR: ['[A-Z][0-9A-Za-z]*'],
                },
                '.{,12}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'sDI', 'dAI'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        sDI: {
          required: true,
          maxOccurrences: 1,
        },
        dAI: {
          required: true,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  sDI: {
    tag: 'SDI',
    attributes: {
      available: ['desc', 'ix', 'name', 'sAddr'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        ix: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['\\i\\c*'],
                    },
                  ],
                },
                {
                  AND: [
                    [
                      'xs:Name',
                      {
                        OR: ['[a-z][0-9A-Za-z]*'],
                      },
                    ],
                    {
                      OR: ['[a-z][0-9A-Za-z]*'],
                    },
                    '.{,60}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'T',
            'Test',
            'Check',
            'SIUnit',
            'Oper',
            'SBO',
            'SBOw',
            'Cancel',
            'Addr',
            'PRIORITY',
            'VID',
            'APPID',
            'TransportInUse',
            'IPClassOfTraffic',
            'IPv6FlowLabel',
            'IPAddressLength',
            'IPAddress',
          ],
        },
        sAddr: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'sDI', 'dAI'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        sDI: {
          required: true,
          maxOccurrences: 1,
        },
        dAI: {
          required: true,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  dAI: {
    tag: 'DAI',
    attributes: {
      available: ['desc', 'ix', 'name', 'sAddr', 'valImport', 'valKind'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        ix: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['\\i\\c*'],
                    },
                  ],
                },
                {
                  AND: [
                    [
                      'xs:Name',
                      {
                        OR: ['[a-z][0-9A-Za-z]*'],
                      },
                    ],
                    {
                      OR: ['[a-z][0-9A-Za-z]*'],
                    },
                    '.{,60}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'T',
            'Test',
            'Check',
            'SIUnit',
            'Oper',
            'SBO',
            'SBOw',
            'Cancel',
            'Addr',
            'PRIORITY',
            'VID',
            'APPID',
            'TransportInUse',
            'IPClassOfTraffic',
            'IPv6FlowLabel',
            'IPAddressLength',
            'IPAddress',
          ],
        },
        sAddr: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        valImport: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        valKind: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Spec', 'Conf', 'RO', 'Set'],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'val'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        val: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  val: {
    tag: 'Val',
    attributes: {
      available: ['sGroup'],
      details: {
        sGroup: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  inputs: {
    tag: 'Inputs',
    attributes: {
      available: ['desc'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'extRef'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        extRef: {
          required: true,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  extRef: {
    tag: 'ExtRef',
    attributes: {
      available: [
        'desc',
        'iedName',
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
        'doName',
        'daName',
        'intAddr',
        'serviceType',
        'srcLDInst',
        'srcPrefix',
        'srcLNClass',
        'srcLNInst',
        'srcCBName',
        'pServT',
        'pLN',
        'pDO',
        'pDA',
      ],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        iedName: {
          required: false,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    [
                      'xs:Name',
                      {
                        OR: ['[A-Za-z][0-9A-Za-z_]*'],
                      },
                    ],
                    {
                      OR: [
                        '[A-Za-z][0-9A-Za-z_]{0,2}',
                        '[A-Za-z][0-9A-Za-z_]{4,63}',
                        '[A-MO-Za-z][0-9A-Za-z_]{3}',
                        'N[0-9A-Za-np-z_][0-9A-Za-z_]{2}',
                        'No[0-9A-Za-mo-z_][0-9A-Za-z_]',
                        'Non[0-9A-Za-df-z_]',
                      ],
                    },
                    '.{,64}',
                  ],
                },
                {
                  AND: [
                    'xs:normalizedString',
                    {
                      OR: ['@'],
                    },
                  ],
                },
              ],
            },
          ],
          enum: [],
        },
        ldInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        prefix: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*', ''],
                },
                '.{,11}',
              ],
            },
          ],
          enum: [],
        },
        lnClass: {
          required: false,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        lnInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[0-9]{1,12}'],
                },
              ],
            },
          ],
          enum: [],
        },
        doName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?'],
                },
              ],
            },
          ],
          enum: [],
        },
        daName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: [
                    '[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*',
                  ],
                },
              ],
            },
          ],
          enum: [],
        },
        intAddr: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        serviceType: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Poll', 'Report', 'GOOSE', 'SMV'],
        },
        srcLDInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        srcPrefix: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*', ''],
                },
                '.{,11}',
              ],
            },
          ],
          enum: [],
        },
        srcLNClass: {
          required: false,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        srcLNInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[0-9]{1,12}'],
                },
              ],
            },
          ],
          enum: [],
        },
        srcCBName: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        pServT: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Poll', 'Report', 'GOOSE', 'SMV'],
        },
        pLN: {
          required: false,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        pDO: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Z][0-9A-Za-z]{0,11}(\\.[a-z][0-9A-Za-z]*(\\([0-9]+\\))?)?'],
                },
              ],
            },
          ],
          enum: [],
        },
        pDA: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: [
                    '[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?(\\.[a-zA-Z][a-zA-Z0-9]*(\\([0-9]+\\))?)*',
                  ],
                },
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  log: {
    tag: 'Log',
    attributes: {
      available: ['desc', 'name'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  gSEControl: {
    tag: 'GSEControl',
    attributes: {
      available: [
        'appID',
        'confRev',
        'datSet',
        'desc',
        'fixedOffs',
        'name',
        'securityEnable',
        'type',
      ],
      details: {
        appID: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:normalizedString',
                  {
                    OR: ['[ -~]*'],
                  },
                ],
                {
                  OR: ['[ -~]*'],
                },
                '.{1,}',
                '.{,129}',
              ],
            },
          ],
          enum: [],
        },
        confRev: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        datSet: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        fixedOffs: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        securityEnable: {
          required: false,
          default: 'None',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: ['None', 'Signature', 'SignatureAndEncryption'],
        },
        type: {
          required: false,
          default: 'GOOSE',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['GSSE', 'GOOSE'],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'iEDName', 'protocol'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        iEDName: {
          required: false,
          maxOccurrences: null,
        },
        protocol: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  iEDName: {
    tag: 'IEDName',
    attributes: {
      available: ['apRef', 'ldInst', 'prefix', 'lnClass', 'lnInst'],
      details: {
        apRef: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        ldInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        prefix: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*', ''],
                },
                '.{,11}',
              ],
            },
          ],
          enum: [],
        },
        lnClass: {
          required: false,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        lnInst: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[0-9]{1,12}'],
                },
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  protocol: {
    tag: 'Protocol',
    attributes: {
      available: ['mustUnderstand'],
      details: {
        mustUnderstand: {
          required: true,
          default: 'true',
          validation: ['true'],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  sampledValueControl: {
    tag: 'SampledValueControl',
    attributes: {
      available: [
        'confRev',
        'datSet',
        'desc',
        'multicast',
        'name',
        'nofASDU',
        'securityEnable',
        'smpMod',
        'smpRate',
        'smvID',
      ],
      details: {
        confRev: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        datSet: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        multicast: {
          required: false,
          default: 'true',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        nofASDU: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        securityEnable: {
          required: false,
          default: 'None',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: ['None', 'Signature', 'SignatureAndEncryption'],
        },
        smpMod: {
          required: false,
          default: 'SmpPerPeriod',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: ['SmpPerPeriod', 'SmpPerSec', 'SecPerSmp'],
        },
        smpRate: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        smvID: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:normalizedString',
                  {
                    OR: ['[ -~]*'],
                  },
                ],
                {
                  OR: ['[ -~]*'],
                },
                '.{1,}',
                '.{,129}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'iEDName', 'smvOpts', 'protocol'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        iEDName: {
          required: false,
          maxOccurrences: null,
        },
        smvOpts: {
          required: true,
          maxOccurrences: 1,
        },
        protocol: {
          required: false,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  smvOpts: {
    tag: 'SmvOpts',
    attributes: {
      available: [
        'refreshTime',
        'sampleSynchronized',
        'sampleRate',
        'dataSet',
        'security',
        'timestamp',
        'synchSourceId',
      ],
      details: {
        refreshTime: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        sampleSynchronized: {
          required: false,
          default: 'true',
          validation: ['true'],
          enum: [],
        },
        sampleRate: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        dataSet: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        security: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        timestamp: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        synchSourceId: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  settingControl: {
    tag: 'SettingControl',
    attributes: {
      available: ['actSG', 'desc', 'numOfSGs', 'resvTms'],
      details: {
        actSG: {
          required: false,
          default: '1',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        numOfSGs: {
          required: true,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedInt'],
            },
          ],
          enum: [],
        },
        resvTms: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  lN: {
    tag: 'LN',
    attributes: {
      available: ['desc', 'inst', 'lnClass', 'lnType', 'prefix'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        inst: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[0-9]{1,12}'],
                },
              ],
            },
          ],
          enum: [],
        },
        lnClass: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        lnType: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        prefix: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*', ''],
                },
                '.{,11}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'dataSet',
        'reportControl',
        'logControl',
        'dOI',
        'inputs',
        'log',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        dataSet: {
          required: false,
          maxOccurrences: null,
        },
        reportControl: {
          required: false,
          maxOccurrences: null,
        },
        logControl: {
          required: false,
          maxOccurrences: null,
        },
        dOI: {
          required: false,
          maxOccurrences: null,
        },
        inputs: {
          required: false,
          maxOccurrences: 1,
        },
        log: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  accessControl: {
    tag: 'AccessControl',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  association: {
    tag: 'Association',
    attributes: {
      available: [
        'desc',
        'iedName',
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
        'kind',
        'associationID',
      ],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        iedName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: [
                    '[A-Za-z][0-9A-Za-z_]{0,2}',
                    '[A-Za-z][0-9A-Za-z_]{4,63}',
                    '[A-MO-Za-z][0-9A-Za-z_]{3}',
                    'N[0-9A-Za-np-z_][0-9A-Za-z_]{2}',
                    'No[0-9A-Za-mo-z_][0-9A-Za-z_]',
                    'Non[0-9A-Za-df-z_]',
                  ],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        ldInst: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        prefix: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z][0-9A-Za-z_]*', ''],
                },
                '.{,11}',
              ],
            },
          ],
          enum: [],
        },
        lnClass: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
        lnInst: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:normalizedString',
                    {
                      OR: ['[0-9]{1,12}'],
                    },
                  ],
                },
                {
                  AND: ['xs:normalizedString', '.{,0}'],
                },
              ],
            },
          ],
          enum: [],
        },
        kind: {
          required: true,
          default: '',
          validation: [
            {
              AND: ['xs:token'],
            },
          ],
          enum: ['pre-established', 'predefined'],
        },
        associationID: {
          required: false,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[0-9A-Za-z]+'],
                },
                '.{1,}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  serverAt: {
    tag: 'ServerAt',
    attributes: {
      available: ['apName', 'desc'],
      details: {
        apName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  gOOSESecurity: {
    tag: 'GOOSESecurity',
    attributes: {
      available: ['desc', 'name', 'serialNumber', 'xferNumber'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        serialNumber: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[0-9]+'],
                },
                '.{1,}',
              ],
            },
          ],
          enum: [],
        },
        xferNumber: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'subject', 'issuerName'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        subject: {
          required: true,
          maxOccurrences: 1,
        },
        issuerName: {
          required: true,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  subject: {
    tag: 'Subject',
    attributes: {
      available: ['commonName', 'idHierarchy'],
      details: {
        commonName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['none', 'CN=.+'],
                },
                '.{4,}',
              ],
            },
          ],
          enum: [],
        },
        idHierarchy: {
          required: true,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString', '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  issuerName: {
    tag: 'IssuerName',
    attributes: {
      available: ['commonName', 'idHierarchy'],
      details: {
        commonName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['none', 'CN=.+'],
                },
                '.{4,}',
              ],
            },
          ],
          enum: [],
        },
        idHierarchy: {
          required: true,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString', '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  sMVSecurity: {
    tag: 'SMVSecurity',
    attributes: {
      available: ['desc', 'name', 'serialNumber', 'xferNumber'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        serialNumber: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[0-9]+'],
                },
                '.{1,}',
              ],
            },
          ],
          enum: [],
        },
        xferNumber: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'subject', 'issuerName'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        subject: {
          required: true,
          maxOccurrences: 1,
        },
        issuerName: {
          required: true,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  kDC: {
    tag: 'KDC',
    attributes: {
      available: ['iedName', 'apName'],
      details: {
        iedName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Za-z][0-9A-Za-z_]*'],
                  },
                ],
                {
                  OR: [
                    '[A-Za-z][0-9A-Za-z_]{0,2}',
                    '[A-Za-z][0-9A-Za-z_]{4,63}',
                    '[A-MO-Za-z][0-9A-Za-z_]{3}',
                    'N[0-9A-Za-np-z_][0-9A-Za-z_]{2}',
                    'No[0-9A-Za-mo-z_][0-9A-Za-z_]',
                    'Non[0-9A-Za-df-z_]',
                  ],
                },
                '.{,64}',
              ],
            },
          ],
          enum: [],
        },
        apName: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:normalizedString',
                {
                  OR: ['[A-Za-z0-9][0-9A-Za-z_]*'],
                },
                '.{,32}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  dataTypeTemplates: {
    tag: 'DataTypeTemplates',
    attributes: {
      available: [],
      details: {},
    },
    subElements: {
      available: ['lNodeType', 'dOType', 'dAType', 'enumType'],
      details: {
        lNodeType: {
          required: true,
          maxOccurrences: null,
        },
        dOType: {
          required: true,
          maxOccurrences: null,
        },
        dAType: {
          required: false,
          maxOccurrences: null,
        },
        enumType: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  lNodeType: {
    tag: 'LNodeType',
    attributes: {
      available: ['desc', 'id', 'iedType', 'lnClass'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        id: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:token',
                {
                  OR: ['\\S+'],
                },
                '.{1,}',
                '.{,255}',
              ],
            },
          ],
          enum: [],
        },
        iedType: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: [],
        },
        lnClass: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['L[A-Z]*', 'LLN0'],
                        },
                        '.{4,}',
                        '.{,4}',
                      ],
                    },
                    {
                      AND: [
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['A[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['C[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['F[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['G[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['I[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['K[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['M[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['P[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Q[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['R[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['S[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['T[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['X[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Y[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                        {
                          AND: [
                            'xs:Name',
                            {
                              OR: ['Z[A-Z]*'],
                            },
                            '.{4,}',
                            '.{,4}',
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[A-Z]+'],
                    },
                    '.{4,}',
                    '.{,4}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'LLN0',
            'LPHD',
            'LCCH',
            'LGOS',
            'LSVS',
            'LTIM',
            'LTMS',
            'LTRK',
            'ANCR',
            'ARCO',
            'ARIS',
            'ATCC',
            'AVCO',
            'CALH',
            'CCGR',
            'CILO',
            'CPOW',
            'CSWI',
            'CSYN',
            'FCNT',
            'FCSD',
            'FFIL',
            'FLIM',
            'FPID',
            'FRMP',
            'FSPT',
            'FXOT',
            'FXUT',
            'GAPC',
            'GGIO',
            'GLOG',
            'GSAL',
            'IARC',
            'IHMI',
            'ISAF',
            'ITCI',
            'ITMI',
            'ITPC',
            'KFAN',
            'KFIL',
            'KPMP',
            'KTNK',
            'KVLV',
            'MDIF',
            'MENV',
            'MFLK',
            'MHAI',
            'MHAN',
            'MHYD',
            'MMDC',
            'MMET',
            'MMTN',
            'MMTR',
            'MMXN',
            'MMXU',
            'MSQI',
            'MSTA',
            'PDIF',
            'PDIR',
            'PDIS',
            'PDOP',
            'PDUP',
            'PFRC',
            'PHAR',
            'PHIZ',
            'PIOC',
            'PMRI',
            'PMSS',
            'POPF',
            'PPAM',
            'PRTR',
            'PSCH',
            'PSDE',
            'PTEF',
            'PTHF',
            'PTOC',
            'PTOF',
            'PTOV',
            'PTRC',
            'PTTR',
            'PTUC',
            'PTUF',
            'PTUV',
            'PUPF',
            'PVOC',
            'PVPH',
            'PZSU',
            'QFVR',
            'QITR',
            'QIUB',
            'QVTR',
            'QVUB',
            'QVVR',
            'RADR',
            'RBDR',
            'RBRF',
            'RDIR',
            'RDRE',
            'RDRS',
            'RFLO',
            'RMXU',
            'RPSB',
            'RREC',
            'RSYN',
            'SARC',
            'SCBR',
            'SIMG',
            'SIML',
            'SLTC',
            'SOPM',
            'SPDC',
            'SPTR',
            'SSWI',
            'STMP',
            'SVBR',
            'TANG',
            'TAXD',
            'TCTR',
            'TDST',
            'TFLW',
            'TFRQ',
            'TGSN',
            'THUM',
            'TLVL',
            'TMGF',
            'TMVM',
            'TPOS',
            'TPRS',
            'TRTN',
            'TSND',
            'TTMP',
            'TTNS',
            'TVBR',
            'TVTR',
            'TWPH',
            'XCBR',
            'XSWI',
            'YEFN',
            'YLTC',
            'YPSH',
            'YPTR',
            'ZAXN',
            'ZBAT',
            'ZBSH',
            'ZCAB',
            'ZCAP',
            'ZCON',
            'ZGEN',
            'ZGIL',
            'ZLIN',
            'ZMOT',
            'ZREA',
            'ZRES',
            'ZRRC',
            'ZSAR',
            'ZSCR',
            'ZSMC',
            'ZTCF',
            'ZTCR',
          ],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'dO'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        dO: {
          required: true,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  dO: {
    tag: 'DO',
    attributes: {
      available: ['accessControl', 'desc', 'name', 'transient', 'type'],
      details: {
        accessControl: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[A-Z][0-9A-Za-z]*'],
                  },
                ],
                {
                  OR: ['[A-Z][0-9A-Za-z]*'],
                },
                '.{,12}',
              ],
            },
          ],
          enum: [],
        },
        transient: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        type: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  dOType: {
    tag: 'DOType',
    attributes: {
      available: ['cdc', 'desc', 'id', 'iedType'],
      details: {
        cdc: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: [
            'SPS',
            'DPS',
            'INS',
            'ENS',
            'ACT',
            'ACD',
            'SEC',
            'BCR',
            'HST',
            'VSS',
            'MV',
            'CMV',
            'SAV',
            'WYE',
            'DEL',
            'SEQ',
            'HMV',
            'HWYE',
            'HDEL',
            'SPC',
            'DPC',
            'INC',
            'ENC',
            'BSC',
            'ISC',
            'APC',
            'BAC',
            'SPG',
            'ING',
            'ENG',
            'ORG',
            'TSG',
            'CUG',
            'VSG',
            'ASG',
            'CURVE',
            'CSG',
            'DPL',
            'LPL',
            'CSD',
            'CST',
            'BTS',
            'UTS',
            'LTS',
            'GTS',
            'MTS',
            'NTS',
            'STS',
            'CTS',
            'OTS',
            'VSD',
            'ORS',
            'TCS',
          ],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        id: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:token',
                {
                  OR: ['\\S+'],
                },
                '.{1,}',
                '.{,255}',
              ],
            },
          ],
          enum: [],
        },
        iedType: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'sDO', 'dA'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        sDO: {
          required: true,
          maxOccurrences: 1,
        },
        dA: {
          required: true,
          maxOccurrences: 1,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  sDO: {
    tag: 'SDO',
    attributes: {
      available: ['count', 'desc', 'name', 'type'],
      details: {
        count: {
          required: false,
          default: '0',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['[a-z][0-9A-Za-z]*'],
                    },
                  ],
                },
              ],
            },
          ],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                [
                  'xs:Name',
                  {
                    OR: ['[a-z][0-9A-Za-z]*'],
                  },
                ],
                {
                  OR: ['[a-z][0-9A-Za-z]*'],
                },
                '.{1,}',
                '.{,60}',
              ],
            },
          ],
          enum: [],
        },
        type: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  dA: {
    tag: 'DA',
    attributes: {
      available: [
        'bType',
        'count',
        'dchg',
        'desc',
        'dupd',
        'fc',
        'name',
        'qchg',
        'sAddr',
        'type',
        'valImport',
        'valKind',
      ],
      details: {
        bType: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: [
            'BOOLEAN',
            'INT8',
            'INT16',
            'INT24',
            'INT32',
            'INT64',
            'INT128',
            'INT8U',
            'INT16U',
            'INT24U',
            'INT32U',
            'FLOAT32',
            'FLOAT64',
            'Enum',
            'Dbpos',
            'Tcmd',
            'Quality',
            'Timestamp',
            'VisString32',
            'VisString64',
            'VisString65',
            'VisString129',
            'VisString255',
            'Octet64',
            'Unicode255',
            'Struct',
            'EntryTime',
            'Check',
            'ObjRef',
            'Currency',
            'PhyComAddr',
            'TrgOps',
            'OptFlds',
            'SvOptFlds',
            'LogOptFlds',
            'EntryID',
            'Octet6',
            'Octet16',
          ],
        },
        count: {
          required: false,
          default: '0',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['\\i\\c*'],
                        },
                      ],
                    },
                    {
                      AND: [
                        [
                          'xs:Name',
                          {
                            OR: ['[a-z][0-9A-Za-z]*'],
                          },
                        ],
                        {
                          OR: ['[a-z][0-9A-Za-z]*'],
                        },
                        '.{,60}',
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          enum: [
            'T',
            'Test',
            'Check',
            'SIUnit',
            'Oper',
            'SBO',
            'SBOw',
            'Cancel',
            'Addr',
            'PRIORITY',
            'VID',
            'APPID',
            'TransportInUse',
            'IPClassOfTraffic',
            'IPv6FlowLabel',
            'IPAddressLength',
            'IPAddress',
          ],
        },
        dchg: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        dupd: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        fc: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['ST', 'MX', 'CO', 'SP', 'SG', 'SE', 'SV', 'CF', 'DC', 'EX', 'SR', 'BL', 'OR'],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['\\i\\c*'],
                    },
                  ],
                },
                {
                  AND: [
                    [
                      'xs:Name',
                      {
                        OR: ['[a-z][0-9A-Za-z]*'],
                      },
                    ],
                    {
                      OR: ['[a-z][0-9A-Za-z]*'],
                    },
                    '.{,60}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'T',
            'Test',
            'Check',
            'SIUnit',
            'Oper',
            'SBO',
            'SBOw',
            'Cancel',
            'Addr',
            'PRIORITY',
            'VID',
            'APPID',
            'TransportInUse',
            'IPClassOfTraffic',
            'IPv6FlowLabel',
            'IPAddressLength',
            'IPAddress',
          ],
        },
        qchg: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        sAddr: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: [],
        },
        valImport: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        valKind: {
          required: false,
          default: 'Set',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Spec', 'Conf', 'RO', 'Set'],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'val', 'protNs'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        val: {
          required: false,
          maxOccurrences: null,
        },
        protNs: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  protNs: {
    tag: 'ProtNs',
    attributes: {
      available: ['type'],
      details: {
        type: {
          required: false,
          default: '8-MMS',
          validation: [
            {
              AND: ['xs:normalizedString', '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  dAType: {
    tag: 'DAType',
    attributes: {
      available: ['desc', 'id', 'iedType'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        id: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:token',
                {
                  OR: ['\\S+'],
                },
                '.{1,}',
                '.{,255}',
              ],
            },
          ],
          enum: [],
        },
        iedType: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'bDA', 'protNs'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        bDA: {
          required: true,
          maxOccurrences: null,
        },
        protNs: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  bDA: {
    tag: 'BDA',
    attributes: {
      available: ['bType', 'count', 'desc', 'name', 'sAddr', 'type', 'valImport', 'valKind'],
      details: {
        bType: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: [
            'BOOLEAN',
            'INT8',
            'INT16',
            'INT24',
            'INT32',
            'INT64',
            'INT128',
            'INT8U',
            'INT16U',
            'INT24U',
            'INT32U',
            'FLOAT32',
            'FLOAT64',
            'Enum',
            'Dbpos',
            'Tcmd',
            'Quality',
            'Timestamp',
            'VisString32',
            'VisString64',
            'VisString65',
            'VisString129',
            'VisString255',
            'Octet64',
            'Unicode255',
            'Struct',
            'EntryTime',
            'Check',
            'ObjRef',
            'Currency',
            'PhyComAddr',
            'TrgOps',
            'OptFlds',
            'SvOptFlds',
            'LogOptFlds',
            'EntryID',
            'Octet6',
            'Octet16',
          ],
        },
        count: {
          required: false,
          default: '0',
          validation: [
            {
              OR: [
                {
                  AND: [
                    {
                      AND: [
                        'xs:Name',
                        {
                          OR: ['\\i\\c*'],
                        },
                      ],
                    },
                    {
                      AND: [
                        [
                          'xs:Name',
                          {
                            OR: ['[a-z][0-9A-Za-z]*'],
                          },
                        ],
                        {
                          OR: ['[a-z][0-9A-Za-z]*'],
                        },
                        '.{,60}',
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          enum: [
            'T',
            'Test',
            'Check',
            'SIUnit',
            'Oper',
            'SBO',
            'SBOw',
            'Cancel',
            'Addr',
            'PRIORITY',
            'VID',
            'APPID',
            'TransportInUse',
            'IPClassOfTraffic',
            'IPv6FlowLabel',
            'IPAddressLength',
            'IPAddress',
          ],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              OR: [
                {
                  AND: [
                    'xs:Name',
                    {
                      OR: ['\\i\\c*'],
                    },
                  ],
                },
                {
                  AND: [
                    [
                      'xs:Name',
                      {
                        OR: ['[a-z][0-9A-Za-z]*'],
                      },
                    ],
                    {
                      OR: ['[a-z][0-9A-Za-z]*'],
                    },
                    '.{,60}',
                  ],
                },
              ],
            },
          ],
          enum: [
            'T',
            'Test',
            'Check',
            'SIUnit',
            'Oper',
            'SBO',
            'SBOw',
            'Cancel',
            'Addr',
            'PRIORITY',
            'VID',
            'APPID',
            'TransportInUse',
            'IPClassOfTraffic',
            'IPv6FlowLabel',
            'IPAddressLength',
            'IPAddress',
          ],
        },
        sAddr: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString'],
            },
          ],
          enum: [],
        },
        valImport: {
          required: false,
          default: 'false',
          validation: [],
          enum: [],
        },
        valKind: {
          required: false,
          default: 'Set',
          validation: [
            {
              AND: [
                'xs:Name',
                {
                  OR: ['\\i\\c*'],
                },
              ],
            },
          ],
          enum: ['Spec', 'Conf', 'RO', 'Set'],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'val'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        val: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  enumType: {
    tag: 'EnumType',
    attributes: {
      available: ['desc', 'id'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        id: {
          required: true,
          default: '',
          validation: [
            {
              AND: [
                'xs:token',
                {
                  OR: ['\\S+'],
                },
                '.{1,}',
                '.{,255}',
              ],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: ['text', 'private', 'enumVal'],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        enumVal: {
          required: true,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  enumVal: {
    tag: 'EnumVal',
    attributes: {
      available: ['ord', 'desc'],
      details: {
        ord: {
          required: true,
          default: '',
          validation: [],
          enum: [],
        },
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
      },
    },
    subElements: {
      available: [],
      details: {},
    },
    any: {
      attribute: false,
      subElement: false,
    },
  },
  line: {
    tag: 'Line',
    attributes: {
      available: ['desc', 'name', 'nomFreq', 'numPhases', 'type'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        nomFreq: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:decimal'],
            },
          ],
          enum: [],
        },
        numPhases: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:unsignedByte'],
            },
          ],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString', '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'lNode',
        'generalEquipment',
        'function',
        'voltage',
        'conductingEquipment',
        'connectivityNode',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        generalEquipment: {
          required: false,
          maxOccurrences: null,
        },
        function: {
          required: false,
          maxOccurrences: null,
        },
        voltage: {
          required: false,
          maxOccurrences: 1,
        },
        conductingEquipment: {
          required: true,
          maxOccurrences: null,
        },
        connectivityNode: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
  process: {
    tag: 'Process',
    attributes: {
      available: ['desc', 'name', 'type'],
      details: {
        desc: {
          required: false,
          default: '',
          validation: [],
          enum: [],
        },
        name: {
          required: true,
          default: '',
          validation: [
            {
              AND: [['xs:normalizedString'], '.{1,}'],
            },
          ],
          enum: [],
        },
        type: {
          required: false,
          default: '',
          validation: [
            {
              AND: ['xs:normalizedString', '.{1,}'],
            },
          ],
          enum: [],
        },
      },
    },
    subElements: {
      available: [
        'text',
        'private',
        'lNode',
        'generalEquipment',
        'function',
        'conductingEquipment',
        'substation',
        'line',
        'process',
      ],
      details: {
        text: {
          required: false,
          maxOccurrences: 1,
        },
        private: {
          required: false,
          maxOccurrences: null,
        },
        lNode: {
          required: false,
          maxOccurrences: null,
        },
        generalEquipment: {
          required: false,
          maxOccurrences: null,
        },
        function: {
          required: false,
          maxOccurrences: null,
        },
        conductingEquipment: {
          required: false,
          maxOccurrences: null,
        },
        substation: {
          required: false,
          maxOccurrences: null,
        },
        line: {
          required: false,
          maxOccurrences: null,
        },
        process: {
          required: false,
          maxOccurrences: null,
        },
      },
    },
    any: {
      attribute: true,
      subElement: true,
    },
  },
} as const
