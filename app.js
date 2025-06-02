// Slasher Legends Application
class SlasherLegendsApp {
    constructor() {
        this.data = {
            "characters": {
                "Michael Myers": {
                    "franchise": "Halloween",
                    "first_appearance": 1978,
                    "total_movies": 12,
                    "total_kills": 160,
                    "box_office_total": 715610743,
                    "weapon_of_choice": "Kitchen Knife",
                    "height": "6'1\" (185 cm)",
                    "weakness": "Bullets/Physical damage (temporarily)",
                    "signature_feature": "White mask",
                    "survival_rate": "Extremely high",
                    "bio": "Michael Myers representa o mal em estado puro. Aos 6 anos assassinou sua irmã e retornou 15 anos depois para continuar sua matança em Haddonfield. Sua força sobrenatural e resistência fazem dele uma máquina de matar imparável.",
                    "powers": ["Força sobrenatural", "Resistência extrema", "Imortalidade", "Furtividade"],
                    "kill_methods": ["Facadas (52)", "Estrangulamento (5)", "Mãos nuas (18)", "Empalamento (10)", "Decapitação (5)"],
                    "advanced_stats": {
                        "avg_first_death_time": 15.6,
                        "fastest_kill_time": 3,
                        "fastest_kill_movie": "Halloween Kills (2021)",
                        "bloodiest_movie": "Halloween Kills (2021)",
                        "bloodiest_count": 27,
                        "kills_per_minute": 0.206,
                        "total_runtime": 776
                    },
                    "movies_data": [
                        {"movie": "Halloween (1978)", "kills": 5, "runtime": 91, "first_death_time": 6, "box_office": 70000000},
                        {"movie": "Halloween II (1981)", "kills": 9, "runtime": 92, "first_death_time": 12, "box_office": 25533818},
                        {"movie": "Halloween 4 (1988)", "kills": 18, "runtime": 88, "first_death_time": 8, "box_office": 17768757},
                        {"movie": "Halloween 5 (1989)", "kills": 15, "runtime": 96, "first_death_time": 15, "box_office": 11642254},
                        {"movie": "Halloween H20 (1998)", "kills": 6, "runtime": 86, "first_death_time": 22, "box_office": 75862610},
                        {"movie": "Halloween (2018)", "kills": 16, "runtime": 106, "first_death_time": 14, "box_office": 255416089},
                        {"movie": "Halloween Kills (2021)", "kills": 27, "runtime": 105, "first_death_time": 3, "box_office": 131806296},
                        {"movie": "Halloween Ends (2022)", "kills": 11, "runtime": 111, "first_death_time": 45, "box_office": 106272261}
                    ]
                },
                "Jason Voorhees": {
                    "franchise": "Friday the 13th",
                    "first_appearance": 1981,
                    "total_movies": 12,
                    "total_kills": 163,
                    "box_office_total": 467000000,
                    "weapon_of_choice": "Machete",
                    "height": "6'5\" (196 cm)",
                    "weakness": "Decapitação (temporarily)",
                    "signature_feature": "Hockey mask",
                    "survival_rate": "Nearly immortal",
                    "bio": "Jason Voorhees se afogou no Crystal Lake em 1957 devido à negligência dos monitores. Retornou como um morto-vivo vingativo com força sobre-humana e resistência lendária. É uma máquina de matar implacável.",
                    "powers": ["Força sobre-humana", "Regeneração", "Imortalidade", "Resistência extrema"],
                    "kill_methods": ["Machete (89)", "Empalamento (23)", "Estrangulamento (12)", "Esmagamento (15)", "Decapitação (11)"],
                    "advanced_stats": {
                        "avg_first_death_time": 8.3,
                        "fastest_kill_time": 4,
                        "fastest_kill_movie": "Friday the 13th Part IV (1984)",
                        "bloodiest_movie": "Jason X (2001)",
                        "bloodiest_count": 25,
                        "kills_per_minute": 0.198,
                        "total_runtime": 824
                    },
                    "movies_data": [
                        {"movie": "Friday the 13th Part 2 (1981)", "kills": 10, "runtime": 87, "first_death_time": 8, "box_office": 21722776},
                        {"movie": "Friday the 13th Part 3 (1982)", "kills": 12, "runtime": 95, "first_death_time": 6, "box_office": 36690067},
                        {"movie": "Friday the 13th Part IV (1984)", "kills": 13, "runtime": 91, "first_death_time": 4, "box_office": 32980880},
                        {"movie": "Friday the 13th Part VI (1986)", "kills": 18, "runtime": 86, "first_death_time": 9, "box_office": 19472057},
                        {"movie": "Friday the 13th Part VII (1988)", "kills": 15, "runtime": 88, "first_death_time": 12, "box_office": 19170001},
                        {"movie": "Friday the 13th Part VIII (1989)", "kills": 20, "runtime": 100, "first_death_time": 7, "box_office": 14343976},
                        {"movie": "Jason Goes to Hell (1993)", "kills": 22, "runtime": 87, "first_death_time": 5, "box_office": 15935068},
                        {"movie": "Jason X (2001)", "kills": 25, "runtime": 91, "first_death_time": 18, "box_office": 17076610},
                        {"movie": "Friday the 13th (2009)", "kills": 13, "runtime": 97, "first_death_time": 6, "box_office": 91392024}
                    ]
                },
                "Freddy Krueger": {
                    "franchise": "A Nightmare on Elm Street",
                    "first_appearance": 1984,
                    "total_movies": 9,
                    "total_kills": 58,
                    "box_office_total": 370540010,
                    "weapon_of_choice": "Razor Glove",
                    "height": "5'9\" (175 cm)",
                    "weakness": "Being forgotten/pulled into real world",
                    "signature_feature": "Burned face, striped sweater",
                    "survival_rate": "Dream immortal",
                    "bio": "Frederick Krueger era um assassino de crianças queimado vivo pelos pais das vítimas. Retornou como demônio dos sonhos, capaz de matar através dos pesadelos. Suas habilidades crescem absorvendo espíritos.",
                    "powers": ["Controle dos sonhos", "Ilusões", "Teleporte", "Manipulação da realidade"],
                    "kill_methods": ["Rasgões de garra (28)", "Aspiração (8)", "Transformação (7)", "Psicológica (6)", "Queimadura (4)"],
                    "advanced_stats": {
                        "avg_first_death_time": 21.2,
                        "fastest_kill_time": 12,
                        "fastest_kill_movie": "Freddy vs Jason (2003)",
                        "bloodiest_movie": "A Nightmare on Elm Street 3 (1987)",
                        "bloodiest_count": 8,
                        "kills_per_minute": 0.068,
                        "total_runtime": 857
                    },
                    "movies_data": [
                        {"movie": "A Nightmare on Elm Street (1984)", "kills": 4, "runtime": 91, "first_death_time": 18, "box_office": 57000000},
                        {"movie": "A Nightmare on Elm Street 2 (1985)", "kills": 7, "runtime": 87, "first_death_time": 25, "box_office": 30000000},
                        {"movie": "A Nightmare on Elm Street 3 (1987)", "kills": 8, "runtime": 96, "first_death_time": 22, "box_office": 44793222},
                        {"movie": "A Nightmare on Elm Street 4 (1988)", "kills": 7, "runtime": 93, "first_death_time": 15, "box_office": 49369899},
                        {"movie": "A Nightmare on Elm Street 5 (1989)", "kills": 3, "runtime": 89, "first_death_time": 28, "box_office": 22168016},
                        {"movie": "Freddy's Dead (1991)", "kills": 6, "runtime": 89, "first_death_time": 20, "box_office": 34872033},
                        {"movie": "New Nightmare (1994)", "kills": 4, "runtime": 112, "first_death_time": 35, "box_office": 18090181},
                        {"movie": "Freddy vs Jason (2003)", "kills": 4, "runtime": 97, "first_death_time": 12, "box_office": 116632628},
                        {"movie": "A Nightmare on Elm Street (2010)", "kills": 5, "runtime": 95, "first_death_time": 16, "box_office": 115664596}
                    ]
                }
            },
            "voting_question": "Qual é o mais assustador?",
            "curiosities": [
                "Michael Myers sobreviveu a mais de 50 tiros ao longo dos filmes",
                "Jason tem a morte mais rápida registrada: 4 minutos no Part IV",
                "Freddy é o único que mata através de sonhos, tornando-o único",
                "Halloween (2018) teve a maior bilheteria de um filme slasher: $255M",
                "Jason X foi o filme mais sangrento com 25 mortes",
                "Michael Myers tem 52 kills por facada, seu método favorito",
                "Freddy leva mais tempo para matar (21.2 min média) pois constrói terror psicológico",
                "Jason é o mais alto (6'5\") e fisicamente mais imponente",
                "A franquia Halloween é a mais lucrativa com $715M total"
            ],
            "gender_stats": {
                "michael_myers": {"male_victims": 88, "female_victims": 72, "survival_rate_female": "15%"},
                "jason_voorhees": {"male_victims": 95, "female_victims": 68, "survival_rate_female": "12%"},
                "freddy_krueger": {"male_victims": 29, "female_victims": 29, "survival_rate_female": "18%"}
            }
        };

        this.votes = this.loadVotes();
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupCharacterDashboards();
        this.setupVoting();
        this.setupCuriosities();
        this.renderVotingResults();
    }

