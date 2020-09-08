'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      { title: 'Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration', cover: './images/18077903.jpg', published: 'July 24th 2009', summary: '', createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Shining', cover: './images/11588.jpg', published: 'January 28th 1977', summary: 'Jack Torrance\'s new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he\'ll have plenty of time to spend reconnecting with his family and working on his writing. But as the harsh winter weather sets in, the idyllic location feels ever more remote...and more sinister. And the only one to notice the strange and terrible forces gathering around the Overlook is Danny Torrance, a uniquely gifted five-year-old.', createdAt: new Date(), updatedAt: new Date()},
      { title: 'It', cover: './images/830502.jpg', published: 'October 1st 1987', summary: '', createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Stand', cover: './images/149267.jpg', published: 'May 1st 1990', summary: "Welcome to Derry, Maine ...It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real ...They were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But none of them can withstand the force that has drawn them back to Derry to face the nightmare without an end, and the evil without a name.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Catcher in the Rye', cover: './images/5107.jpg', published: 'January 30th 2001', summary: "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days. The boy himself is at once too simple and too complex for us to make any final comment about him or his story. Perhaps the safest thing we can say about Holden is that he was born in the world not just strongly attracted to beauty but, almost, hopelessly impaled on it. There are many voices in this novel: children's voices, adult voices, underground voices-but Holden's voice is the most eloquent of all. Transcending his own vernacular, yet remaining marvelously faithful to it, he issues a perfectly articulated cry of mixed pain and pleasure. However, like most lovers and clowns and poets of the higher orders, he keeps most of the pain to, and for, himself. The pleasure he gives away, or sets aside, with all his heart. It is there for the reader who can handle it to keep.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Franny and Zooey', cover: './images/5113.jpg', published: 'January 30th 2001', summary: 'The short story, Franny, takes place in an unnamed college town and tells the tale of an undergraduate who is becoming disenchanted with the selfishness and inauthenticity she perceives all around her.', createdAt: new Date(), updatedAt: new Date()},
      { title: 'Infinite Jest', cover: './images/6759.jpg', published: '2005', summary: "A gargantuan, mind-altering tragi-comedy about the Pursuit of Happiness in America.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Consider the Lobster and Other Essays', cover: './images/6751.jpg', published: 'December 13th 2005', summary: "Do lobsters feel pain? Did Franz Kafka have a funny bone? What is John Updike's deal, anyway? And what happens when adult video starlets meet their fans in person? David Foster Wallace answers these questions and more in essays that are also enthralling narrative adventures. Whether covering the three-ring circus of a vicious presidential race, plunging into the wars between dictionary writers, or confronting the World's Largest Lobster Cooker at the annual Maine Lobster Festival, Wallace projects a quality of thought that is uniquely his and a voice as powerful and distinct as any in American letters.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Do Androids Dream of Electric Sheep?', cover: './images/36402034._SY475_.jpg', published: 'February 26th 2008', summary: "It was January 2021, and Rick Deckard had a license to kill. Somewhere among the hordes of humans out there, lurked several rogue androids. Deckard's assignment--find them and then...'retire' them. Trouble was, the androids all looked exactly like humans, and they didn't want to be found!", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Man in the High Castle', cover: './images/216363.jpg', published: ' June 30th 1992', summary: "It's America in 1962. Slavery is legal once again. The few Jews who still survive hide under assumed names. In San Francisco, the I Ching is as common as the Yellow Pages. All because some twenty years earlier the United States lost a war — and is now occupied by Nazi Germany and Japan.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'White Fragility', cover: './images/white.jpg', published: 'June 26th 2018', summary: "Referring to the defensive moves that white people make when challenged racially, white fragility is characterized by emotions such as anger, fear, and guilt and by behaviors including argumentation and silence. These behaviors, in turn, function to reinstate white racial equilibrium and prevent any meaningful cross-racial dialogue. In this in-depth exploration, anti-racist educator Robin DiAngelo examines how white fragility develops, how it protects racial inequality, and what can be done to engage more constructively.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Things That Make White People Uncomfortable', cover: './images/37823757', published: 'April 3rd 2018', summary: "", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Daughter of Moloka', cover: './images/daughter.jpg', published: 'February 19th 2019', summary: "This companion tale to Moloka'i tells the story of Ruth, the daughter that Rachel Kalama—quarantined for most of her life at the isolated leprosy settlement of Kalaupapa—was forced to give up at birth.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Between The World And Me', cover: './images/didg.jpg', published: 'July 14th 2015', summary: "This is your country, this is your world, this is your body, and you must find some way to live within the all of it.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Freedom Is a Constant Struggle',cover:'./images', published: 'January 25th 2016', summary: "In these newly collected essays, interviews, and speeches, world-renowned activist and scholar Angela Y. Davis illuminates the connections between struggles against state violence and oppression throughout history and around the world", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Eye of the World', cover: './images/eyeWorld.jpg', published: 'November 15th 1990', summary: "The Wheel of Time turns and Ages come and pass. What was, what will be, and what is, may yet fall under the Shadow.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Sympathizer', cover: './images/23168277.jpg', published: 'April 7th 201', summary: "It is April 1975, and Saigon is in chaos. At his villa, a general of the South Vietnamese army is drinking whiskey and, with the help of his trusted captain, drawing up a list of those who will be given passage aboard the last flights out of the country. The general and his compatriots start a new life in Los Angeles, unaware that one among their number, the captain, is secretly observing and reporting on the group to a higher-up in the Viet Cong.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Lightning Thief', cover: './images/28187.jpg', published: 'March 1st 2006', summary: "Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse - Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him. When Percy's mom finds out, she knows it's time that he knew the truth about where he came from, and that he go to the one place he'll be safe. She sends Percy to Camp Half Blood, a summer camp for demigods (on Long Island), where he learns that the father he never knew is Poseidon, God of the Sea. Soon a mystery unfolds and together with his friends—one a satyr and the other the demigod daughter of Athena - Percy sets out on a quest across the United States to reach the gates of the Underworld (located in a recording studio in Hollywood) and prevent a catastrophic war between the gods.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Battle of the Labyrinth', cover: './images/2120932.jpg', published: 'March 6th 2008', summary: "Percy Jackson isn't expecting freshman orientation to be any fun. But when a mysterious mortal acquaintance appears at his potential new school, followed by demon cheerleaders, things quickly move from bad to worse.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Sea of Monsters', cover: './images/28186.jpg', published: 'April 1st 2006 ', summary: "The heroic son of Poseidon makes an action-packed comeback in the second must-read installment of Rick Riordan's amazing young readers series. Starring Percy Jackson, a 'half blood' whose mother is human and whose father is the God of the Sea, Riordan's series combines cliffhanger adventure and Greek mythology lessons that results in true page-turners that get better with each installment.", createdAt: new Date(), updatedAt: new Date()},
      { title: "The Titan's Curse", cover: './images/561456.jpg', published: 'May 5th 2007', summary: "It's not everyday you find yourself in combat with a half-lion, half-human. But when you're the son of a Greek god, it happens. And now my friend Annabeth is missing, a goddess is in chains and only five half-blood heroes can join the quest to defeat the doomsday monster.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'OathBringer', cover: './images/OathBringer.jpg', published: 'November 14th, 2017', summary: "Three years ago, Lift asked a goddess to stop her from growing older--a wish she believed was granted. Now, in Edgedancer, the barely teenage nascent Knight Radiant finds that time stands still for no one. Although the young Azish emperor granted her safe haven from an executioner she knows only as Darkness, court life is suffocating the free-spirited Lift, who can't help heading to Yeddaw when she hears the relentless Darkness is there hunting people like her with budding powers. The downtrodden in Yeddaw have no champion, and Lift knows she must seize this awesome responsibility.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Words of Radiance', cover: './images/17332218.jpg', published: 'March 4th, 2014', summary: "Expected by his enemies to die the miserable death of a military slave, Kaladin survived to be given command of the royal bodyguards, a controversial first for a low-status darkeyes. Now he must protect the king and Dalinar from every common peril as well as the distinctly uncommon threat of the Assassin, all while secretly struggling to master remarkable new powers that are somehow linked to his honorspren, Syl.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Way of Kings', cover: './images/wayOf.jpg', published: 'August 31st, 2010', summary: "According to mythology mankind used to live in The Tranquiline Halls. Heaven. But then the Voidbringers assaulted and captured heaven, casting out God and men. Men took root on Roshar, the world of storms. And the Voidbringers followed...", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Last Olympian', cover: './images/4556058.jpg', published: 'May 5th 2009', summary: "All year the half-bloods have been preparing for battle against the Titans, knowing the odds of victory are grim. Kronos's army is stronger than ever, and with every god and half-blood he recruits, the evil Titan's power only grows.", createdAt: new Date(), updatedAt: new Date()},
      { title: "Harry Potter and the Sorcerer's Stone", cover: './images/3._SY475_.jpg', published: 'November 1st 2003', summary: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.", createdAt: new Date(), updatedAt: new Date()},
      { title: "Harry Potter and the Chamber of Secrets", cover: './images/15881._SY475_.jpg', published: 'June 2nd 1999', summary: "Ever since Harry Potter had come home for the summer, the Dursleys had been so mean and hideous that all Harry wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he’s packing his bags, Harry receives a warning from a strange impish creature who says that if Harry returns to Hogwarts, disaster will strike", createdAt: new Date(), updatedAt: new Date()},
      { title: "Harry Potter and the Prisoner of Azkaban", cover: './images/5.jpg', published: 'May 1st 2004', summary: "Harry Potter's third year at Hogwarts is full of new dangers. A convicted murderer, Sirius Black, has broken out of Azkaban prison, and it seems he's after Harry. Now Hogwarts is being patrolled by the dementors, the Azkaban guards who are hunting Sirius. But Harry can't imagine that Sirius or, for that matter, the evil Lord Voldemort could be more frightening than the dementors themselves, who have the terrible power to fill anyone they come across with aching loneliness and despair. Meanwhile, life continues as usual at Hogwarts. A top-of-the-line broom takes Harry's success at Quidditch, the sport of the Wizarding world, to new heights. A cute fourth-year student catches his eye. And he becomes close with the new Defense of the Dark Arts teacher, who was a childhood friend of his father. Yet despite the relative safety of life at Hogwarts and the best efforts of the dementors, the threat of Sirius Black grows ever closer. But if Harry has learned anything from his education in wizardry, it is that things are often not what they seem. Tragic revelations, heartwarming surprises, and high-stakes magical adventures await the boy wizard in this funny and poignant third installment of the beloved series.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Harry Potter and the Goblet of Fire', cover: './images/6.jpg', published: 'September 28th 2002', summary: "Harry Potter is midway through his training as a wizard and his coming of age. Harry wants to get away from the pernicious Dursleys and go to the International Quidditch Cup with Hermione, Ron, and the Weasleys. He wants to dream about Cho Chang, his crush (and maybe do more than dream). He wants to find out about the mysterious event that's supposed to take place at Hogwarts this year, an event involving two other rival schools of magic, and a competition that hasn't happened for hundreds of years. He wants to be a normal, fourteen-year-old wizard. But unfortunately for Harry Potter, he's not normal - even by wizarding standards.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Harry Potter and the Order of the Phoenix', cover: './images/2.jpg', published: 'September 2004', summary: "There is a door at the end of a silent corridor. And it’s haunting Harry Pottter’s dreams. Why else would he be waking in the middle of the night, screaming in terror? Harry has a lot on his mind for this, his fifth year at Hogwarts: a Defense Against the Dark Arts teacher with a personality like poisoned honey; a big surprise on the Gryffindor Quidditch team; and the looming terror of the Ordinary Wizarding Level exams. But all these things pale next to the growing threat of He-Who-Must-Not-Be-Named - a threat that neither the magical government nor the authorities at Hogwarts can stop. As the grasp of darkness tightens, Harry must discover the true depth and strength of his friends, the importance of boundless loyalty, and the shocking price of unbearable sacrifice.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Harry Potter and the Half-Blood Prince', cover: './images/1._SX318_.jpg', published: 'September 16th 2006', summary: "The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Harry Potter and the Deathly Hallows', cover: './images/', published: 'July 21st 2007', summary: "Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid’s motorbike and they take to the skies, he knows Lord Voldemort and the Death Eaters will not be far behind.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'For Whom the Bell Tolls', cover: './images/46170.jpg', published: '1995', summary: 'In 1937 Ernest Hemingway traveled to Spain to cover the civil war there for the North American Newspaper Alliance. Three years later he completed the greatest novel to emerge from "the good fight", For Whom the Bell Tolls.', createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Old Man and the Sea', cover: './images/2165.jpg', published: '1996', summary: "This short novel, already a modern classic, is the superbly told, tragic story of a Cuban fisherman in the Gulf Stream and the giant Marlin he kills and loses — specifically referred to in the citation accompanying the author's Nobel Prize for literature in 1954.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'A Farewell to Arms', cover: './images/10799.jpg', published: '1929', summary: "A Farewell to Arms is the unforgettable story of an American ambulance driver on the Italian front and his passion for a beautiful English nurse. Set against the looming horrors of the battlefield - the weary, demoralized men marching in the rain during the German attack on Caporetto; the profound struggle between loyalty and desertion—this gripping, semiautobiographical work captures the harsh realities of war and the pain of lovers caught in its inexorable sweep. Ernest Hemingway famously said that he rewrote his ending to A Farewell to Arms thirty-nine times to get the words right.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'Misery', cover: './images/10614.jpg', published: 'November 1st 1988', summary: "Paul Sheldon. He's a bestselling novelist who has finally met his biggest fan. Her name is Annie Wilkes and she is more than a rabid reader - she is Paul's nurse, tending his shattered body after an automobile accident. But she is also his captor, keeping him prisoner in her isolated house.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Haunting of Hill House', cover: './images/89717._SY475_.jpg', published: 'October 16th 1959', summary: "First published in 1959, Shirley Jackson's The Haunting of Hill House has been hailed as a perfect work of unnerving terror. It is the story of four seekers who arrive at a notoriously unfriendly pile called Hill House: Dr. Montague, an occult scholar looking for solid evidence of a 'haunting'; Theodora, the lighthearted assistant; Eleanor, a friendless, fragile young woman well acquainted with poltergeists; and Luke, the future heir of Hill House. At first, their stay seems destined to be merely a spooky encounter with inexplicable phenomena. But Hill House is gathering its powers—and soon it will choose one of them to make its own.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Tell-Tale Heart and Other Writings', cover: './images/391729.jpg', published: '1843', summary: 'Edgar Allan Poe remains the unsurpassed master of works of mystery and madness in this outstanding collection of Poes prose and poetry are sixteen of his finest tales, including "The Tell-Tale Heart", "The Murders in the Rue Morgue", "The Fall of the House of Usher," "The Pit and the Pendulum," "William Wilson," "The Black Cat," "The Cask of Amontillado," and "Eleonora". Here too is a major selection of what Poe characterized as the passion of his life, his poems - "The Raven," "Annabel Lee," Ulalume," "Lenore," "The Bells," and more, plus his glorious prose poem "Silence - A Fable" and only full-length novel, The Narrative of Arthur Gordon Pym.', createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Complete Stories and Poems', cover: './images/23919.jpg', published: '1849', summary: "This single volume brings together all of Poe's stories and poems, and illuminates the diverse and multifaceted genius of one of the greatest and most influential figures in American literary history.", createdAt: new Date(), updatedAt: new Date()},
      { title: 'The Raven', cover: './images/264158.jpg', published: '1845', summary: "In Gustave Doré, one of the most prolific and successful book illustrators of the late 19h century, Edgar Allan Poe's renowned poem The Raven found perhaps its most perfect artistic interpreter. Doré's dreamlike, otherworldly style, tinged with melancholy, seems ideally matched to the bleak despair of Poe's celebrated work, among the most popular American poems ever written.", createdAt: new Date(), updatedAt: new Date()},
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {})
  }
};
