const library = {
  name: "New York Library",
  address: " 24, Some Street, New York",
  numberOfBooks: 1254,
  type: "national",
  books: [
    {
      title: "Harry Potter",
      pages: 756,
      isbn: "9971-5-0210-0",
    },
    {
      title: "Davinci Code",
      pages: 386,
      isbn: "9971-5-0210-0",
    },
  ],
  genres: ["fiction", "history", "computers", "poetry"],
  members: [
    {
      name: "John Doe",
      phone: "+167678978",
    },
    {
      name: "Mark Doe", // Name is mandatory
      phone: "+167678978", // Phone is mandatory
      email: "mark@email.com", // Can have additional optional fields
    },
  ],
};
