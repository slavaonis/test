const today = new Date();
const timestamp = (date = today) => Math.floor(new Date(date) / 1000);

const users = [
  {
    balance: 16000,
    admin: true,
    name: 'Alex',
    timestamp: timestamp('2021-10-11'),
    basket: [
      {
        name: 'Milk',
        price: 10,
      },
      {
        name: 'Water',
        price: 2.52,
      }
    ],
  },
  {
    balance: 12000,
    admin: false,
    name: 'David',
    timestamp: timestamp(),
    basket: [
      {
        name: 'Milk',
        price: 10,
      },
      {
        name: 'Phone',
        price: 122.52,
      }
    ],
  },

  {
    balance: 456,
    admin: true,
    name: 'John',
    timestamp: timestamp(),
    basket: [
      {
        name: 'Car',
        price: 10000,
      },
      {
        name: 'Apple',
        price: 22.52,
      }
    ],
  },
  {
    balance: 1000,
    admin: false,
    name: 'Mari',
    timestamp: timestamp('2020-10-11'),
    basket: [
      {
        name: 'House',
        price: 100000,
      },
      {
        name: 'Water',
        price: 2.52,
      }
    ],
  }
];

const getBasketSum = (user) => {
  return user.basket.reduce((acc, { price }) => {
    acc = acc + price;

    return acc;
  }, 0);
};

const filterFlags = (user) => {
  return user.timestamp % timestamp() === 0
    && !user.admin
    && user.balance > 0;
};

const getNewUsersWithEnoughBalance = (users) => {
  return users.reduce((acc, user) => {
    const newUserWithBalance = filterFlags(user);
    if (newUserWithBalance) {
      const basketSum = getBasketSum(user);
      const isUserBalanceEnough = basketSum <= user.balance;

      if (isUserBalanceEnough) {
        acc.push(user);
      }
    }

    return acc;
  }, []);
}

const newUsers = getNewUsersWithEnoughBalance(users);

console.log(newUsers);