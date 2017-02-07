var NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

export default {
    data() {
        return {
            alphabet: []
        };
    },
    created() {
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
            let cells = NAMES.filter(name => name[0] === initial);
            this.alphabet.push({
                initial,
                cells
            });
        });
    },
    methods: {
        tell(item){
            console.log(item);
        }
    }
};