    setupNavigation() {
        const navBtns = document.querySelectorAll('.nav-btn');
        const sections = document.querySelectorAll('.section');

        navBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetSection = btn.dataset.section;
                
                // Remove active classes
                navBtns.forEach(b => b.classList.remove('active'));
                sections.forEach(s => s.classList.remove('active'));
                
                // Add active classes
                btn.classList.add('active');
                document.getElementById(targetSection).classList.add('active');
            });
        });
    }

    setupCharacterDashboards() {
        // Setup Michael Myers
        this.setupCharacterTimeline('michael', this.data.characters['Michael Myers']);
        this.setupMethodChart('michael-methods', this.data.characters['Michael Myers'].kill_methods);

        // Setup Jason Voorhees
        this.setupCharacterTimeline('jason', this.data.characters['Jason Voorhees']);
        this.setupMethodChart('jason-methods', this.data.characters['Jason Voorhees'].kill_methods);

        // Setup Freddy Krueger
        this.setupCharacterTimeline('freddy', this.data.characters['Freddy Krueger']);
        this.setupMethodChart('freddy-methods', this.data.characters['Freddy Krueger'].kill_methods);
    }

    setupCharacterTimeline(characterId, characterData) {
        const timelineElement = document.getElementById(`${characterId}-timeline`);
        if (!timelineElement) return;

        timelineElement.innerHTML = characterData.movies_data.map(movie => `
            <div class="timeline-item">
                <div class="movie-title">${movie.movie}</div>
                <div class="movie-stats">
                    <span>💀 ${movie.kills} mortes</span>
                    <span>⏱️ ${movie.first_death_time} min</span>
                    <span>💰 $${this.formatMoney(movie.box_office)}</span>
                </div>
            </div>
        `).join('');
    }

    setupMethodChart(elementId, methods) {
        const chartElement = document.getElementById(elementId);
        if (!chartElement) return;

        const maxValue = Math.max(...methods.map(method => parseInt(method.match(/\((\d+)\)/)[1])));
        
        chartElement.innerHTML = methods.map(method => {
            const match = method.match(/(.+) \((\d+)\)/);
            const name = match[1];
            const value = parseInt(match[2]);
            const percentage = (value / maxValue) * 100;
            
            return `
                <div class="method-item">
                    <span>${name}: ${value}</span>
                    <div class="method-bar">
                        <div class="method-bar-fill" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        }).join('');
    }

    setupVoting() {
        const voteButtons = document.querySelectorAll('.vote-btn');
        
        voteButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const character = btn.dataset.character;
                this.vote(character);
                
                // Add animation effect
                btn.classList.add('voted');
                setTimeout(() => btn.classList.remove('voted'), 500);
            });
        });
    }

    vote(character) {
        this.votes[character] = (this.votes[character] || 0) + 1;
        this.saveVotes();
        this.renderVotingResults();
    }

    renderVotingResults() {
        const chartElement = document.getElementById('vote-chart');
        const totalVotesElement = document.getElementById('total-votes');
        
        if (!chartElement) return;

        const totalVotes = Object.values(this.votes).reduce((sum, votes) => sum + votes, 0);
        totalVotesElement.textContent = totalVotes;

        const maxVotes = Math.max(...Object.values(this.votes), 1);
        const characterNames = {
            'michael': 'Michael',
            'jason': 'Jason', 
            'freddy': 'Freddy'
        };

        chartElement.innerHTML = Object.entries(this.votes).map(([character, votes]) => {
            const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;
            const height = (votes / maxVotes) * 180;
            
            return `
                <div class="vote-bar" style="height: ${height}px;">
                    <div>${percentage}%</div>
                    <div>${characterNames[character]}</div>
                    <div>${votes}</div>
                </div>
            `;
        }).join('');
    }

    setupCuriosities() {
        this.renderFacts();
        this.renderGenderStats();
        this.renderResistanceChart();
        this.renderFranchiseEvolution();
    }

    renderFacts() {
        const factsElement = document.getElementById('facts-list');
        if (!factsElement) return;

        factsElement.innerHTML = this.data.curiosities.map(fact => `
            <div class="fact-item">💀 ${fact}</div>
        `).join('');
    }

    renderGenderStats() {
        const genderElement = document.getElementById('gender-stats');
        if (!genderElement) return;

        const characters = {
            'michael_myers': 'Michael Myers',
            'jason_voorhees': 'Jason Voorhees',
            'freddy_krueger': 'Freddy Krueger'
        };

        genderElement.innerHTML = Object.entries(this.data.gender_stats).map(([key, stats]) => `
            <div class="gender-item">
                <div class="gender-character">${characters[key]}</div>
                <div class="gender-breakdown">
                    <div>♂️ ${stats.male_victims}</div>
                    <div>♀️ ${stats.female_victims}</div>
                    <div>📊 ${stats.survival_rate_female}</div>
                </div>
            </div>
        `).join('');
    }

    renderResistanceChart() {
        const resistanceElement = document.getElementById('resistance-chart');
        if (!resistanceElement) return;

        const resistanceData = [
            { character: 'Michael Myers', resistance: 95, description: 'Sobreviveu a 50+ tiros' },
            { character: 'Jason Voorhees', resistance: 98, description: 'Regeneração extrema' },
            { character: 'Freddy Krueger', resistance: 85, description: 'Imortal nos sonhos' }
        ];

        resistanceElement.innerHTML = resistanceData.map(data => `
            <div class="method-item">
                <span>${data.character}: ${data.description}</span>
                <div class="method-bar">
                    <div class="method-bar-fill" style="width: ${data.resistance}%"></div>
                </div>
            </div>
        `).join('');
    }

    renderFranchiseEvolution() {
        const evolutionElement = document.getElementById('franchise-evolution');
        if (!evolutionElement) return;

        const franchiseData = [
            { franchise: 'Halloween', years: '1978-2022', movies: 12, evolution: 'Mais lucrativa' },
            { franchise: 'Friday the 13th', years: '1980-2009', movies: 12, evolution: 'Mais mortes' },
            { franchise: 'Nightmare on Elm Street', years: '1984-2010', movies: 9, evolution: 'Mais criativa' }
        ];

        evolutionElement.innerHTML = franchiseData.map(data => `
            <div class="method-item">
                <span>${data.franchise} (${data.years}): ${data.evolution}</span>
                <div class="method-bar">
                    <div class="method-bar-fill" style="width: ${(data.movies / 12) * 100}%"></div>
                </div>
            </div>
        `).join('');
    }

    formatMoney(amount) {
        if (amount >= 1000000) {
            return (amount / 1000000).toFixed(0) + 'M';
        }
        if (amount >= 1000) {
            return (amount / 1000).toFixed(0) + 'K';
        }
        return amount.toString();
    }

    loadVotes() {
        try {
            const saved = window.localStorage?.getItem('slasher-votes');
            return saved ? JSON.parse(saved) : { michael: 0, jason: 0, freddy: 0 };
        } catch {
            return { michael: 0, jason: 0, freddy: 0 };
        }
    }

    saveVotes() {
        try {
            if (window.localStorage) {
                window.localStorage.setItem('slasher-votes', JSON.stringify(this.votes));
            }
        } catch (error) {
            console.warn('Could not save votes:', error);
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SlasherLegendsApp();
});

// Add some interactive hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click effects to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        });
    });

    // Add hover sound effect simulation
    const hoverElements = document.querySelectorAll('.character-card, .vote-btn, .nav-btn');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Simulate horror sound effect with visual feedback
            element.style.filter = 'brightness(1.1)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.filter = '';
        });
    });

    // Add blood drip effect on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            document.body.style.boxShadow = 'inset 0 0 50px rgba(139, 0, 0, 0.1)';
        } else {
            document.body.style.boxShadow = '';
        }
        lastScrollY = currentScrollY;
    });

    // Add typing effect to section titles
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all major elements for reveal animation
    const revealElements = document.querySelectorAll('.character-card, .stat-card, .curiosity-card');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});