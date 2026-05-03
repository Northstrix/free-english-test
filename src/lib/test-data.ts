
export type QuestionType = "single" | "multiple" | "boolean" | "info";

export interface QuestionOption {
  value: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  subtext?: string;
  sectiontext?: string;
  image?: string;
  imageBgColor?: string;
  audio?: string;
  options?: QuestionOption[];
  correctValues?: string[];
}

export type TestLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'UpperB2LowerC1' | 'C1' | 'C2';

export const LEVELS: TestLevel[] = ['A1', 'A2', 'B1', 'B2', 'UpperB2LowerC1', 'C1', 'C2'];

export const LEVEL_LABELS: Record<TestLevel, string> = {
  A1: 'A1 (Beginner)',
  A2: 'A2 (Elementary)',
  B1: 'B1 (Intermediate)',
  B2: 'B2 (Upper Intermediate)',
  UpperB2LowerC1: 'Upper B2-Lower C1',
  C1: 'C1 (Advanced)',
  C2: 'Mastery (C2)',
};

export const PASS_THRESHOLDS: Record<TestLevel, number> = {
  A1: 14,
  A2: 14,
  B1: 15,
  B2: 16,
  UpperB2LowerC1: 16, // Upper B2-Lower C1
  C1: 8.15,
  C2: 8.25,
};

