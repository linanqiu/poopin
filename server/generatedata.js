var userNames = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidoran", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch", "d", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr", "Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho", "Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime", "Jr", "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon", "Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby", "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", "Litleo", "Pyroar", "Flab", "b", "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge", "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant", "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", "Diancie"];

var buildings = ["Accumula Town", "Ambrette Town", "Anistar City", "Anville Town", "Aquacorde Town", "Aspertia City", "Azalea Town", "Black City", "Blackthorn City", "Camphrier Town", "Canalave City", "Castelia City", "Celadon City", "Celestic Town", "Cerulean City", "Cherrygrove City", "Cianwood City", "Cinnabar Island", "Coumarine City", "Couriway Town", "Cyllage City", "Dendemille Town", "Dewford Town", "Driftveil City", "Ecruteak City", "Eterna City", "Ever Grande City", "Fallarbor Town", "Fight Area", "Five Island", "Floaroma Town", "Floccesy Town", "Fortree City", "Four Island", "Frontier Access", "Fuchsia City", "Geosenge Town", "Goldenrod City", "Hearthome City", "Humilau City", "Icirrus City", "Jubilife City", "Kiloude City", "Lacunosa Town", "Lavaridge Town", "Lavender Town", "Laverre City", "Lentimas Town", "Littleroot Town", "Lilycove City", "Lumiose City", "Mahogany Town", "Mauville City", "Mistralton City", "Mossdeep City", "Nacrene City", "New Bark Town", "Nimbasa City", "Nuvema Town", "Oldale Town", "Olivine City", "One Island", "Opelucid City", "Oreburgh City", "Pacifidlog Town", "Pallet Town", "Pastoria City", "Petalburg City", "Pewter City", "Resort Area", "Rustboro City", "Safari Zone Gate", "Saffron City", "Sandgem Town", "Santalune City", "Striaton City", "Seven Island", "Shalour City", "Six Island", "Slateport City", "Snowbelle City", "Snowpoint City", "Solaceon Town", "Sootopolis City", "Sunyshore City", "Survival Area", "Three Island", "Twinleaf Town", "Two Island", "Undella Town", "Vaniville Town", "Veilstone City", "Verdanturf Town", "Vermilion City", "Violet City", "Virbank City", "Viridian City", "White Forest"];

var directions = ["Route 1 and Route 2", "Route 8 and Route 9", "Route 17 and Route 18", "Route 1 and Route 2", "Route 19", "Route 33 and Ilex Forest", "Route 14 and Route 15B", "Ice Path and Route 45", "Route 5 and Route 7", "Route 218 and the open ocean", "Route 4 and Skyarrow Bridge", "Route 7 and Route 16", "Route 210 and Route 211", "Route 24, Route 5, Route 4 and Route 9", "Route 29 and Route 30", "Route 41, Route 47", "Route 21 and Route 20", "Route 12 and Route 13", "Route 18 and Route 19", "Route 8, Route 10, and Connecting Cave", "Route 15, Route 17, and Frost Cavern", "Route 106 and Route 107", "Route 6, Driftveil Drawbridge and Cold Storage", "Route 37, Route 42 and Route 38", "Route 205, Route 206, and Route 211", "Route 128 and the open ocean", "Route 113 and Route 114", "Route 225 and Route 230", "Five Isle Meadow, Water Labyrinth, and the open ocean", "Route 204 and Route 205", "Route 19 and Route 20", "Route 119 and Route 120", "Icefall Cave and the open ocean", "Route 40 and the Battle Frontier", "Route 19, Route 18 and Route 15", "Route 10, Route 11, and Team Flare Secret HQ", "Route 35 and Route 34", "Route 208, Route 209, and Route 212", "Route 22, Route 21, and Marine Tube", "Route 8, Dragonspiral Tower and Twist Mountain", "Route 202, Route 203, Route 204, and Route 218", "Route 12 and Route 13", "Jagged Pass and Route 112", "Route 10, Route 12, and Route 8", "Route 14, Route 15, and Poké Ball Factory", "Reversal Mountain", "Route 101", "Route 121, Route 124, and the open ocean", "Route 4, Route 5, Route 13, Route 14, and Route 16", "Route 42, Route 44 and Route 43", "Route 110, Route 111, Route 117 and Route 118", "Route 7 and Chargestone Cave", "Route 124, Route 125 and Route 127", "Route 3 and Pinwheel Forest", "Route 29", "Route 4, Route 5 and Route 16", "Route 1", "Route 101, Route 103 and Route 102", "Route 39, Route 40, and the open ocean", "Treasure Beach, Kindle Road, and the open ocean", "Route 9, Route 10 and Route 11", "Route 203 and Route 207", "Route 131 and Route 132", "Route 1 and Route 21", "Route 212 and Route 213", "Route 102 and Route 104", "Route 2 and Route 3", "Route 229 and Route 230", "Route 115, Route 116 and Route 104", "Route 48 and the Safari Zone", "Route 5, Route 6, Route 7 and Route 8", "Route 201, Route 202, and Route 219", "Route 3, Route 4, and Route 22", "Route 2, Route 3, Dreamyard", "Trainer Tower, Sevault Canyon Entrance, and the open ocean", "Route 12 and Reflection Cave", "Water Path and the open ocean", "Route 109, Route 110, Route 134, and the open ocean", "Route 19, Route 20, and Route 21", "Acuity Lakefront and the open ocean", "Route 209 and Route 210", "Route 126", "Route 222 and Route 223", "Route 225 and Route 226", "Three Isle Port and Bond Bridge", "Route 201", "Cape Brink and the open ocean", "Route 14", "Route 1", "Route 214 and Route 215", "Rusturf Tunnel and Route 117", "Route 6, Route 11, and the open ocean", "Route 36, Route 32, and Route 31", "Route 20, Pokéstar Studios, and Virbank Complex", "Route 1, Route 2, and Route 22", "Route 14 and Route 15W"];

if (Meteor.users.find().count() === 0) {
  for (var i = 0; i < userNames.length; i++) {
    Meteor.users.insert({
      profile: {
        name: userNames[i]
      }
    });
  }
}

if (Toilets.find().count() === 0) {
  var seedCount = 1000;

  var userArray = Meteor.users.find().fetch();

  for (var i = 0; i < seedCount; i++) {

    var longitude = -73.9619 + Math.random() * 0.2 - 0.1;
    var latitude = 40.8075 + Math.random() * 0.2 - 0.1;

    var toilet = {
      location: {
        type: "Point",
        coordinates: [longitude, latitude]
      },
      building: buildings[Math.floor(Math.random() * buildings.length)],
      floor: Math.floor(Math.random() * 10),
      directions: directions[Math.floor(Math.random() * directions.length)],
      reviews: []
    }

    var toiletId = Toilets.insert(toilet);

    var reviewCount = Math.floor(Math.random() * 5 + 1);

    for (var j = 0; j < reviewCount; j++) {
      Toilets.update({
        _id: toiletId
      }, {
        $push: {
          reviews: generateReview(userArray[Math.floor(Math.random() * userArray.length)]._id)
        }
      });
    }
  }
}

function generateReview(userId) {

  var review = {
    author: userId,
    createdAt: new Date().getTime(),
    content: "Bacon ipsum dolor sit amet prosciutto turkey brisket shank filet mignon.",
    rolls: Math.floor(Math.random() * 5 + 1)
  };

  return review;
}