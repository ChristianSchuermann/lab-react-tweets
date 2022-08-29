import "./App.css";
import Tweet from "./components/Tweet";

const tweetsArray = [
  {
    user: {
      name: "Son Goku",
      image: "http://pm1.narvii.com/6859/af7bfd2bc28c650bf889653d6ff7d8daca8a3719v2_00.jpg",
      handle: "official_kakarot",
    },
    timestamp: "now",
    message:
      "Power comes in response to a need, not a desire.",
  },
  {
    user: {
      name: "Gowasu",
      image: "https://i.pinimg.com/736x/ab/91/c5/ab91c53fd9490a29c6564901917289bb.jpg",
      handle: "supreme_kai_Gowasu",
    },
    timestamp: "30mins ago",
    message:
      "Even if evil makes you lose your way, you stay your ground and keep searching for the path of good. Is that search now what justice is? It is for that reason that gods gave mortals knowledge.",
  },
  {
    user: {
      name: "Beerus",
      image: "https://i.pinimg.com/originals/45/6e/39/456e39a7b0d48698605a9dac1b29729a.jpg",
      handle: "god_of_destruction",
    },
    timestamp: "1h ago",
    message:
      "Don't take it personally @offcial_karaot... Destruction is my job, after all.",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
  },
  {
    user: {
      name: "Son Goku",
      image: "http://pm1.narvii.com/6859/af7bfd2bc28c650bf889653d6ff7d8daca8a3719v2_00.jpg",
      handle: "official_kakarot",
    },
    timestamp: "4h ago",
    message:
      "I am the hope of the universe...I am the answer to all living things that cry out for peace...I am the protector of the innocent...I am the light in the darkness...I am truth. Ally to good...Nightmare to you",
  },
  {
    user: {
      name: "Son Goku",
      image: "http://pm1.narvii.com/6859/af7bfd2bc28c650bf889653d6ff7d8daca8a3719v2_00.jpg",
      handle: "official_kakarot",
    },
    timestamp: "5h ago",
    message:
      "Eternal Dragon, by your name, I summon you forth: Shenron!",
  },
  {
    user: {
      name: "Son Goku",
      image: "http://pm1.narvii.com/6859/af7bfd2bc28c650bf889653d6ff7d8daca8a3719v2_00.jpg",
      handle: "official_kakarot",
    },
    timestamp: "6h ago",
    message:
      "I would rather be a brainless monkey than a heartless monster.",
  },
];

function App() {
  return (
    <div className="App">
      {tweetsArray.map((tweet) => {
          return <Tweet tweet={tweet}/>
        })}
    </div>
  );
}

export default App;
