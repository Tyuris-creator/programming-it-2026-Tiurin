class Character {
  // 2. ИНКАПСУЛЯЦИЯ
  #name;
  #health;
  constructor(name, health) {
    this.#name = name;
    this.#health = health;
    // Доступ к experience возможен только через функции-геттеры и сеттеры, которые создаются прямо здесь, closures

    let experience = 0;

    this.getExperience = () => {
      return experience;
    };

    this.setExperience = (amount) => {
      if (amount > 0) {
        experience += amount;
        console.log(
          `${this.#name} получил ${amount} опыта! (Всего: ${experience})`,
        );
      }
    };
  }

  // Геттеры для приватных полей #
  getName() {
    return this.#name;
  }

  getHealth() {
    return this.#health;
  }

  takeDamage(amount) {
    this.#health -= amount;
    console.log(
      `${this.#name} получает ${amount} урона. Осталось HP: ${this.#health}`,
    );
  }
  // абстрактный метод
  attack() {
    console.log(`${this.#name} совершает базовую атаку.`);
  }

  celebrateVictory() {
    console.log(`${this.#name} готовится праздновать победу...`);

    // Используем стрелочную функцию (() => {}).
    setTimeout(() => {
      console.log(
        `Ура! ${this.#name} празднует победу с ${this.getHealth()} HP! 🎉`,
      );
    }, 1000);
  }
}

// 3. НАСЛЕДОВАНИЕ: Класс Warrior расширяет базовый класс Character.
class Warrior extends Character {
  #weapon;

  constructor(name, health, weapon) {
    super(name, health);
    this.#weapon = weapon;
  }

  // 4. ПОЛИМОРФИЗМ:
  attack() {
    console.log(
      `${this.getName()} яростно бьет врага, используя ${this.#weapon}! ⚔️`,
    );
  }
}

// 3. НАСЛЕДОВАНИЕ
class Mage extends Character {
  #spell;

  constructor(name, health, spell) {
    super(name, health);
    this.#spell = spell;
  }

  // 4. ПОЛИМОРФИЗМ:
  attack() {
    console.log(
      `${this.getName()} читает заклинание и выпускает ${this.#spell}! ☄️`,
    );
  }
}

// 3. НАСЛЕДОВАНИЕ
class Rogue extends Character {
  #stealthLevel;

  constructor(name, health, stealthLevel) {
    super(name, health);
    this.#stealthLevel = stealthLevel;
  }

  // 4. ПОЛИМОРФИЗМ: Тот же метод attack()
  attack() {
    console.log(
      `${this.getName()} наносит подлый удар из тени (Уровень скрытности: ${this.#stealthLevel})! 🗡️`,
    );
  }
}

// ПРОВЕРКА РАБОТЫ СИСТЕМЫ (ДЛЯ ТЕСТОВ)

const party = [
  new Warrior("Арагорн", 100, "Двуручный меч"),
  new Mage("Гэндальф", 60, "Огненный шар"),
  new Rogue("Бильбо", 40, 99),
];

console.log("=== НАЧАЛО БОЯ ===");

// Демонстрация ПОЛИМОРФИЗМА:
party.forEach((character) => {
  character.attack();
});

console.log("\n=== РАЗДАЧА ОПЫТА И ИНКАПСУЛЯЦИЯ (ЗАМЫКАНИЕ) ===");
party[0].setExperience(50);
party[0].setExperience(25);
// party[0].experience = 1000; // переменная надежно спрятана в замыкании

// async method
party[1].celebrateVictory();

// пример с get set

class Player {
  #username;

  constructor(username) {
    this.#username = username;
  }

  get username() {
    console.log("Кто-то запрашивает имя!");
    return this.#username.toUpperCase();
  }

  set username(newName) {
    console.log("Попытка изменить имя...");

    if (newName.length < 3) {
      console.log("Ошибка: Имя должно содержать минимум 3 символа!");
      return;
    }

    this.#username = newName;
    console.log("Имя успешно изменено!");
  }
}