export const TEST_QUESTIONS: Record<TestLevel, Question[]> = {
  A1: [
    {
      id: 'a1-1',
      type: 'single',
      text: 'Match the picture to the word.',
      image: '/cat.webp',
      subtext: 'Look at the picture below and choose the word that matches it.',
      options: [{ value: 'a', text: 'Cat' },
      { value: 'b', text: 'Dog' },
      { value: 'c', text: 'Horse' },
      { value: 'd', text: 'Rat' }],
      correctValues: ['a']
    },
    {
      id: 'a1-2',
      type: 'single',
      text: 'Match the picture to the word.',
      image: '/dog.webp',
      subtext: 'Look at the picture below and choose the word that matches it.',
      options: [{ value: 'a', text: 'Dog' },
      { value: 'b', text: 'Cat' },
      { value: 'c', text: 'Doctor' },
      { value: 'd', text: 'Eagle' }],
      correctValues: ['a']
    },
    {
      id: 'a1-3',
      type: 'single',
      text: 'Match the picture to the word.',
      image: '/apple.webp',
      subtext: 'Look at the picture below and choose the word that matches it.',
      options: [{ value: 'a', text: 'Apple' },
      { value: 'b', text: 'Banana' },
      { value: 'c', text: 'Lime' },
      { value: 'd', text: 'Orange' }],
      correctValues: ['a']
    },
    {
      id: 'a1-4',
      type: 'single',
      text: 'Match the picture to the word.',
      image: '/carrot.webp',
      subtext: 'Look at the picture below and choose the word that matches it.',
      options: [{ value: 'a', text: 'Carrot' },
      { value: 'b', text: 'Corn' },
      { value: 'c', text: 'Pineapple' },
      { value: 'd', text: 'Cucumber' }],
      correctValues: ['a']
    },
    {
      id: 'a1-5',
      type: 'single',
      text: 'My name ___ John.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'is' },
      { value: 'b', text: 'are' },
      { value: 'c', text: 'you' },
      { value: 'd', text: 'he' }],
      correctValues: ['a']
    },
    {
      id: 'a1-6',
      type: 'single',
      text: 'The sky ___ blue.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'is' },
      { value: 'b', text: 'are' },
      { value: 'c', text: 'am' },
      { value: 'd', text: 'an' }],
      correctValues: ['a']
    },
    {
      id: 'a1-7',
      type: 'single',
      text: 'I ___ happy.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'am' },
      { value: 'b', text: 'is' },
      { value: 'c', text: 'are' },
      { value: 'd', text: 'been' }],
      correctValues: ['a']
    },
    {
      id: 'a1-8',
      type: 'single',
      text: 'Those trees ___ tall.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'are' },
      { value: 'b', text: 'is' },
      { value: 'c', text: 'a' },
      { value: 'd', text: 'an' }],
      correctValues: ['a']
    },
    {
      id: 'a1-9',
      type: 'single',
      text: 'He ___ my brother.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'is' },
      { value: 'b', text: 'are' },
      { value: 'c', text: 'did' },
      { value: 'd', text: 'does' }],
      correctValues: ['a']
    },
    {
      id: 'a1-10',
      type: 'single',
      text: 'The books ___ new.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'are' },
      { value: 'b', text: 'is' },
      { value: 'c', text: 'am' },
      { value: 'd', text: 'my' }],
      correctValues: ['a']
    },
    {
      id: 'a1-11',
      type: 'single',
      text: 'This ___ my book.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'is' },
      { value: 'b', text: 'are' },
      { value: 'c', text: 'am' },
      { value: 'd', text: 'do' }],
      correctValues: ['a']
    },
    {
      id: 'a1-12',
      type: 'single',
      text: '___ you like cherries?',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'Do' },
      { value: 'b', text: 'She' },
      { value: 'c', text: 'Are' },
      { value: 'd', text: 'Is' }],
      correctValues: ['a']
    },
    {
      id: 'a1-13',
      type: 'single',
      text: 'Where ___ you from?',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'are' },
      { value: 'b', text: 'make' },
      { value: 'c', text: 'am' },
      { value: 'd', text: 'made' }],
      correctValues: ['a']
    },
    {
      id: 'a1-14',
      type: 'single',
      text: 'I live ___ a house.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'in' },
      { value: 'b', text: 'is' },
      { value: 'c', text: 'am' },
      { value: 'd', text: 'do' }],
      correctValues: ['a']
    },
    {
      id: 'a1-15',
      type: 'single',
      text: 'Her dog ___ carry the stick.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'can' },
      { value: 'b', text: 'are' },
      { value: 'c', text: 'is' },
      { value: 'd', text: 'was' }],
      correctValues: ['a']
    },
    {
      id: 'a1-16',
      type: 'single',
      text: 'I ___ like snow.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'don\'t' },
      { value: 'b', text: 'not' },
      { value: 'c', text: 'they\'re' },
      { value: 'd', text: 'is' }],
      correctValues: ['a']
    },
    {
      id: 'a1-17',
      type: 'single',
      text: 'Their parrot ___ old.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'is' },
      { value: 'b', text: 'are' },
      { value: 'c', text: 'make' },
      { value: 'd', text: 'did' }],
      correctValues: ['a']
    },
    {
      id: 'a1-18',
      type: 'single',
      text: 'Look at ___ giraffes!',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'the' },
      { value: 'b', text: 'when' },
      { value: 'c', text: 'where' },
      { value: 'd', text: 'a' }],
      correctValues: ['a']
    },
    {
      id: 'a1-19',
      type: 'single',
      text: 'I\'m ___ Florida.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'from' },
      { value: 'b', text: 'is' },
      { value: 'c', text: 'made' },
      { value: 'd', text: 'do' }],
      correctValues: ['a']
    },
    {
      id: 'a1-20',
      type: 'single',
      text: 'I have a cat, my neighbor has two ___.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'cats' },
      { value: 'b', text: 'cat' },
      { value: 'c', text: 'cet' },
      { value: 'd', text: 'ceet' }],
      correctValues: ['a']
    }],
  A2: [
    {
      id: 'a2-1',
      type: 'single',
      text: 'His father ___ this building.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'owns' },
      { value: 'b', text: 'have' },
      { value: 'c', text: 'does' },
      { value: 'd', text: 'buy' }],
      correctValues: ['a']
    },
    {
      id: 'a2-2',
      type: 'single',
      text: 'Rocky Mountains ___ me of Swiss Alps.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'remind' },
      { value: 'b', text: 'tall' },
      { value: 'c', text: 'high' },
      { value: 'd', text: 'snow' }],
      correctValues: ['a']
    },
    {
      id: 'a2-3',
      type: 'single',
      text: 'Look how ___ cows are in the pasture!',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'many' },
      { value: 'b', text: 'much' },
      { value: 'c', text: 'a lot' },
      { value: 'd', text: 'some' }],
      correctValues: ['a']
    },
    {
      id: 'a2-4',
      type: 'single',
      text: 'The recipe of that cheese ___ to Wisconsin from Switzerland.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'came' },
      { value: 'b', text: 'brought' },
      { value: 'c', text: 'arrive' },
      { value: 'd', text: 'moved' }],
      correctValues: ['a']
    },
    {
      id: 'a2-5',
      type: 'single',
      text: '___ the cake in the oven for 30 minutes.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'Bake' },
      { value: 'b', text: 'Boil' },
      { value: 'c', text: 'Mix' },
      { value: 'd', text: 'Cut' }],
      correctValues: ['a']
    },
    {
      id: 'a2-6',
      type: 'single',
      text: 'She ___ Louisiana last summer.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'went to' },
      { value: 'b', text: 'go to' },
      { value: 'c', text: 'gone' },
      { value: 'd', text: 'going' }],
      correctValues: ['a']
    },
    {
      id: 'a2-7',
      type: 'single',
      text: 'There isn\'t ___ fuel left.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'much' },
      { value: 'b', text: 'some' },
      { value: 'c', text: 'many' },
      { value: 'd', text: 'less' }],
      correctValues: ['a']
    },
    {
      id: 'a2-8',
      type: 'single',
      text: 'The flight from Buenos Aires to Miami ___ about 9 hours 20 minutes.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'takes' },
      { value: 'b', text: 'take' },
      { value: 'c', text: 'flies' },
      { value: 'd', text: 'fly' }],
      correctValues: ['a']
    },
    {
      id: 'a2-9',
      type: 'single',
      text: 'Give ___ the book, please.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'me' },
      { value: 'b', text: 'my' },
      { value: 'c', text: 'mine' },
      { value: 'd', text: 'I' }],
      correctValues: ['a']
    },
    {
      id: 'a2-10',
      type: 'single',
      text: '___ in Atlanta in an hour.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: "I'll be" },
      { value: 'b', text: 'come' },
      { value: 'c', text: 'get' },
      { value: 'd', text: "I'll go" }],
      correctValues: ['a']
    },
    {
      id: 'a2-11',
      type: 'single',
      text: 'This restaurant is ___ than the one downtown.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: "better" },
      { value: 'b', text: 'good' },
      { value: 'c', text: 'gooder' },
      { value: 'd', text: "best" }],
      correctValues: ['a']
    },
    {
      id: 'a2-12',
      type: 'single',
      text: 'I\'m ___ to Fort Worth tomorrow.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'going' },
      { value: 'b', text: 'went' },
      { value: 'c', text: 'goes' },
      { value: 'd', text: 'go' }],
      correctValues: ['a']
    },
    {
      id: 'a2-13',
      type: 'single',
      text: 'This is David. He\'s my ___.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: "uncle" },
      { value: 'b', text: 'aunt' },
      { value: 'c', text: 'sister' },
      { value: 'd', text: "name" }],
      correctValues: ['a']
    },
    {
      id: 'a2-14',
      type: 'single',
      text: 'Is this ___ suitcase?',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'your' },
      { value: 'b', text: 'you' },
      { value: 'c', text: 'is you' },
      { value: 'd', text: 'you\'s' }],
      correctValues: ['a']
    },
    {
      id: 'a2-15',
      type: 'single',
      text: 'This car is ___ expensive than that one.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'less' },
      { value: 'b', text: 'faster' },
      { value: 'c', text: 'cheaper' },
      { value: 'd', text: 'bigger' }],
      correctValues: ['a']
    },
    {
      id: 'a2-16',
      type: 'single',
      text: 'I\'ve been living here ___ 10 years.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'for' },
        { value: 'b', text: 'since' },
        { value: 'c', text: 'from' },
        { value: 'd', text: 'in' }
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-17',
      type: 'single',
      text: '___ any milk in the fridge?',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'Is there' },
        { value: 'b', text: 'There is' },
        { value: 'c', text: 'There\'s' },
        { value: 'd', text: 'Are there' }
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-18',
      type: 'single',
      text: 'Where ___ you yesterday?',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'were' },
        { value: 'b', text: 'was' },
        { value: 'c', text: 'is' },
        { value: 'd', text: 'are' }
      ],
      correctValues: ['a']
    },
    {
      id: 'a2-19',
      type: 'single',
      text: 'His older sister is ___ than him.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'taller' },
      { value: 'b', text: 'tall' },
      { value: 'c', text: 'high' },
      { value: 'd', text: 'higher' }],
      correctValues: ['a']
    },
    {
      id: 'a2-20',
      type: 'single',
      text: 'This phone isn\'t ___ the one next to it.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [
        { value: 'a', text: 'as good as' },
        { value: 'b', text: 'good as' },
        { value: 'c', text: 'is good as' },
        { value: 'd', text: 'good is as' }
      ],
      correctValues: ['a']
    }
  ],
  B1: [{
    id: 'b1-1',
    type: 'single',
    text: 'Midland is ___ to Odessa.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'close' },
    { value: 'b', text: 'distant' },
    { value: 'c', text: 'far' },
    { value: 'd', text: 'nearly' }],
    correctValues: ['a']
  },
  {
    id: 'b1-2',
    type: 'single',
    text: '___ nature is beautiful.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'Montana\'s' },
    { value: 'b', text: 'Montana is' },
    { value: 'c', text: 'Montana' },
    { value: 'd', text: 'Is Montana' }],
    correctValues: ['a']
  },
  {
    id: 'b1-3',
    type: 'single',
    text: 'Cyprus isn\'t very ___ from Israel.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'far' },
    { value: 'b', text: 'close' },
    { value: 'c', text: 'late' },
    { value: 'd', text: 'tall' }],
    correctValues: ['a']
  },
  {
    id: 'b1-4',
    type: 'single',
    text: 'He ___ me he\'d be there tomorrow.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'told' },
    { value: 'b', text: 'said' },
    { value: 'c', text: 'say' },
    { value: 'd', text: 'lied' }],
    correctValues: ['a']
  },
  {
    id: 'b1-5',
    type: 'single',
    text: 'El Paso is the city ___ the border ___ Mexico.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'on / with' },
    { value: 'b', text: 'in / of' },
    { value: 'c', text: 'at / for' },
    { value: 'd', text: 'of / in' }],
    correctValues: ['a']
  },
  {
    id: 'b1-6',
    type: 'single',
    text: 'This box is ___ heavy for her to carry.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'too' },
    { value: 'b', text: 'very' },
    { value: 'c', text: 'so' },
    { value: 'd', text: 'enough' }],
    correctValues: ['a']
  },
  {
    id: 'b1-7',
    type: 'single',
    text: "I'm ___ California next week.",
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'leaving' },
    { value: 'b', text: 'left' },
    { value: 'c', text: 'leave' },
    { value: 'd', text: 'leaves' }],
    correctValues: ['a']
  },
  {
    id: 'b1-8',
    type: 'single',
    text: 'The conference was ___ due to bad weather.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'called off' },
    { value: 'b', text: 'called out' },
    { value: 'c', text: 'called up' },
    { value: 'd', text: 'called on' }],
    correctValues: ['a']
  },
  {
    id: 'b1-9',
    type: 'single',
    text: 'He promised he would ___ who stole the money.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [
      { value: 'a', text: 'find out' },
      { value: 'b', text: 'get out' },
      { value: 'c', text: 'put out' },
      { value: 'd', text: 'sort out' }
    ],
    correctValues: ['a']
  },
  {
    id: 'b1-10',
    type: 'single',
    text: 'The flood mitigation system was damaged ___ the storm.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'during' },
    { value: 'b', text: 'about' },
    { value: 'c', text: 'for' },
    { value: 'd', text: 'in' }],
    correctValues: ['a']
  },
  {
    id: 'b1-11',
    type: 'single',
    text: 'Japan has ___ 200 volcanoes.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'over' },
    { value: 'b', text: 'many' },
    { value: 'c', text: 'much' },
    { value: 'd', text: 'more' }],
    correctValues: ['a']
  },
  {
    id: 'b1-12',
    type: 'single',
    text: 'Wait here _ the bus arrives.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'until' },
    { value: 'b', text: 'after' },
    { value: 'c', text: 'before' },
    { value: 'd', text: 'during' }],
    correctValues: ['a']
  },
  {
    id: 'b1-13',
    type: 'single',
    text: 'We were talking ___ waiting for the taxi to arrive.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'while' },
    { value: 'b', text: 'when' },
    { value: 'c', text: 'after' },
    { value: 'd', text: 'during' }],
    correctValues: ['a']
  },
  {
    id: 'b1-14',
    type: 'single',
    text: 'The book was so interesting that I couldn\'t ___ .',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'put it down' },
    { value: 'b', text: 'put down it' },
    { value: 'c', text: 'put it off' },
    { value: 'd', text: 'put off it' }],
    correctValues: ['a']
  },
  {
    id: 'b1-15',
    type: 'single',
    text: 'The game continued ___ the bad weather',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'despite' },
    { value: 'b', text: 'because' },
    { value: 'c', text: 'instead' },
    { value: 'd', text: 'for' }],
    correctValues: ['a']
  },
  {
    id: 'b1-16',
    type: 'single',
    text: 'The parents allowed their kids to eat everything ___ sweets.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [
      { value: 'a', text: 'except for' }, 
      { value: 'b', text: 'without the' },
      { value: 'c', text: 'because of' },
      { value: 'd', text: 'despite the' }
    ],
    correctValues: ['a']
  },
  {
    id: 'b1-17',
    type: 'single',
    text: 'The ___ for that disease hasn\'t been found yet.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'cure' },
    { value: 'b', text: 'answer' },
    { value: 'c', text: 'solution' },
    { value: 'd', text: 'fix' }],
    correctValues: ['a']
  },
  {
    id: 'b1-18',
    type: 'single',
    text: 'The Mediterranean region experiences ___ dry summers that put a lot of pressure on water resources.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'prolonged' },
    { value: 'b', text: 'long' },
    { value: 'c', text: 'heat' },
    { value: 'd', text: 'persistent' }],
    correctValues: ['a']
  },
  {
    id: 'b1-19',
    type: 'single',
    text: 'Penguins ___ in Africa for thousands of years.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'have lived' },
    { value: 'b', text: 'live' },
    { value: 'c', text: 'lived' },
    { value: 'd', text: 'lives' }],
    correctValues: ['a']
  },
  {
    id: 'b1-20',
    type: 'single',
    text: 'Roughly a third of Italy is ___ by forests.',
    subtext: 'Pick the correct option to complete the sentence.',
    options: [{ value: 'a', text: 'covered' },
    { value: 'b', text: 'filled' },
    { value: 'c', text: 'inhabited' },
    { value: 'd', text: 'populated' }],
    correctValues: ['a']
  }],
  B2: [
    {
      id: 'b2-text',
      type: 'info',
      text: 'Reading Comprehension: The History of Strawberries',
      subtext: 'Read the text below, then answer the following questions.',
      sectiontext: `Since the early 1600s, Europeans enjoyed small <i>Fragaria virginiana</i> strawberries brought from North America. They were praised for having a superior taste and better cold resistance compared to the native species but were small and produced modest yields, making their large-scale cultivation difficult.<br/><br/>At the same time, a different variety of strawberry with large fruit grew along the Pacific coastline of the Americas. It was called <i>Fragaria chiloensis</i>, and although it looked very appealing, its fruit wasn't particularly palatable, lacking the sweetness that Europeans had become accustomed to.<br/><br/>In 1714, French explorer Amédée-François Frézier smuggled five <i>F. chiloensis</i> plants out of Chile. Only one survived the long sea voyage to France and was planted in the royal gardens of Versailles. By the 1730s, that variety spread to England, the Netherlands, and Italy through sharing networks among botanists, royal gardeners, nursery owners.<br/><br/>Between 1750 and 1765, in the French region of Brittany, natural cross-pollination occurred between male <i>F. virginiana</i> and female <i>F. chiloensis</i> plants. The result was a fertile hybrid species that combined the best features of both varieties. Once its commercial potential became evident, the new strawberry rapidly spread across Europe and later reached North America.<br/><br/>By the nineteenth century, it had become the strawberry we know today—meticulously refined by generations of farmers and cherished around the world.`
    },
    {
      id: 'b2-1',
      type: 'single',
      text: 'How was <i>Fragaria virginiana</i> different from the native European strawberries?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'It had a superior taste and better resistance to cold.' },
      { value: 'b', text: 'It had an inferior taste but better resistance to cold.' },
      { value: 'c', text: 'It had an inferior taste and worse resistance to cold.' },
      { value: 'd', text: 'It had lower gluten levels than the native European species but was harder to cook.' }],
      correctValues: ['a']
    },
    {
      id: 'b2-2',
      type: 'single',
      text: 'What was attractive about <i>Fragaria chiloensis</i>, and what was disappointing about it?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'The fruit was large and looked appealing, but it wasn\'t very sweet.' },
      { value: 'b', text: 'It was very tasty, but its berries were extremely small.' },
      { value: 'c', text: 'It had a renowned taste but couldn\'t survive the cold European climate.' },
      { value: 'd', text: 'It had a pleasant mango scent but couldn\'t grow in Europe because of its cold climate.' }],
      correctValues: ['a']
    },
    {
      id: 'b2-3',
      type: 'single',
      text: 'How many <i>Fragaria chiloensis</i> plants did Frézier take from Chile, and how many survived?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'He took five plants, and only one survived.' },
      { value: 'b', text: 'He took five plants, and all of them survived.' },
      { value: 'c', text: 'He took one plant, and it didn\'t survive.' },
      { value: 'd', text: 'He brought a ship full of plants, and most of them survived.' }],
      correctValues: ['a']
    },
    {
      id: 'b2-4',
      type: 'single',
      text: 'From which country did Frézier bring the <i>Fragaria chiloensis</i> to Europe?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'Chile' },
      { value: 'b', text: 'France' },
      { value: 'c', text: 'Ghana' },
      { value: 'd', text: 'India' }],
      correctValues: ['a']
    },
    {
      id: 'b2-5',
      type: 'single',
      text: 'Which European country did Frézier bring the <i>Fragaria chiloensis</i> plants to?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'France' },
      { value: 'b', text: 'Spain' },
      { value: 'c', text: 'Italy' },
      { value: 'd', text: 'Portugal' }],
      correctValues: ['a']
    },
    {
      id: 'b2-6',
      type: 'single',
      text: 'How did <i>Fragaria chiloensis</i> spread to other European countries by the 1730s?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'By being shared via networks of botanists, royal gardeners, and nursery owners.' },
      { value: 'b', text: 'By being taken by Frézier himself on later expeditions around Europe.' },
      { value: 'c', text: 'By being planted by sailors in every port where the ship carrying the plants stopped.' },
      { value: 'd', text: 'By being grown on a large scale in several European countries and sold in local markets.' }],
      correctValues: ['a']
    },
    {
      id: 'b2-7',
      type: 'single',
      text: 'In which country did the natural cross-pollination of the two strawberry species take place between 1750 and 1765?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'France' },
      { value: 'b', text: 'Britain' },
      { value: 'c', text: 'Netherlands' },
      { value: 'd', text: 'Italy' }],
      correctValues: ['a']
    },
    {
      id: 'b2-8',
      type: 'single',
      text: 'What was the result of the natural cross-pollination between <i>F. virginiana</i> and <i>F. chiloensis</i>?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'A fertile hybrid species that combined the best features of both varieties.' },
      { value: 'b', text: 'A sterile hybrid that couldn\'t produce any fruit.' },
      { value: 'c', text: 'A new species that was smaller and less tasty than both parents.' },
      { value: 'd', text: 'A wild species that disappeared after a few years.' }],
      correctValues: ['a']
    },
    {
      id: 'b2-9',
      type: 'single',
      text: 'Why did the new hybrid strawberry spread rapidly across Europe?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'Because people realized it could be very profitable to grow.' },
      { value: 'b', text: 'Because it was gifted to every European family by the Habsburgs.' },
      { value: 'c', text: 'Because it was the only fruit that could survive European winters.' },
      { value: 'd', text: 'Because it had a unique taste resembling that of a hot chili pepper.' }],
      correctValues: ['a']
    },
    {
      id: 'b2-10',
      type: 'single',
      text: 'How does the text describe the new strawberry by the nineteenth century?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'As the strawberry we know today, refined by generations of farmers.' },
      { value: 'b', text: 'As a rare plant that almost nobody grew anymore.' },
      { value: 'c', text: 'As a wild fruit found only in remote forests.' },
      { value: 'd', text: 'As a decorative hybrid that produced only flowers and no fruit.' }],
      correctValues: ['a']
    },
    {
      id: 'b2-11',
      type: 'single',
      text: 'Seeds which ___ properly rarely germinate well.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'aren\'t stored' },
      { value: 'b', text: 'didn\'t store' },
      { value: 'c', text: 'haven\'t stored' },
      { value: 'd', text: 'not storing' }],
      correctValues: ['a']
    },
    {
      id: 'b2-12',
      type: 'single',
      text: 'He denied ___ the documents, but the evidence said otherwise.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'taking' },
      { value: 'b', text: 'take' },
      { value: 'c', text: 'to take' },
      { value: 'd', text: 'to taking' }],
      correctValues: ['a']
    },
    {
      id: 'b2-13',
      type: 'single',
      text: 'It was the hybrid\'s taste ___ made it popular.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'that' },
      { value: 'b', text: 'which' },
      { value: 'c', text: 'what' },
      { value: 'd', text: 'who' }],
      correctValues: ['a']
    },
    {
      id: 'b2-14',
      type: 'single',
      text: 'The seeds need ___ in a warm place.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'to be kept' },
      { value: 'b', text: 'being kept' },
      { value: 'c', text: 'to keep' },
      { value: 'd', text: 'kept' }],
      correctValues: ['a']
    },
    {
      id: 'b2-15',
      type: 'single',
      text: 'Plants ___ cold climates were prized by explorers.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'that could tolerate' },
      { value: 'b', text: 'that can tolerate' },
      { value: 'c', text: 'could tolerate' },
      { value: 'd', text: 'tolerated' }],
      correctValues: ['a']
    },
    {
      id: 'b2-16',
      type: 'single',
      text: 'By the time they arrived, the bank owner ___ for the airport.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'had already left' },
      { value: 'b', text: 'already leaves' },
      { value: 'c', text: 'has already left' },
      { value: 'd', text: 'left already' }],
      correctValues: ['a']
    },
    {
      id: 'b2-17',
      type: 'single',
      text: 'He\'s believed ___ won the competition twice already.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'to have' },
      { value: 'b', text: 'to have been' },
      { value: 'c', text: 'to have had' },
      { value: 'd', text: 'to has' }],
      correctValues: ['a']
    },
    {
      id: 'b2-18',
      type: 'single',
      text: 'She suggested that I ___ early to avoid the traffic.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'leave' },
      { value: 'b', text: 'left' },
      { value: 'c', text: 'should leaving' },
      { value: 'd', text: 'had left' }],
      correctValues: ['a']
    },
    {
      id: 'b2-19',
      type: 'single',
      text: 'The manager insists that every trainee ___ present at the meeting.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'be' },
      { value: 'b', text: 'is' },
      { value: 'c', text: 'will be' },
      { value: 'd', text: 'being' }],
      correctValues: ['a']
    },
    {
      id: 'b2-20',
      type: 'single',
      text: 'Had the temperature dropped further, all the seedlings ___.',
      subtext: 'Pick the correct option to complete the sentence.',
      options: [{ value: 'a', text: 'would\'ve died' },
      { value: 'b', text: 'would died' },
      { value: 'c', text: 'have died' },
      { value: 'd', text: 'will dies' }],
      correctValues: ['a']
    }],
  UpperB2LowerC1: [{
    id: 'upperb2lowerc1-1',
    type: 'single',
    text: 'What categories does the author put powers that rule over men into?',
    subtext: 'Select the correct answer.',
    audio: '/c2-audio.mp3',
    options: [{ value: 'a', text: 'Republics and principalities' },
    { value: 'b', text: 'Monarchies and democracies' },
    { value: 'c', text: 'Empires and kingdoms' },
    { value: 'd', text: 'Democracies and republics' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-2',
    type: 'single',
    text: 'What example of a principality annexed to a hereditary state does the author provide?',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Naples' },
    { value: 'b', text: 'Milan' },
    { value: 'c', text: 'Italy' },
    { value: 'd', text: 'Greece' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-3',
    type: 'single',
    text: 'What does the author say about republics?',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'The author omits discussion of them.' },
    { value: 'b', text: 'The author claims they\'re less enduring than monarchies.' },
    { value: 'c', text: 'The author says they\'re more centralized than democracies.' },
    { value: 'd', text: 'The author finds them impossible to govern properly.' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-4',
    type: 'single',
    text: 'Why does the author claim that hereditary prince tends to be more loved?',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'He has less cause and necessity to offend.' },
    { value: 'b', text: 'He has universal conscription in place.' },
    { value: 'c', text: 'His subjects are accustomed to self-government.' },
    { value: 'd', text: 'His taxes are higher.' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-5',
    type: 'single',
    text: 'Which acquired territories does the author consider easier to hold?',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Those of the same country and language, not accustomed to self-government.' },
    { value: 'b', text: 'Those of the same country and language and accustomed to self-government.' },
    { value: 'c', text: 'Those of different language and customs, not accustomed to self-government.' },
    { value: 'd', text: 'Those of different language and customs and accustomed to self-government.' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-6',
    type: 'single',
    text: 'What does the author say about holding states acquired in a country differing in language, customs, or laws?',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Holding them requires good fortune and great energy.' },
    { value: 'b', text: 'Holding them is easy, especially when they haven\'t been accustomed to self-government.' },
    { value: 'c', text: 'Holding them is impossible even with good fortune and great energy.' },
    { value: 'd', text: 'Holding them is easy, even if they have been accustomed to self-government.' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-7',
    type: 'single',
    text: 'What does the author suggest would be one of the greatest and most real helps for a prince who has acquired a state in a country differing in language, customs, or laws?',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Reside in that territory.' },
    { value: 'b', text: 'Pillage that territory with officials.' },
    { value: 'c', text: 'Avoid being in that territory.' },
    { value: 'd', text: 'Offend everyone in that territory.' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-8',
    type: 'single',
    text: 'What point does the author try to convey regarding taking territory where the prince resides from him?',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'The greatest difficulty is required to seize that territory from the prince.' },
    { value: 'b', text: 'That territory can only be wrested from the prince using foreign mercenaries.' },
    { value: 'c', text: 'That territory is the easiest part of the prince\'s domain to seize.' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-9',
    type: 'single',
    text: 'The marketing agency made the weekend sale sound so enticing that customers started lining up before the store opened. In this context, "enticing" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Attractive' },
    { value: 'b', text: 'Routine' },
    { value: 'c', text: 'Risky' },
    { value: 'd', text: 'Unfair' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-10',
    type: 'single',
    text: 'The podcasters argued that the new legislation infringes on the citizens\' right to free assembly. In this context, "infringes" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Violates' },
    { value: 'b', text: 'Respects' },
    { value: 'c', text: 'Records' },
    { value: 'd', text: 'Expands' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-11',
    type: 'single',
    text: 'The herbal extract showed potent anti-inflammatory properties in clinical trials. In this context, "potent" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Powerful' },
    { value: 'b', text: 'Minor' },
    { value: 'c', text: 'Natural' },
    { value: 'd', text: 'Moderate' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-12',
    type: 'single',
    text: 'The initial mistake led to subsequent problems throughout the project. In this context, "subsequent" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Later' },
    { value: 'b', text: 'Earlier' },
    { value: 'c', text: 'Separate' },
    { value: 'd', text: 'Main' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-13',
    type: 'single',
    text: 'The mayor ordered evacuation when the hurricane became inevitable. In this context, "inevitable" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Unavoidable' },
    { value: 'b', text: 'Distant' },
    { value: 'c', text: 'Weak' },
    { value: 'd', text: 'Slow' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-14',
    type: 'single',
    text: 'The inadequate safety measures led to frequent accidents on the construction site. In this context, "inadequate" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Insufficient' },
    { value: 'b', text: 'Proper' },
    { value: 'c', text: 'Complete' },
    { value: 'd', text: 'Effective' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-15',
    type: 'single',
    text: 'The manager\'s presentation sounded impressive, but the CEO pointed out that his analysis was superficial and lacked supporting evidence. In this context, "superficial" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Shallow' },
    { value: 'b', text: 'Clear' },
    { value: 'c', text: 'Accurate' },
    { value: 'd', text: 'Consistent' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-16',
    type: 'single',
    text: 'The government relented on some of its strict policies after hearing the compelling arguments from representatives of civil society. In this context, "relented" most nearly means:',
    subtext: "Select the correct answer.",
    options: [{ value: 'a', text: 'Conceded' },
    { value: 'b', text: 'Strengthened' },
    { value: 'c', text: 'Introduced' },
    { value: 'd', text: 'Doubled down' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-17',
    type: 'single',
    text: 'The president\'s controversial speech on foreign policy sparked heated public debate. In this context, "controversial" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Divisive' },
    { value: 'b', text: 'Polemical' },
    { value: 'c', text: 'Convoluted' },
    { value: 'd', text: 'Conspicuous' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-18',
    type: 'single',
    text: 'The principal reprimanded the student for brazenly disrupting the basketball game. In this context, "reprimanded" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Criticized' },
    { value: 'b', text: 'Imprisoned' },
    { value: 'c', text: 'Punched' },
    { value: 'd', text: 'Punished' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-19',
    type: 'single',
    text: 'Some economists regard the recent rise in unemployment as a sign of long-term structural problems in the labor market. In this context, "regard" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Consider' },
    { value: 'b', text: 'Ignore' },
    { value: 'c', text: 'Increase' },
    { value: 'd', text: 'Solve' }],
    correctValues: ['a']
  },
  {
    id: 'upperb2lowerc1-20',
    type: 'single',
    text: 'The ambiguity of the defendant\'s response led the jury to abandon the notion of his innocence. In this context, "ambiguity" most nearly means:',
    subtext: 'Select the correct answer.',
    options: [{ value: 'a', text: 'Vagueness' },
    { value: 'b', text: 'Clarity' },
    { value: 'c', text: 'Certainty' },
    { value: 'd', text: 'Honesty' }],
    correctValues: ['a']
  },],
  C1: [
    {
      id: 'c1-1',
      type: 'single',
      text: 'The sheriff\'s department has accumulated a substantial body of circumstantial evidence against the suspect. In this context, "accumulated" most nearly means:',
      subtext: 'Select the correct answer.',
      options: [
        { value: 'a', text: 'Gradually gathered over time' },
        { value: 'b', text: 'Accidentally stumbled upon' },
        { value: 'c', text: 'Publicly dismissed as unreliable' },
        { value: 'd', text: 'Initially misinterpreted by investigators' }
      ],
      correctValues: ['a']
    },
    {
      id: 'c1-2',
      type: 'single',
      text: 'CCTV footage corroborates the whistleblower\'s allegations. In this context, "corroborates" most nearly means:',
      subtext: 'Select the correct answer.',
      options: [
        { value: 'a', text: 'Substantiates with supporting evidence' },
        { value: 'b', text: 'Partially questions the validity of' },
        { value: 'c', text: 'Independently initiates an inquiry into' },
        { value: 'd', text: 'Reconstructs after careful analysis' }
      ],
      correctValues: ['a']
    },
    {
      id: 'c1-3',
      type: 'single',
      text: 'The consultant cautioned that any discrepancy between financial reports and audit findings might undermine the company\'s credibility. In this context, "discrepancy" most nearly means:',
      subtext: 'Select the correct answer.',
      options: [
        { value: 'a', text: 'A lack of congruence between two sets of data' },
        { value: 'b', text: 'A deliberate misrepresentation of figures' },
        { value: 'c', text: 'A minor computational oversight' },
        { value: 'd', text: 'A justified adjustment based on new evidence' }
      ],
      correctValues: ['a']
    },
    {
      id: 'c1-4',
      type: 'single',
      text: 'The entrepreneur\'s audacity enabled him to succeed in a low-profit-margin industry. In this context, "audacity" most nearly means:',
      subtext: 'Select the correct answer.',
      options: [
        { value: 'a', text: 'A bold and confident disregard for conventional constraints' },
        { value: 'b', text: 'A careful and meticulous avoidance of unnecessary financial risk' },
        { value: 'c', text: 'An arrogant and unprovoked challenge to existing authority' },
        { value: 'd', text: 'A slow and systematic approach to problem-solving' }
      ],
      correctValues: ['a']
    },
    {
      id: 'c1-5',
      type: 'single',
      text: 'Although the policy was commended for its foresight, it was criticized for being difficult to implement. In this context, "foresight" most nearly means:',
      subtext: 'Select the correct answer.',
      options: [
        { value: 'a', text: 'Clear understanding of likely future consequences' },
        { value: 'b', text: 'Ability to prepare for potential future challenges' },
        { value: 'c', text: 'Detailed analysis of past policy failures' },
        { value: 'd', text: 'Strict legal mechanisms for enforcement' }
      ],
      correctValues: ['a']
    },
    {
      id: 'c1-6',
      type: 'single',
      text: 'The engineers rejected a lighter composite for the hull, despite its fuel-efficiency benefits, because it failed to withstand micrometeoroid impacts as reliably as the denser alloy. Which of the following best captures the rationale behind their decision?',
      subtext: 'Select the correct answer.',
      options: [
        { value: 'a', text: 'They prioritised structural resilience over operational efficiency.' },
        { value: 'b', text: 'They considered fuel efficiency negligible under most conditions.' },
        { value: 'c', text: 'They aimed to minimise manufacturing complexity.' },
        { value: 'd', text: 'They assumed future materials would resolve current limitations.' }
      ],
      correctValues: ['a']
    },
    {
      id: 'c1-7',
      type: 'single',
      text: 'Security experts emphasized that post-quantum cryptographic algorithms are designed to supersede conventional encryption standards that have served reliably for decades to ensure that cryptographic infrastructure remains secure even in the face of quantum-enabled attacks. Which statements about the text are true?',
      subtext: 'Select two correct options.',
      options: [
        { value: 'a', text: 'Post-quantum algorithms aim to supplant existing encryption methods.' },
        { value: 'b', text: 'The purpose of post-quantum cryptography is to secure cryptographic systems from quantum-powered threats.' },
        { value: 'c', text: 'Conventional encryption standards have never been reliable.' },
        { value: 'd', text: 'Cryptographic infrastructure needs no protection from quantum-enabled attacks.' },
        { value: 'e', text: 'Existing encryption methods currently outperform post-quantum algorithms.' }
      ],
      correctValues: ['a', 'b']
    },
    {
      id: 'c1-8',
      type: 'single',
      text: 'Despite receiving accolades for her technical prowess, the designer encountered significant hurdles in commercializing her new collection: it required the meticulous processing of expensive fine fabrics which couldn\'t be done without highly specialized skills that weren\'t available at scale. Which statements about the text are true?',
      subtext: 'Select three correct options.',
      options: [
        { value: 'a', text: 'The designer was praised for exceptional technical skills.' },
        { value: 'b', text: 'Production required expensive fine fabrics.' },
        { value: 'c', text: 'The skills necessary for commercial production were scarce.' },
        { value: 'd', text: 'The designer was criticized for lack of expertise' },
        { value: 'e', text: 'Production required affordable fine fabrics.' },
        { value: 'f', text: 'The skills necessary for commercial production were expensive.' }
      ],
      correctValues: ['a', 'b', 'c']
    },
    {
      id: 'c1-9',
      type: 'single',
      text: 'Many nuclear power plants use thick concrete walls (3-6 ft) lined with lead sheets or bricks to enhance gamma-ray attenuation, as lead excels at absorbing high-energy photons. Concrete, however, performs better than lead for neutron shielding, with additives like boron increasing its efficiency in that regard even further. Which statements about the text are true?',
      subtext: 'Select three correct options.',
      options: [
        { value: 'a', text: 'The use of lead is primarily justified by its ability to absorb high-energy photons such as gamma radiation.' },
        { value: 'b', text: 'Concrete is a more effective material than lead when it comes to protection from neutrons.' },
        { value: 'c', text: 'Boron is added to concrete to improve its capacity to absorb neutrons.' },
        { value: 'd', text: 'Lead alone is sufficient for both gamma and neutron shielding, and concrete is used mainly as a structural component.' },
        { value: 'e', text: 'Additives like tungsten are mixed into the concrete to increase its ability to absorb neutrons.' },
        { value: 'f', text: 'The 3-6 ft concrete walls are mainly intended to prevent mechanical damage from external impacts, rather than to reduce radiation exposure.' }
      ],
      correctValues: ['a', 'b', 'c']
    },
    {
      id: 'c1-10',
      type: 'single',
      text: 'Addressing the customer\'s concern about the variety\'s suitability for the local climate, the farmer said: "This is a determinate variety of tomato; it\'s so resilient that it can even grow in Alaska, so Vermont\'s summers are more than sufficient for it-perhaps it\'s so used to cold that it might actually confuse Vermont for Texas." Which statements about the farmer\'s reply are true?',
      subtext: 'Select four correct options.',
      options: [
        {
          value: 'a',
          text: 'The farmer is giving the customer reassurance that the variety will do well in Vermont\'s climate.'
        },
        {
          value: 'b',
          text: 'The farmer suggests that Alaska has a more challenging growing environment than Vermont, yet the variety is resilient enough to grow even there.'
        },
        {
          value: 'c',
          text: 'The farmer implies that the variety would find Vermont\'s conditions not merely satisfactory, but effectively superfluous.'
        },
        {
          value: 'd',
          text: 'The farmer uses the contrast between Vermont and Texas to highlight that the variety is so well adapted to cold that it might actually perceive Vermont as a very warm place, almost like Texas.'
        },
        {
          value: 'e',
          text: 'The farmer claims that Vermont\'s summers are too mild and the variety would perform better in Texas.'
        },
        {
          value: 'f',
          text: 'The farmer implies that the variety is poorly adapted to cold climates and may fail in states with cold climates, like Alaska and Vermont, and that it would require a warm climate with plenty of sunlight, such as the Texan one.'
        },
        {
          value: 'g',
          text: 'The farmer argues that the variety must be grown only in warm southern states, such as Texas.'
        },
        {
          value: 'h',
          text: 'The farmer suggests that the variety is unsuitable for short growing seasons and would struggle in Alaska.'
        }
      ],
      correctValues: ['a', 'b', 'c', 'd']
    }
  ],
  C2: [
    {
      id: "c2-task",
      type: "info",
      text: "Advanced Comparative Comprehension",
      subtext: "Read both passages and answer the questions below.",
    },
    {
      id: "c2-text-1",
      type: "info",
      text: "First passage",
      sectiontext: "The purpose of the law wasn't merely to preserve public peace, which the founder perceived to have suffered greatly from daily contention and irreconcilable hearts, but also to protect religion itself. He judged it unwise to decide anything too hastily and thought it indecent and foolish for anyone to threaten or terrify another into believing what didn't seem true to him. For if several forms of worship might share a divine origin, it would be absurd to coerce a particular belief. And if only one religion were truly right, he imagined that the native force of truth would eventually break forth and shine brightly if supported only by reasoned argument and addressed to a calm and unprejudiced mind. But if such debates were carried on with violence, the best doctrine might be buried beneath prejudice, turmoil, and superstition. He therefore left people wholly free to discuss matters of faith among themselves.<br/><br/>Those who, in his view, had so far degenerated from the dignity of human nature as to think that the soul died with the body weren't punished by force, nor were they threatened into dissembling their thoughts so that they wouldn't be tempted to lie or disguise their opinions. Rather, since he despised them as men of base and sordid minds, and believed that such men feared nothing but the laws of the country and wouldn't hesitate to violate them by fraud or force whenever they could satisfy their appetites, he prohibited them from holding honors, public office, or any public trust.",
    },
    {
      id: "c2-text-2",
      type: "info",
      text: "Second passage",
      sectiontext: "He was sent to teach me the language. We sat together for several hours, during which I wrote down a great number of words with their translations. He showed me, in one of his books, the figures of the sun, moon, and stars, the zodiac, the tropics, and the polar circles, together with the names of many planes and solids. He gave me the titles and descriptions of all the musical instruments, and the general terms of art in playing on each of them. Within a few days—aided by a very faithful memory—I gained some insight into their language. The knowledge I had in mathematics gave me great assistance in acquiring their phraseology, which depended much upon that science and music. Their ideas are perpetually conversant in lines and figures: if, for instance, they wish to praise a woman's beauty, they describe it by circles, parallelograms, ellipses, and other geometrical terms, or by words of art drawn from music, needless to repeat here.<br/><br/>Their houses are very ill built, the walls bevel, without one right angle in any apartment; and this defect arises from the contempt they bear toward practical geometry, which they despise as vulgar and mechanic. The instructions they give are too refined for the intellects of their workmen, which causes perpetual mistakes. Though they are dexterous enough upon paper, in the management of the rule, the pencil, and the divider, yet in the common actions and behavior of life, I haven't seen a more clumsy, awkward, and unhandy people, nor so slow and perplexed in their conceptions upon all other subjects, except those of mathematics and music.<br/><br/>They are poor reasoners and vehemently given to opposition, except when they happen to hold the right opinion—a rare occurrence. They are strangers to imagination and fancy, nor have they any words in their language to express such notions. The whole compass of their thought is confined to the two sciences.",
    },
    {
      id: 'c2-1',
      type: 'single',
      text: 'What does the word \"bevel\" in the second text suggest about the construction of their houses, and why does this occur?',
      subtext: 'Select the correct answer.',
      options: [{ value: 'a', text: 'The term "bevel" conveys that the houses were built with slanting walls deviating from right angles, stemming from the people\'s disdain for practical geometry—an irony that exposes their inability to apply in practice the very principles they exalt in theory.' },
      { value: 'b', text: 'The term "bevel" conveys that the houses were constructed with intentional irregularity, resulting from the people\'s wish to express abstract geometry through creative design, showing their success in merging theory with artistic ingenuity.' },
      { value: 'c', text: 'The word "bevel" suggests that the walls lean from deliberate calculation, arising from the people\'s respect for theoretical geometry over manual precision, reflecting their attempt to transform abstract ideals into physical architecture.' },
      { value: 'd', text: 'The term "bevel" suggests that the houses display oblique contours, stemming from the people\'s preference for abstract proportion over structural precision—a distinction that presents their architectural flaws as informed expressions of design rather than signs of incompetence.' },],
      correctValues: ['a']
    },
    {
      id: 'c2-2',
      type: 'single',
      text: 'What is the distinction between the society devised by the founder in the first text and the one described in the second text?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'The founder from the first text envisioned a society with freedom of belief and civil tolerance: although people might be excluded from political office, they retain their civil liberties so long as they behave civilly, even when expressing views the founder considered objectionable. The second text describes a society that is closed-minded and obsessed with mathematics and music, so much so that its language and thinking are shaped by those fields, while it remains impractical and incompetent in other areas, to the point that they don\'t even have houses with the right angles, because they despise the practical application of geometry.' },
      { value: 'b', text: 'The founder from the first text envisioned a society with freedom of belief and civil tolerance: although people might be excluded from political office, they retain their civil liberties so long as they behave civilly, even when expressing views the founder considered objectionable, because he believed that only arguments grounded in religious revelation could reliably lead to correct conclusions about faith. The second text describes a society that is closed-minded and obsessed with mathematics and music, so much so that its language and thinking are shaped by those fields, while it remains impractical and incompetent in other areas, to the point that they don\'t even have houses with the right angles, because they despise the practical application of geometry.' },
      { value: 'c', text: 'The founder from the first text envisioned a society with freedom of belief and civil tolerance: although people might be excluded from political office, they retain their civil liberties so long as they behave civilly, even when expressing views the founder considered objectionable. The second text describes a society that is narrowly focused on mathematics and music, so much so that its language and thinking are shaped by those fields, while its highly creative imagination leads them to build houses with bevelled walls and no right angles, because they can\'t tolerate the gnawing conformity that they associate with right angles.' },
      { value: 'd', text: 'The founder from the first text envisioned a society with freedom of belief and civil tolerance: although people might be prohibited from holding public honors, they retain their civil liberties so long as they behave hastily and superstitiously, even when expressing views the founder considered objectionable. The second text describes a society that, despite admiring mathematics and music, so much so that its language and thinking are shaped by those fields, nevertheless remains highly-advanced and open-minded, to the point that they don\'t even have to argue with each other, as everyone there is so reasonable that they always hold the right opinion.' }],
      correctValues: ['a']
    },
    {
      id: 'c2-3',
      type: 'single',
      text: 'In what way does each text portray limitations on civil liberties and political privileges, and what does this reveal about its contrasting views of character, belief, and ability?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'In the first text, there\'s no curtailment of civil liberties such as freedom of religious belief and discussion, but only of the political privilege of holding public office or public trust. This reflects a view in which belief is a right guided by reason, while political power is a privilege granted only to those judged morally reliable. In the second text, there\'s no explicit limitation on rights or privileges; instead, the text describes a narrow-minded, technocratic society whose thinking is shaped by a limited domain of knowledge, yet whose practical ability in everyday life remains weak and incoherent.' },
      { value: 'b', text: 'In the first text, the limitation is on civil liberties such as freedom of religious belief and discussion, because the founder prohibits any opinion he considers sordid or upsetting to public order. In the second text, the limitation is on the political privilege of holding office, since only those who master advanced mathematics and music are allowed to occupy positions of authority.' },
      { value: 'c', text: 'In the first text, there\'s no limitation on any rights or privileges, because the founder allows full freedom of belief and unrestricted access to public office for everyone, regardless of their moral outlook. In the second text, the limitation is on the right to express ideas outside mathematics and music, since the society bans discussion of anything not grounded in those sciences.' },
      { value: 'd', text: 'In the first text, the limitation is on the right to free expression: those who deny the immortality of the soul are forced into silence by being threatened with violence and prosecution because they are deemed morally indecent and despised as unreliable men with sordid minds. In the second text, the right to freely produce, discuss, and distribute abstract mathematical and musical theories is accompanied by a strict prohibition on their practical application and adaptation to other domains, as these activities are despised as vulgar and mechanic, with the law simply mirroring the public sentiment.' }],
      correctValues: ['a']
    },
    {
      id: 'c2-4',
      type: 'single',
      text: 'How does each text describe the manner in which disagreement is handled?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'The first text implies that the members of the society envisioned by the founder are capable of resolving disagreements among them in a civilized, respectful, and non-violent way, whereas the second text describes a society whose members aren\'t sure about their own opinions and have no established tradition of respectful civic discourse.' },
      { value: 'b', text: 'The first text implies that the members of the society envisioned by the founder should settle disagreement through force and intimidation, so that the one who silences their opponent is assumed to be correct, whereas the second text describes a society whose members resolve disagreement among them through well-established, respectful civic argument, by presenting firm opinions grounded in mathematics and advanced musical concepts.' },
      { value: 'c', text: 'The first text implies that the members of the society envisioned by the founder are capable of resolving disagreements among them in a peaceful way, whereas the second text describes a society whose members are so sure that they always hold the correct opinion that they don\'t argue with each other, as there\'s no ground for disagreement to arise among them.' },
      { value: 'd', text: 'The first text implies that the members of the society envisioned by the founder who believe in the immortal soul are capable of resolving disagreements among them in a civilized way, whereas the second text describes a society in which disagreement is resolved in a respectful manner through the use of strong arguments presented by each side.' }],
      correctValues: ['a']
    },
    {
      id: 'c2-5',
      type: 'single',
      text: 'How do the two texts portray the relationship between abstract knowledge and everyday life?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'The first text implies that refined moral and religious ideas should serve as a strong foundation for peaceful and productive daily life, while the second one describes a society that confines itself to abstract theories in mathematics and music, neglecting other areas of life and becoming grossly incompetent in practical matters.' },
      { value: 'b', text: 'The first text suggests that moral and religious ideas, which are thoroughly debated in theory and tested in practice, should guide and support everyday life, while the second one implies that abstract knowledge should be grounded in practical skills.' },
      { value: 'c', text: 'The first text implies that moral and religious ideas accepted by the majority should serve as a strong foundation for productive everyday life, while the second one describes a society that derives the skills necessary for rewarding daily life from the advanced scientific theories that are common among them.' },
      { value: 'd', text: 'The first text suggests that abstract moral and religious ideas should be kept separate from everyday life, so that people can pursue practical matters without interference from religious debates, while the second text describes a society that harmonizes abstract mathematics and music with highly efficient, well-organized daily practices.' }],
      correctValues: ['a']
    },
    {
      id: 'c2-6',
      type: 'single',
      text: 'How do the two texts differ in the way they present the role of imagination?',
      subtext: "Select the correct answer.",
      options: [{ value: 'a', text: 'The first text doesn\'t explicitly mention imagination as such, but approaches the subject in a largely legalistic manner, addressing the moral side of the issue through the use of well-structured and highly nuanced legislation, while the second text describes a culture so narrow and rigid in its thinking that it lacks not only imagination but also the vocabulary to describe it.' },
      { value: 'b', text: 'The first text places the focus on legal procedures and political restrictions, creating the impression that imaginative thinking is treated with suspicion, as if the moral side of the issues could only be managed through control and restraint, so that the reader is encouraged to see the society as hostile to any flexible or open-ended interpretation of experience. The second text, by contrast, presents a society that relies on imagination to maintain its competence in numerous areas, using advanced scientific theories to improve the management of daily affairs, with a rich terminology in their language referring to different aspects of imagination, solidifying the idea that imagination is central to their way of life.' },
      { value: 'c', text: 'The first text doesn\'t mention imagination as such, but approaches the subject from the moral side, suggesting that imagination is used to come up with laws necessary for maintaining the moral order, while the second text describes a culture that has a rich vocabulary to express the notion of imagination, but avoids using imagination in daily life, despising it as vulgar and mechanic.' },
      { value: 'd', text: 'The first text places the focus on legal procedures and political restrictions, creating the impression that imaginative thinking is allowed only in relation to ideas that have been approved on the grounds of being considered morally acceptable, so that any form of unrestrained creativity is implicitly disapproved, encouraging the reader to see the society as hostile to any flexible or open-ended interpretation of experience. The second text, by contrast, presents a society that employs imagination as a practical tool to optimize everyday routines and social arrangements, but refuses to use it for developing, debating, and testing abstract theories, perceiving them as vulgar, mechanical, and wildly impractical.' }],
      correctValues: ['a']
    },
    {
      id: 'c2-7',
      type: 'multiple',
      text: 'Which statements about the two texts are true?',
      subtext: 'Select four correct options.',
      options: [{ value: 'a', text: 'The founder from the first text clearly distinguishes the right to express one\'s mind and hold religious beliefs from the privilege of holding public trust.' },
      { value: 'b', text: 'The founder from the first text allows freedom of belief and discussion and forbids no forms of worship.' },
      { value: 'c', text: 'The people from the second text hold strong disdain for practical geometry.' },
      { value: 'd', text: 'The people from the second text have their ideas deeply rooted in mathematics and music.' },
      { value: 'e', text: 'The founder from the first text prohibits the expression of opinions he despises.' },
      { value: 'f', text: 'The founder from the first text prefers to handle matters hastily rather than waste time on long debates that he perceives to be indecent and foolish.' },
      { value: 'g', text: 'The people from the second text are highly proficient in practical matters thanks to the skills they develop while studying geometry and music, which they can easily adapt to other domains.' },
      { value: 'h', text: 'The people from the second text use ornate poetic expressions produced by their vivid imaginations, alongside advanced mathematical terms, to describe beauty.' }],
      correctValues: ['a', 'b', 'c', 'd']
    },
    {
      id: 'c2-8',
      type: 'single',
      text: 'The new farming equipment, guided by advanced AI that identifies weeds with high precision and eradicates them with laser beams, is designed to significantly reduce, if not entirely eliminate, the reliance on synthetic herbicides, thereby reducing potential adverse effects on human health.',
      subtext: 'Which statement accurately describes the relationship between the technology and the intended health outcome?',
      options: [
        { value: 'a', text: 'To mitigate potential human health risks, the system employs AI-driven lasers to curb, or potentially negate, the necessity for synthetic herbicide application.' },
        { value: 'b', text: 'While reducing herbicide reliance, the AI-laser system primarily safeguards farmworkers from direct chemical exposure during application.' },
        { value: 'c', text: 'The technology eradicates weeds via lasers to enhance crop yields and soil health, indirectly alleviating health concerns tied to herbicide residues.' },
        { value: 'd', text: 'By precisely targeting weeds, the AI-guided lasers minimize off-target effects on beneficial insects, thereby curbing broader ecological risks to human health.' }
      ],
      correctValues: ['a']
    },
    {
      id: 'c2-9',
      type: 'single',
      text: 'The chief inspector warned: "Harmonic distortions arising from nonlinear loads may ___ voltage instability throughout the grid."',
      subtext: 'Select the verb that most precisely fits the technical collocation.',
      options: [
        { value: 'a', text: 'Precipitate' }, // Correct (technical precision)
        { value: 'b', text: 'Instigate' },   // Incorrect (usually refers to people/conflict)
        { value: 'c', text: 'Promulgate' },  // Incorrect (legal/ideas)
        { value: 'd', text: 'Inaugurate' }   // Incorrect (formal beginnings)
      ],
      correctValues: ['a']
    },
    {
      id: 'c2-10',
      type: 'single',
      text: 'In a confidential memo, the legal team cautioned: "Any remark you make regarding the market manipulation could be ___ as an implicit admission of liability."',
      subtext: 'Select the verb that most precisely conveys the legal implication.',
      options: [
        { value: 'a', text: 'Construed' },    // Correct (legal standard)
        { value: 'b', text: 'Deciphered' },  // Incorrect (refers to codes/complexity)
        { value: 'c', text: 'Extrapolated' },// Incorrect (refers to trends/data)
        { value: 'd', text: 'Perceived' }    // Incorrect (general/subjective)
      ],
      correctValues: ['a']
    }
  ]
};
