export const CATEGORY = {
  PARTS_OF_SPEECH: 'Parts of speech',
  SENTENCE_STRUCTURE: 'Sentence Structure',
  PUNCTUATION: 'Punctuation',
  CORRECT_GRAMMAR_BASICS: 'Correct Grammar Basics',
  DONT_ANESTHETIZE_YOUR_READERS: `Don't anesthetize your readers.`,
  MUST_KNOW_GRAMMAR_RULES: `A dozen grammatical rules you absolutely need to know`
}

export const grammarDefinitions = [
  {
    title: 'Noun',
    category: CATEGORY.PARTS_OF_SPEECH,
    description: `
      A word that names a person, place, or thing.
    `,
  },
  {
    title: 'Pronoun',
    category: CATEGORY.PARTS_OF_SPEECH,
    description: `A word used in place of a noun.`
  },
  {
    title: 'Verb',
    category: CATEGORY.PARTS_OF_SPEECH,
    description: `A word or word group that describes the action
    or state of being of the subject. A transitive verb requires a
    direct object to receive the action. An intransitive verb does not.`
  },
  {
    title: 'Adjective',
    category: CATEGORY.PARTS_OF_SPEECH,
    description: `A word that modifies or describes a noun or pronoun.`
  },
  {
    title: 'Adverb',
    category: CATEGORY.PARTS_OF_SPEECH,
    description: `A word that modifies or describes a verb, adjective,
    or other adverb.`
  },
  {
    title: 'Preposition',
    category: CATEGORY.PARTS_OF_SPEECH,
    description: `A word that relates a noun or pronoun to some other
    word in the sentence. The preposition and its following related words
    constitute a prepositional phrase.`
  },
  {
    title: 'Conjunction',
    category: CATEGORY.PARTS_OF_SPEECH,
    description: `A word used to join or connnect words, phrases, or clauses.`
  },
  {
    title: 'Interjection',
    category: CATEGORY.PARTS_OF_SPEECH,
    description: `A word used to express emotion or surprise.`
  },
  {
    title: 'Subjects',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `The thing that is doing or being something. Compound subjects
    have more than one subject.`
  },
  {
    title: 'Verb',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `What the subject is doing or being. When you have more than one,
    it is a compound verb.`
  },
  {
    title: 'Complement',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `The completion of the idea started by the subject and verb.`
  },
  {
    title: 'Phrase',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `A group of related words without a subject and verb.`
  },
  {
    title: 'Clause',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `A group of related words with a subject and a verb.
    There are three types: Independent, Dependent, and Embedded.`
  },
  {
    title: 'Independent (Main) clause.',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `A clause that conveys a complete idea and that can stand alone.
    Also called a main clause.`
  },
  {
    title: 'Dependent (Subordinate) clause',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `An idea that cannot stand alone; it depends on an independent
    clause to complete its meaning. Also called a subordinate clause`
  },
  {
    title: 'Embedded clause',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `A minor clause used within an independent or dependent clause.`
  },
  {
    title: 'Conjunctions',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `Connect clauses in a sentence.`
  },
  {
    title: 'Coordinating Conjunctions',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `Connect clauses of equal strength. There are seven: for, and,
    nor, but, or, yet, and so (FANBOYS).`
  },
  {
    title: 'Subordinating Conjunctions',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `Connect clauses of unequal strength. Place the main emphasis on
    one clause and secondary emphasis on the other. Examples include if, as, unless,
    although, when, after, and because.`
  },
  {
    title: 'Sentence Types',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `Based on the number and types of clauses in the sentence,
    sentences can be classified as Simple, Compound, Complex, or Compound Complex.`
  },
  {
    title: 'Simple Sentence',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `Contains one independent clause and no dependent clauses.`,
    examples: [
      {
        example: `After last week's events, nothing surprises me.`
      }
    ]
  },
  {
    title: 'Compound Sentence',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `Contains two independent clauses and no dependent clauses.`,
    examples: [
      {
        example: `I will compose the text and you create the graphics.`
      }
    ]
  },
  {
    title: 'Complex Sentence',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `Contains one independent clause and one or more dependent
    clauses`,
    examples: [
      {
        example: `When the copier arrives, you complete the warranty paperwork`
      }
    ]
  },
  {
    title: 'Compound Complex',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `Contains a minimum of two independent clauses, and one
    dependent clause`,
    examples: [
      {
        example: `After the meeting starts, I will present the report, and you
        answer the questions.`
      }
    ]
  },
  {
    title: 'Sentence composition guidelines',
    category: CATEGORY.SENTENCE_STRUCTURE,
    description: `SVC (Subject, Verb, Complement) - use strong subjects,
    place verbs near subjects, keep complements clear an uncluttered.`
  },
  {
    title: 'Hyphenate your phrasal adjectives',
    category: CATEGORY.PUNCTUATION,
    description: `
      When two or more words as a unit modify a noun, they must
      be hyphenated, except with: (1) simple phrases formed by
      an -ly adverb. (2) phrases formed with proper nouns or
      foreign words. (3) phrasal adjectives used after the
      modified noun.
    `,
    examples: [
      {
        correct: '25-year-old company'
      },
      {
        correct: 'a greatly exaggerated claim'
      },
      {
        correct: 'New Zeland exports'
      },
      {
        correct: 'our HR manager is risk-averse by nature'
      }
    ]
  },
  {
    title: 'Use a comma before and or or when listing three or more items',
    category: CATEGORY.PUNCTUATION,
    description: `
      Especially needed when sentences become more complex. 
      Recommended because it is sometimes wrong not to use
      it but always right to include it.
    `,
    examples: [
      {
        correct: 'red, white, and blue'
      }
    ]
  },
  {
    title: 'Commas and joining compound predicates',
    category: CATEGORY.PUNCTUATION,
    description: `
      With three or more compound predicates, use a comma or
      semicolon to separate them. Do not use them with two
      unless the subject is repeated. When commas are used
      in the predicates, use semicolons as separators.
    `,
    examples: [
      {
        correct: 'I stopped by yesterday, and I will call today'
      },
      {
        correct: 'I stopped by yesterday and will call today'
      },
      {
        correct: 'I wrote him yesterday, stopped by yesterday, and will call today'
      },
      {
        correct: 'I wrote him last week; I stopped by yesterday with the paperwork, the deposit check, and the keys; and I will call him today'
      }
    ]
  },
  {
    title: 'No apostrophes to form plural nouns',
    category: CATEGORY.PUNCTUATION,
    description: `
      Except with lowercase letters and capital letters,
      don't use apostrophes to make nouns plural.
    `,
    examples: [
      {
        correct: 'Mind your p\'s and q\'s'
      },
      {
        correct: 'ATMs'
      },
      {
        correct: '1990s'
      },
      {
        correct: 'Please delete the first two ors in a sentence'
      },
      {
        correct: 'Mr. and Mrs. Smith are the Smiths'
      }
    ]
  },
  {
    title: 'Don\'t separate subjects and verbs',
    category: CATEGORY.PUNCTUATION,
    description: `
      Keep words and phrases that go together close together.
      Deviations from the rule are used for emphasis.
    `,
    examples: [
      {
        correct: 'Maeve Peterson, the new CEO, is..'
      },
      {
        correct: 'Ms. Peterson, whose leadership ..., will take the reins ...'
      }
    ]
  },
  {
    title: 'Use bullets, but don`t overuse them',
    category: CATEGORY.PUNCTUATION,
    description: `
      Bullets are used to draw a reader's eye. Should be preceeded
      by an explanatory sentence, be similar in length, have a hanging
      indent, be single spaced, use simple bullets.
    `,
    examples: []
  },
  {
    title: 'Avoid quotes to emphasize words, underlining, boldface overuse, and all caps',
    category: CATEGORY.PUNCTUATION,
    description: `
      Using quotation marks is not clear. They can convey
      the same meaning as prefixing the word with
      "so called", imply that the item is not what it claims to
      be, or to show where a quotation begins.
    `,
    examples: [
      {
        incorrect: 'Here\'s the "final" schedule'
      },
      {
        incorrect: 'An "expert" in negotiation'
      }
    ]
  },
  {
    title: 'Don\'t hyphenate most prefixes',
    category: CATEGORY.PUNCTUATION,
    description: `
      American English avoids hyphenating prefixes, even
      when it causes a double letter. Exceptions: (1) to avoid
      an ambiguity, (2) when the root word is a proper noun,
      (3) with certain prefixes (e.g. all-, ex-, self-). 
    `,
    examples: [
      {
        correct: 'anteroom'
      },
      {
        correct: 'biennial'
      },
      {
        correct: 'deselect'
      },
      {
        correct: 'cooperate'
      },
      {
        correct: 'misspeak'
      },
      {
        correct: 're-lease vs release'
      },
      {
        correct: 're-sign vs resign'
      },
      {
        correct: 'all-inclusive'
      },
      {
        correct: 'self-correcting'
      }
    ]
  },
  {
    title: 'Proper uses of long dashes',
    category: CATEGORY.PUNCTUATION,
    description: `
      Long dashes (em-dashes) help set apart parenthetical
      phrases.
    `,
    examples: [
      {
        correct: 'Customer Service--it\'s our top priority'
      },
      {
        correct: '... long dashes--called em-dashes--frame'
      }
    ]
  },
  {
    title: 'No commas when writing month and year',
    category: CATEGORY.PUNCTUATION,
    description: `
      No comma should be used when writing just the month
      and year, nor when writing in day-month-year format.
    `,
    examples: [
      {
        correct: 'February 2012'
      },
      {
        correct: '23 February 2012'
      },
      {
        correct: 'February 23, 2012'
      }
    ]
  },
  {
    title: 'Singular possessives always add an S',
    category: CATEGORY.PUNCTUATION,
    description: `
      Singular possessives always add an S, even when the
      word ends with -s, -z, -x, or -ss. Use apostrophes
      unless it is a pronoun - some of which have a possessive
      form without the S. Plural poessives or singluar
      possessives formed from plural words put the apostrophe
      after the S.
    `,
    examples: [
      {
        correct: 'Holtz\'s contract'
      },
      {
        correct: 'Xerox\'s patients'
      },
      {
        correct: 'mine, our, ours, your, yours'
      },
      {
        correct: 'The United Arab Emirates\' campital is Abu Dhabi'
      },
      {
        correct: 'the caterers\' fee'
      }
    ]
  },
  {
    title: 'Handling Pronouns',
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
    description: `
      I, we, he, and she are subjects of phrases. Me, us, 
      him, and her are objects of either verbs or prepositions.
      To test with compound phrasings, try leaving out the named
      subject.
    `,
    examples: [
      {
        correct: 'She placed an order with Megan and me',
        incorrect: 'She placed an order with Megan and I'
      },
      {
        correct: 'This is he',
        incorrect: 'This is him'
      },
      {
        correct: 'Who may I say is calling?',
        incorrect: 'Whom may I say is calling?'
      }
    ]
  },
  {
    title: 'Subject-verb disagreement',
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
    description: `
      Verbs must agree in person and number with the
      subject. 'There' causes issues because it appears to
      be a subject but is not - it is an expletive (a word
      that stands in for the subject in an inverted sentence).
      Objects of prepositional phrases are never the subject,
      but can be confusing because they are nearer the verb.
      In compound subjects with either/or, neither/nor, the 
      verb must match the number of the noun that follows the
      or or nor.
    `,
    examples: [
      {
        incorrect: 'There is always risk and liability considerations to take into account.',
        correct: 'There are always risk and liability considerations to take into account.'
      },
      {
        incorrect: 'There is many options to avoid a takeover.',
        correct: 'There are many options to avoid a takeover.'
      },
      {
        incorrect: 'The details of the customized work is delaying the project.',
        correct: 'The details of the customized work are delaying the project.'
      },
      {
        incorrect: 'The source of our replacement parts and maintenance have not been selected yet.',
        correct: 'The source for our replacement parts and maintenance has not been selected yet.'
      },
      {
        incorrect: 'Special services or a new product target a niche market.',
        correct: 'Special services or a new product targets a niche market.'
      },
      {
        incorrect: 'Special services or a new product targets a niche market.',
        correct: 'Neither the education fund nor the training costs are without budget constraints.'
      }
    ]
  },
  {
    title: 'Noun-pronoun disagreement',
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
    description: `
      A pronoun must have the same gender and number as the subject.
      When the gender isn't clear, don't use 'their' and avoid Using
      only one of the gendered pronouns (e.g. her). Instead, get
      creative with how you construct the sentence. When the subject
      of a sentence is a singluar pronoun such as either, neither,
      each, or every, other nouns accompanying it may have no effect
      on the number of the verb.
    `,
    examples: [
      {
        incorrect: 'A shareholder may cast their vote for only one member of the board',
        correct: 'A shareholder may cast his or her vote for only one member of the board'
      },
      {
        incorrect: `Either the receptionist or the sales assistant will have to
        change their lunch hour so that at least one will be in the office at all times`,
        correct: `Either the receptionist or the sales assistant will have to start
        taking lunch earlier or later so that at least one will be in the office at all times.`
      },
      {
        incorrect: 'Have either of our clients arrived yet?',
        correct: 'Has either of our clients arrived yet?'
      }
    ]
  },
  {
    title: 'Double negatives',
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
    description: `
      Only use double negatives when you mean to negate the first one.
      It is incorrect to use two negatives in order to intensify them.
      An example that is tricky is not ... but
    `,
    examples: [
      {
        incorrect: `We couldn't scarcely manage to keep up with the demand.`,
        correct: `We could scarcely manage to keep up with the demand.`
      },
      {
        incorrect: `The clerk couldn't help but call the manager for advice.`,
        correct: `The clerk couldn't help calling the manager for advice.`
      }
    ]
  },
  {
    title: 'Nonstandard vocabulary',
    category: CATEGORY.CORRECT_GRAMMAR_BASICS,
    description: `
      Always use standard english, not dialect.
    `,
    examples: [
      {
        incorrect: `Where's the meeting at?`,
        correct: `Where's the meeting?`
      },
      {
        incorrect: `Me and Kim will handle the Brewster account.`,
        correct: `Kim and I will handle the Brewster account.`
      },
      {
        incorrect: `They shouldn't of submitted those incomplete reports`,
        correct: `They shouldn't have submitted those incomplete reports`
      }
    ]
  },
  {
    title: 'Use pronouns skillfully',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      Don't overuse I, lean heavily on we, our, you, and your. Write
      directly to you, the person you're trying to reach.
    `,
    examples: [
      {
        incorrect: 'This applies to citizens over 65',
        correct: `If you're over 65, this applies to you.`
      }
    ]
  },
  {
    title: 'Use contractions',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      It isn't incorrect to use contractions. But don't overuse them.
      If you would say something as a contraction, write it that way.
      If not, don't.
    `,
    examples: [
      {
        incorrect: 'We will inform all winners by telephone',
        correct: `We'll call you if you win`
      }
    ]
  },
  {
    title: 'Avoid passive voice',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      Avoid passive voice. Sometimes it is the most natural way or
      can't be avoided. This helps avoid convoluted sentences.
    `,
    examples: [
      {
        incorrect: `The closing documents were prepared by Sue`,
        correct: `Sue prepared the closing documents`
      }
    ]
  },
  {
    title: 'Vary the length and structure of your sentences',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      Monotony creates boredom. Vary the length and structure of sentences.
    `
  },
  {
    title: 'Avoid alphabet soup',
    category: CATEGORY.DONT_ANESTHETIZE_YOUR_READERS,
    description: `
      Acroynyms are tiresome, especially when readers aren't familiar with them.
      They cause readers to search for the definition, breaking the flow of the
      writing. Stick to words whn you can.
    `
  },
  {
    title: 'You can start a sencence with And or But',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      And and But are very effective transitions, much better than
      words like Additionally and However.
    `
  },
  {
    title: 'You can end a sentence with a preposiition',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      Ending sentences with prepositions often feels far more natural,
      and there is nothing wrong with it. The only drawback is that it
      is not a natural way to end a sentence.
    `
  },
  {
    title: 'Good vs Well',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      When describing performance, manner, action, etc., use Well.
      Using Good in the place of Well is ungrammatical. There are only
      a few set phrases where you can use Good as an adverb.
    `,
    examples: [
      {
        correct: 'The intern works well under pressure',
        incorrect: 'The intern works good under pressure'
      },
      {
        correct: 'A good many more'
      }
    ]
  },
  {
    title: 'The subject of the sentence determines the number of the verb',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      A subject and its verb must both be either singular or plural.
      Prepositional prhases modifying the subject can cause confustion.
      Using There as a subject stand in also causes confusion, as the true
      subject in this case always follows the verb.
    `,
    examples: [
      {
        correct: `The company's bread and butter is still shipping`,
        incorrect: `The company's bread and butter are still shipping`
      },
      {
        correct: `There go our fourth quarter profits`,
        incorrect: `There goes our fourth quarter profits`
      }
    ]
  },
  {
    title: 'Both either and neither as subjects take singular verbs',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      Don't be distracted by prepositional phrases containing plural
      objects. The subject (either or neither) is still singular.
    `,
    examples: [
      {
        correct: `Either of the marketing plans involves capital investment`,
        incorrect: `Either of the marketing plans involve capital investment`
      }
    ]
  },
  {
    title: 'With neither/nor and either/or, the second element controls the number of the verb',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      When either/or, neither/nor is in the subject position, the second element
      controls the plurality of the verb.
    `,
    examples: [
      {
        correct: `Neither the regional managers nor the vice president for sales
        likes the proposed campaign's theme.`,
        incorrect: `Neither the regional managers nor the vice president for sales
        like the proposed campaign's theme.`
      }
    ]
  },
  {
    title: 'Flat adverbs take no -ly ending',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      Some adverbs don't take an -ly ending.
    `,
    examples: [
      {
        correct: 'doubtless',
        incorrect: 'doubtlessly'
      },
      {
        correct: 'thus',
        incorrect: 'thusly'
      }
    ]
  },
  {
    title: 'However, Therefore, and Otherwise require additional punctuation with independent clauses',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      When using However, Therefore, and Otherwise to join two independent clauses,
      they must be preceeded by a semicolon and followed by a comma.
    `,
    examples: [
      {
        correct: `Mr. Bingham can't attend the meeting; however, he hopes to call
        before we adjourn.`
      }
    ]
  },
  {
    title: 'In verb phrases, adverbs usually follow the first auxiliary verb',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      Midphrase is the strongest and most natural place for an adverb. It isn't
      ungrammatical to split an infinitive.
    `,
    examples: [
      {
        correct: `Industry experts have long agreed`,
        incorrect: `Industry experts have agreed long on the product's effectiveness`
      },
      {
        correct: `It has long been assumed`
      }
    ]
  },
  {
    title: 'Relative pronouns must appear next to their antecedents',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      The relative pronouns, (e.g. That, Which, Who, and Whom), either
      link a dependent clause to ain independent one, or join a clause to
      it's antecedent. The second usage requires that the relative pronoun
      appear close to it's antecedent for clarity.
    `,
    examples: [
      {
        correct: `Please discuss the customer-service position that is being
        eliminated in the accounting department.`,
        incorrect: `Please discuss the customer-service position in the accounting
        department that is being eliminated.`
      }
    ]
  },
  {
    title: 'Commas and appositives',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      An appositive is a noun or phrase that follows another noun provides additional
      identifying details. They may or may not be essential to the sentence. When they
      are essential, they are not set off by commas. When they are not essential, they
      are set off by commas.
    `,
    examples: [
      {
        correct: `My colleague Pat agrees`
      },
      {
        correct: `The customer, a tall man in an oversized suit, left his keys
        on the counter.`
      }
    ]
  },
  {
    title: 'Correlative conjunctions require parallel phrasing',
    category: CATEGORY.MUST_KNOW_GRAMMAR_RULES,
    description: `
      Correlative conjunctions work in pairs. The constructions
      they join must match in syntax.
    `,
    examples: [
      {
        correct: `We raised not only our regional market share, but also our
        profit margin.`,
        incorrect: `We not only raised our regional market share but also
        our profit margin.`
      }
    ]
  }
]