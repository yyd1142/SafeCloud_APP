//var NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
var NAMES = [
  {
    team: '保安处1队', member: [
    {
      id: 1,
      name: '阿凡达',
      tel: '153 2325 2354'
    },
    {
      id: 2,
      name: '阿里山',
      tel: '153 2325 2354'
    }
  ]
  },
  {
    team: '保安处2队', member: [
    {
      id: 3,
      name: '陈锐',
      tel: '153 2325 2354'
    },
    {
      id: 4,
      name: '曹师傅',
      tel: '153 2325 2354'
    }
  ]
  },
  {
    team: '志愿消防队', member: [
    {
      id: 5,
      name: '付师傅',
      tel: '153 2325 2354'
    },
    {
      id: 6,
      name: '霍元甲',
      tel: '153 2325 2354'
    },
    {
      id: 7,
      name: '韩寒',
      tel: '153 2325 2354'
    },
    {
      id: 8,
      name: '范经理',
      tel: '153 2325 2354'
    }
  ]
  },
  {
    team: '消防控制室', member: [
    {
      id: 9,
      name: '付师傅',
      tel: '153 2325 2354'
    },
    {
      id: 10,
      name: '霍元甲',
      tel: '153 2325 2354'
    },
    {
      id: 11,
      name: '韩寒',
      tel: '153 2325 2354'
    },
    {
      id: 12,
      name: '范经理',
      tel: '153 2325 2354'
    }
  ]
  }
];

export default {
  data() {
    return {
      addressList: [],
      searchValue: ""
    };
  },
  created() {
    //'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
    //    let cells = NAMES.filter(name => name[0] === initial);
    //    this.alphabet.push({
    //        initial,
    //        cells
    //    });
    //});
    this.addressList = NAMES;
  },
  methods: {
    tell(item){
      console.log(item);
    }
  }
};
