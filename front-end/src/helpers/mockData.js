import  student1  from "../student1.png"
import student2 from "../student2.png"

const mockData = [
  {
    id: 1,
    name: 'Matheus',
    username: 'matheusluiz',
    avatar: student1,
    message: 'Muito feliz pela oportunidade de ralizar esta aceleração em c# #Voalle!',
    timestamp: 1645423429297,
    likes: 3,
    comments: [
      {
        id: 1,
        name: 'Jane Doe',
        username: 'janedoe',
        avatar: 'https://placeimg.com/64/64/people/2',
        message: 'Nice tweet!',
        timestamp: 1645423578375,
      },
    ],
  },
  {
    id: 2,
    name: 'Nicholas',
    username: 'nicholastorres',
    avatar: student2,
    message: 'Muito feliz pela oportunidade de ralizar esta aceleração em c# #Voalle!',
    timestamp: 1645419999123,
    likes: 5,
    comments: [],
  },
  {
    id: 3,
    name: 'Bob Smith',
    username: 'bobsmith',
    avatar: 'https://placeimg.com/64/64/people/3',
    message: 'This is a test tweet',
    timestamp: 1645415678182,
    likes: 2,
    comments: [
      {
        id: 2,
        name: 'John Doe',
        username: 'johndoe',
        avatar: 'https://placeimg.com/64/64/people/1',
        message: 'Nice tweet!',
        timestamp: 1645415712246,
      },
    ],
  },
  {
    id: 4,
    name: 'Jane Doe',
    username: 'janedoe',
    avatar: 'https://placeimg.com/64/64/people/2',
    message: 'How is everyone doing today?',
    timestamp: 1645419999123,
    likes: 5,
    comments: [],
  },
  {
    id: 5,
    name: 'Bob Smith',
    username: 'bobsmith',
    avatar: 'https://placeimg.com/64/64/people/3',
    message: 'This is a test tweet',
    timestamp: 1645415678182,
    likes: 2,
    comments: [
      {
        id: 2,
        name: 'John Doe',
        username: 'johndoe',
        avatar: 'https://placeimg.com/64/64/people/1',
        message: 'Nice tweet!',
        timestamp: 1645415712246,
      },
    ],
  },
];

export default mockData;

