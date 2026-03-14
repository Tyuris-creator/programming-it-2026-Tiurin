class ProjectManager {
  constructor(project) {
    console.log(
      "Чтобы запушить проект укажи объект с полями title link description skills в свойство project",
    );
    this._projects = [];
    this.project = project;
  }
  set project(project) {
    if (!Array.isArray(project.skills)) {
      throw new TypeError("Поле skills должно быть массивом");
    }
    if (typeof project.title !== "string" && project.title.length < 3) {
      throw new TypeError("Поле title должен быть строкой");
    }
    if (typeof project.price !== "number" || Number.isNaN(project.price)) {
      throw new TypeError("Поле price должно быть числом");
    }
    if (typeof project.description !== "string") {
      throw new TypeError("Поле description должно быть строкой");
    }
    if (typeof project.link !== "string") {
      throw new TypeError("Поле link должно быть строкой");
    }
    this._projects.push(project);
  }
  get allProjects() {
    console.table(this._projects);
  }
}

const myProjects = new ProjectManager({
  title: "Лендинг для кафе",
  link: "https://my-avesome-landing.ru", // - произвольный линк
  skills: ["HTML", "CSS", "JS"],
  description: "Адаптивный сайт с формой заказа",
  price: 45000,
});

myProjects.allProjects;
