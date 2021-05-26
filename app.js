;(() => {
  const list = document.querySelector(".list")

  const communications = [
    {
      title: "a",
      status: "DELIVERED",
      role: "ADMIN",
    },
    {
      title: "b",
      status: "FIRST_OPENING",
      role: "ADMIN",
    },
    {
      title: "c",
      status: "FIRST_OPENING",
      role: "ADMIN",
    },
    {
      title: "d",
      status: "DELIVERED",
      role: "USER",
    },
    {
      title: "e",
      status: "DELIVERED",
      role: "USER",
    },
    {
      title: "f",
      status: "FIRST_OPENING",
      role: "USER",
    },
    {
      title: "g",
      status: "FIRST_OPENING",
      role: "USER",
    },
  ]

  const render = x => {
    return `
      <div class="box">
          <p>${x.title}</p>
          <p>${x.status}</p>
          <p>${x.role}</p>
        </div`
  }

  const ROLE = "USER"

  list.innerHTML =
    ROLE === "ADMIN"
      ? communications
          // .filter(x => x.status === "FIRST_OPENING")
          .map(x => render(x))
          .join("")
      : communications
          .filter(x => x.status !== "FIRST_OPENING")
          .map(x => render(x))
          .join("")
})()
