'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      {firstName: 'Stephen', lastName: 'King', authorPic: './images/ha8a4fea.bmp', born: 'September 21 1947', biography: 'Stephen Edwin King was born the second son of Donald and Nellie Ruth Pillsbury King. After his father left them when Stephen was two, he and his older brother, David, were raised by his mother. Parts of his childhood were spent in Fort Wayne, Indiana, where his father\'s family was at the time, and in Stratford, Connecticut. When Stephen was eleven, his mother brought her children back to Durham, Maine, for good. Her parents, Guy and Nellie Pillsbury, had become incapacitated with old age, and Ruth King was persuaded by her sisters to take over the physical care of them. Other family members provided a small house in Durham and financial support. After Stephen\'s grandparents passed away, Mrs. King found work in the kitchens of Pineland, a nearby residential facility for the mentally challenged.\n\nStephen attended the grammar school in Durham and Lisbon Falls High School, graduating in 1966. From his sophomore year at the University of Maine at Orono, he wrote a weekly column for the school newspaper, THE MAINE CAMPUS. He was also active in student politics, serving as a member of the Student Senate. He came to support the anti-war movement on the Orono campus, arriving at his stance from a conservative view that the war in Vietnam was unconstitutional. He graduated in 1970, with a B.A. in English and qualified to teach on the high school level. A draft board examination immediately post-graduation found him 4-F on grounds of high blood pressure, limited vision, flat feet, and punctured eardrums.\n\nHe met Tabitha Spruce in the stacks of the Fogler Library at the University, where they both worked as students; they married in January of 1971. As Stephen was unable to find placement as a teacher immediately, the Kings lived on his earnings as a laborer at an industrial laundry, and her student loan and savings, with an occasional boost from a short story sale to men\'s magazines.\n\nStephen made his first professional short story sale ("The Glass Floor") to Startling Mystery Stories in 1967. Throughout the early years of his marriage, he continued to sell stories to men\'s magazines. Many were gathered into the Night Shift collection or appeared in other anthologies.\n\nIn the fall of 1971, Stephen began teaching English at Hampden Academy, the public high school in Hampden, Maine. Writing in the evenings and on the weekends, he continued to produce short stories and to work on novels.',
        website: '', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Ed', lastName: 'Catmull', authorPic: './images/5618463.jpg', born: 'March 31 1945', biography: 'Edwin Earl "Ed" Catmull, PhD is a computer scientist and current president of Walt Disney Animation Studios, DisneyToon Studios, and Pixar Animation Studios. As a computer scientist, Catmull has contributed to many important developments in computer graphics.',
        website: '', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Amy', lastName: 'Wallace', authorPic: './images/noImage.jpg', born: 'July 3 1955', biography: 'Amy Wallace (July 3 1955 – August 10, 2013) was an American writer. She was the daughter of writers Irving Wallace and Sylvia Wallace and the sister of writer and populist historian David Wallechinsky. She was co-author of the bestselling book, The Book of Lists (1977).', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'J.D.', lastName: 'Salinger', authorPic: './images/ijg08yta.bmp', born: 'January 01 1919', died: 'January 27 2010', biography: "Jerome David Salinger was an American author, best known for his 1951 novel The Catcher in the Rye, as well as his reclusive nature. His last original published work was in 1965; he gave his last interview in 1980. Raised in Manhattan, Salinger began writing short stories while in secondary school, and published several stories in the early 1940s before serving in World War II. In 1948 he published the critically acclaimed story \"A Perfect Day for Bananafish\" in The New Yorker magazine, which became home to much of his subsequent work. In 1951 Salinger released his novel The Catcher in the Rye, an immediate popular success. His depiction of adolescent alienation and loss of innocence in the protagonist Holden Caulfield was influential, especially among adolescent readers. The novel remains widely read and controversial, selling around 250,000 copies a year.\n\nThe success of The Catcher in the Rye led to public attention and scrutiny: Salinger became reclusive, publishing new work less frequently. He followed Catcher with a short story collection, Nine Stories (1953), a collection of a novella and a short story, Franny and Zooey (1961), and a collection of two novellas, Raise High the Roof Beam, Carpenters and Seymour: An Introduction (1963). His last published work, a novella entitled \"Hapworth 16, 1924\", appeared in The New Yorker on June 19, 1965.\n\nAfterward, Salinger struggled with unwanted attention, including a legal battle in the 1980s with biographer Ian Hamilton, and the release in the late 1990s of memoirs written by two people close to him: Joyce Maynard, an ex-lover; and Margaret Salinger, his daughter. In 1996, a small publisher announced a deal with Salinger to publish \"Hapworth 16, 1924\" in book form, but amid the ensuing publicity, the release was indefinitely delayed. He made headlines around the globe in June 2009, after filing a lawsuit against another writer for copyright infringement resulting from that writer's use of one of Salinger's characters from The Catcher in the Rye. Salinger died of natural causes on January 27, 2010, at his home in Cornish, New Hampshire.", website: '', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'David Foster', lastName: 'Wallace', authorPic: './images/oaiyerr8.bmp', born: 'February 21 1962', died: 'September 12 2008', biography: 'David Foster Wallace worked surprising turns on nearly everything: novels, journalism, vacation. His life was an information hunt, collecting hows and whys. "I received 500,000 discrete bits of information today," he once said, "of which maybe 25 are important. My job is to make some sense of it." He wanted to write "stuff about what it feels like to live. Instead of being a relief from what it feels like to live." Readers curled up in the nooks and clearings of his style: his comedy, his brilliance, his humaneness.\n\nHis life was a map that ends at the wrong destination. Wallace was an A student through high school, he played football, he played tennis, he wrote a philosophy thesis and a novel before he graduated from Amherst, he went to writing school, published the novel, made a city of squalling, bruising, kneecapping editors and writers fall moony-eyed in love with him. He published a thousand-page novel, received the only award you get in the nation for being a genius, wrote essays providing the best feel anywhere of what it means to be alive in the contemporary world, accepted a special chair at California\'s Pomona College to teach writing, married, published another book and, last month [Sept. 2008], hanged himself at age 46.',
        website: 'http://www.davidfosterwallacebooks.com/', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Philip K.', lastName: 'Dick', authorPic: './images/bklqwm7h.bmp', born: 'December 16 1928', died: 'March 2 1982', biography: 'Philip K. Dick was born in Chicago in 1928 and lived most of his life in California. In 1952, he began writing professionally and proceeded to write numerous novels and short-story collections. He won the Hugo Award for the best novel in 1962 for The Man in the High Castle and the John W. Campbell Memorial Award for best novel of the year in 1974 for Flow My Tears, the Policeman Said. Philip K. Dick died on March 2, 1982, in Santa Ana, California, of heart failure following a stroke.\n\nIn addition to 44 published novels, Dick wrote approximately 121 short stories, most of which appeared in science fiction magazines during his lifetime. Although Dick spent most of his career as a writer in near-poverty, ten of his stories have been adapted into popular films since his death, including Blade Runner, Total Recall, A Scanner Darkly, Minority Report, Paycheck, Next, Screamers, and The Adjustment Bureau. In 2005, Time magazine named Ubik one of the one hundred greatest English-language novels published since 1923. In 2007, Dick became the first science fiction writer to be included in The Library of America series.',
        website: '', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Sasha', lastName: 'Petraske', authorPic: './images/noImage.jpg', born: 'March 16 1973', died: 'August 21 2015', biography: 'Sasha Petraske was the founder of the New York City cocktail bar Milk & Honey, as well as a partner and creative force behind many of the worlds most highly regarded bars. During his lifetime he was credited with inventing modern cocktail culture.', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Ernest', lastName: 'Hemingway', authorPic: './images/1455.jpg', born: 'July 21 1899', died: 'July 02 1961', biography: 'Ernest Miller Hemingway was an American author and journalist. His economical and understated style had a strong influence on 20th-century fiction, while his life of adventure and his public image influenced later generations. Hemingway produced most of his work between the mid-1920s and the mid-1950s, and won the Nobel Prize in Literature in 1954. He published seven novels, six short story collections and two non-fiction works. Three novels, four collections of short stories and three non-fiction works were published posthumously. Many of these are considered classics of American literature.', website: 'http://www.timelesshemingway.com/', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Rick', lastName: 'Riordan', authorPic: './images/15872.jpg', born: 'June 5 1964', biography: 'Rick Riordan is the #1 New York Times bestselling author of many books, including the Percy Jackson & the Olympians series. Please follow him on Twitter and via his official blog.', website: 'http://www.rickriordan.com/', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'J.K.', lastName: 'Rowling', authorPic: './images/1077326.jpg', born: 'July 31 1965', biography: "Although she writes under the pen name J.K. Rowling, pronounced like rolling, her name when her first Harry Potter book was published was simply Joanne Rowling. Anticipating that the target audience of young boys might not want to read a book written by a woman, her publishers demanded that she use two initials, rather than her full name.", website: 'https://www.jkrowling.com/', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Robin', lastName: 'DiAngelo', authorPic: './images/5wi8vaj7.bmp', born: 'September 8 1956', biography: 'Robin J. DiAngelo is an American academic, lecturer, and author working in the fields of critical discourse analysis and whiteness studies. She formerly served as a tenured professor of multicultural education at Westfield State University and is currently an Affiliate Associate Professor of Education at the University of Washington in Seattle. She is known for her work pertaining to white fragility, a term which she coined in 2011.\n\nIn a 2011 academic paper she first put forward the concept of white fragility, the notion that the tendency for white people to become defensive when confronted with their racial advantage functions to protect and maintain that advantage.', website: 'https://robindiangelo.com/', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Viet Thanh', lastName: 'Nguyen', authorPic: './images/282390.jpg', born: 'March 13 1971', biography: "Viet Thanh Nguyen is the author of the novel The Sympathizer (Grove Press, 2015). He also authored Race and Resistance: Literature and Politics in Asian America (Oxford University Press, 2002) and co-edited Transpacific Studies: Framing an Emerging Field (University of Hawaii Press, 2014). An associate professor at the University of Southern California, he teaches in the departments of English and American Studies and Ethnicity.", website: 'http://www.vietnguyen.info/', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Michael', lastName: 'Bennett', authorPic: './images/qufx7r9k.bmp', born: 'November 13 1985', biography: "Michael Bennett is a three-time Pro Bowler, Pro Bowl MVP, Super Bowl Champion, and two-time NFC Champion. He has gained international recognition for his public support for the Black Lives Matter Movement, women’s rights, and other social justice causes. In 2017, he was named one of the 100 Most Influential African Americans by The Root, was the Seattle Seahawks nominee for the NFL’s Walter Payton Man of the Year award, and was honored along with his brother Martellus with a BET Shine a Light award for exceptional service.", website: 'http://michaelbennettbook.com ', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Ta-Nehisi', lastName: 'Coates', authorPic: './images/bwbpcpgj.bmp', born: 'September 30 1975', biography: "Ta-Nehisi Coates is the author of the #1 New York Times bestseller Between the World and Me, a finalist for the National Book Award. A MacArthur \"Genius Grant\" fellow, Coates has received the National Magazine Award, the Hillman Prize for Opinion and Analysis Journalism, and the George Polk Award for his Atlantic cover story \"The Case for Reparations.\" He lives in New York with his wife and son.", website: 'https://ta-nehisicoates.com/', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Robert', lastName: 'Jordan', authorPic: './images/4kixvb0w.bmp', born: 'October 17 1948', died: 'September 16 2007', biography: "Robert Jordan was the pen name of James Oliver Rigney, Jr., under which he was best known as the author of the bestselling The Wheel of Time fantasy series. He also wrote under the names Reagan O'Neal and Jackson O'Reilly.\n\nJordan was born in Charleston, South Carolina. He served two tours in Vietnam (from 1968 to 1970) with the United States Army as a helicopter gunner. He was awarded the Distinguished Flying Cross with bronze oak leaf cluster, the Bronze Star with \"V\" and bronze oak leaf cluster, and two Vietnamese Gallantry Crosses with palm. After returning from Vietnam he attended The Citadel where he received an undergraduate degree in physics. After graduating he was employed by the United States Navy as a nuclear engineer. He began writing in 1977. He was a history buff and enjoyed hunting, fishing, sailing, poker, chess, pool, and pipe collecting.\n\nHe described himself as a \"High Church\" Episcopalian and received communion more than once a week. He lived with his wife Harriet McDougal, who works as a book editor (currently with Tor Books; she was also Jordan's editor) in a house built in 1797. Responding to queries on the similarity of some of the concepts in his Wheel of Time books with Freemasonry concepts, Jordan admitted that he was a Freemason. However, \"like his father and grandfather,\" he preferred not to advertise, possibly because of the negative propaganda against Freemasonry. In his own words, \"no man in this country should feel in danger because of his beliefs.\"\n\nOn March 23, 2006, Jordan disclosed in a statement that he had been diagnosed with cardiac amyloidosis, and that with treatment, his median life expectancy was four years, though he said he intended to beat the statistics. He later posted on his Dragonmount blog to encourage his fans not to worry about him and that he intended to have a long and fully creative life. He began chemotherapy treatment at Mayo Clinic in Rochester, Minnesota, in early April 2006. Jordan was enrolled in a study using the drug Revlimid just approved for multiple myeloma but not yet tested on primary amyloidosis.\n\nJordan died at approximately 2:45 p.m. EDT on September 16, 2007, and a funeral service was held for him on Wednesday, September 19, 2007. Jordan was cremated and his ashes buried in the churchyard of St. James Church in Goose Creek, outside Charleston.", createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Viet Thanh', lastName: 'Nguyen', authorPic: './images/gfuti4j7.bmp', born: 'March 13 1971', biography: "Viet Thanh Nguyen is the author of the novel The Sympathizer (Grove Press, 2015). He also authored Race and Resistance: Literature and Politics in Asian America (Oxford University Press, 2002) and co-edited Transpacific Studies: Framing an Emerging Field (University of Hawaii Press, 2014). An associate professor at the University of Southern California, he teaches in the departments of English and American Studies and Ethnicity.\n\nHe has been a fellow of the American Council of Learned Societies (2011-2012), the Radcliffe Institute for Advanced Study at Harvard (2008-2009) and the Fine Arts Work Center (2004-2005). He has also received residencies, fellowships, and grants from the Luce Foundation, the Mellon Foundation, the Asian Cultural Council, the James Irvine Foundation, the Huntington Library, the Djerassi Resident Artists Program, the Bread Loaf Writers’ Conference, Creative Capital and the Warhol Foundation.\n\nHis short fiction has been published in Manoa, Best New American Voices 2007, A Stranger Among Us: Stories of Cross-Cultural Collision and Connection, Narrative Magazine, TriQuarterly, the Chicago Tribune, and Gulf Coast, where his story won the 2007 Fiction Prize.\n\nHis writing has been translated into Korean, Vietnamese, Japanese, and Spanish, and he has given invited lectures in China, Korea, Japan, Taiwan, and Germany. He is finishing an academic book titled War, Memory, Identity.", website: 'https://vietnguyen.info', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Rick', lastName: 'Riordan', authorPic: './images/tgzvwmhh.bmp', born: 'June 5 1964', biography: "Rick Riordan is the #1 New York Times bestselling author of many books, including the Percy Jackson & the Olympians series. Please follow him on Twitter and via his official blog.", website: 'https://www.rickriordan.com', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Brandon', lastName: 'Sanderson', authorPic: './images/kr3eva9m.bmp', born: 'December 19 1975', biography: "Brandon’s major books for the second half of 2016 are The Dark Talent, the final volume in Alcatraz Smedry’s autobiographical account of his battle against the Evil Librarians who secretly rule our world, and Arcanum Unbounded, the collection of short fiction in the Cosmere universe that includes the Mistborn series and the Stormlight\n\nArchive, among others. This collection features The Emperor’s Soul, Mistborn: Secret History, and a brand-new Stormlight Archive novella, Edgedancer.\n\nEarlier this year he released Calamity, the finale of the #1 New York Times bestselling Reckoners trilogy that began with Steelheart.\n\nBrandon Sanderson was born in 1975 in Lincoln, Nebraska. As a child Brandon enjoyed reading, but he lost interest in the types of titles often suggested to him, and by junior high he never cracked a book if he could help it. This changed when an eighth grade teacher gave him Dragonsbane by Barbara Hambly.\n\nBrandon was working on his thirteenth novel when Moshe Feder at Tor Books bought the sixth he had written. Tor has published Elantris, the Mistborn trilogy and its followup The Alloy of Law, Warbreaker, and The Way of Kings and Words of Radiance, the first two in the planned ten-volume series The Stormlight Archive. He was chosen to complete Robert Jordan’s Wheel of Time series; 2009’s The Gathering Storm and 2010’s Towers of Midnight were followed by the final book in the series, A Memory of Light, in January 2013. Four books in his middle-grade Alcatraz vs. the Evil Librarians series have been released in new editions by Starscape, and his novella Infinity Blade Awakening was an ebook bestseller for Epic Games accompanying their acclaimed Infinity Blade iOS video game series. Two more novellas, Legion and The Emperor’s Soul, were released by Subterranean Press and Tachyon Publications in 2012, and 2013 brought two young adult novels, The Rithmatist from Tor and Steelheart from Delacorte.\n\nThe only author to make the short list for the David Gemmell Legend Award six times in four years, Brandon won that award in 2011 for The Way of Kings. The Emperor’s Soul won the 2013 Hugo Award for Best Novella. He has appeared on the New York Times Best-Seller List multiple times, with five novels hitting the #1 spot.\n\nCurrently living in Utah with his wife and children, Brandon teaches creative writing at Brigham Young University.", website: 'https://www.brandonsanderson.com', createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Shirley', lastName: 'Jackson', authorPic: './images/13388.jpg', born: 'December 14 1916', died: 'August 08 1965', biography: "Shirley Jackson was an influential American author. A popular writer in her time, her work has received increasing attention from literary critics in recent years. She has influenced such writers as Stephen King, Nigel Kneale, and Richard Matheson.", createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Edgar Allan', lastName: 'Poe', authorPic: './images/4624490.jpg', born: 'January 19 1809', died: 'October 07 1849', biography: "The name Poe brings to mind images of murderers and madmen, premature burials, and mysterious women who return from the dead. His works have been in print since 1827 and include such literary classics as The Tell-Tale Heart, The Raven, and The Fall of the House of Usher. This versatile writer’s oeuvre includes short stories, poetry, a novel, a textbook, a book of scientific theory, and hundreds of essays and book reviews. He is widely acknowledged as the inventor of the modern detective story and an innovator in the science fiction genre, but he made his living as America’s first great literary critic and theoretician. Poe’s reputation today rests primarily on his tales of terror as well as on his haunting lyric poetry.", createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Alan', lastName: 'Brennert', authorPic: './images/i3m8fpx8.bmp', born: 'May 30, 1954', biography: "Alan Brennert is the author of the historical novels Palisades Park, Honolulu (chosen one of the best books of 2009 by The Washington Post), and Moloka'i, which won the 2006 Bookies Award, sponsored by the Contra Costa Library, for the Book Club Book of the Year (and has sold over 600,000 copies since publication). It was also a 2012 One Book, One San Diego selection. He has won an Emmy Award and a People's Choice Award for his work as a writer-producer on the television series L.A. Law, and his short story \"Ma Qui\" was honored with a Nebula Award. His new novel, Daughter of Moloka'i, will be published by St. Martin's Press on February 19, 2019.", createdAt: new Date(), updatedAt: new Date()},
      {firstName: 'Angela', lastName: 'Davis', authorPic: './images/98xaqu6.bmp', born: 'January 26, 1944', biography: "Angela Yvonne Davis is an American political activist, scholar, and author. She emerged as a nationally prominent activist and radical in the 1960s, as a leader of the Communist Party USA, and had close relations with the Black Panther Party through her involvement in the Civil Rights Movement despite never being an official member of the party. Prisoner rights have been among her continuing interests; she is the founder of Critical Resistance, an organization working to abolish the prison-industrial complex. She is a retired professor with the History of Consciousness Department at the University of California, Santa Cruz, and is the former director of the university's Feminist Studies department.\n\nHer research interests are in feminism, African American studies, critical theory, Marxism, popular music, social consciousness, and the philosophy and history of punishment and prisons. Her membership in the Communist Party led to Ronald Reagan's request in 1969 to have her barred from teaching at any university in the State of California. She was tried and acquitted of suspected involvement in the Soledad brothers' August 1970 abduction and murder of Judge Harold Haley in Marin County, California. She was twice a candidate for Vice President on the Communist Party USA ticket during the 1980s.", createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Authors', null, {})
  }
};


// firstName: new DataTypes.STRING,
// lastName: new DataTypes.STRING,
// authorPic: new DataTypes.STRING,
// born: new DataTypes.DATE,
// died: new DataTypes.DATE,
// biography: new DataTypes.TEXT,
// website: new DataTypes.STRING
