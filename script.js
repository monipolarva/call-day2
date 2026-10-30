const guardian = {
  name: "Кристальный Страж",
  protocol: "Не пропускать никого",
  trust: 15,
  trustThreshold: 80
};

const signals = [
  {
    id: 1,
    title: "Багги опускает оружие",
    trustPoints: 20,
    priority: 3,
    isSafe: true
  },
  {
    id: 2,
    title: "Багги говорит спокойным голосом",
    trustPoints: 15,
    priority: 2,
    isSafe: true
  },
  {
    id: 3,
    title: "Багги делает резкое движение",
    trustPoints: 30,
    priority: 5,
    isSafe: false
  },
  {
    id: 4,
    title: "Багги протягивает открытую ладонь",
    trustPoints: 25,
    priority: 4,
    isSafe: true
  },
  {
    id: 5,
    title: "Багги пытается пройти силой",
    trustPoints: 40,
    priority: 5,
    isSafe: false
  },
  {
    id: 6,
    title: "Багги остаётся на расстоянии",
    trustPoints: 10,
    priority: 1,
    isSafe: true
  }
];

function selectSafe(items) {
  return items.filter(item => item.isSafe === true);
}

function orderSignals(items) {
  return [...items].sort((a, b) => b.priority - a.priority);
}

function collectNames(items) {
  return items.map(item => item.title);
}

function countTrust(items, startTrust) {
  let result = startTrust;

  for (let i = 0; i < items.length; i++) {
    result += items[i].trustPoints;
  }

  return result;
}

function checkGuardian(guard, points) {
  if (points >= guard.trustThreshold) {
    guard.protocol = "Доверять";
  }

  return guard.protocol;
}

const safe = selectSafe(signals);
const ordered = orderSignals(safe);
const names = collectNames(ordered);
const total = countTrust(safe, guardian.trust);
const newProtocol = checkGuardian(guardian, total);

console.log("Безопасные сигналы:", safe);
console.log("Сигналы по приоритету:", ordered);
console.log("Названия сигналов:", names);
console.log("Уровень доверия:", total);
console.log("Новый протокол Стража:", newProtocol);
