const linklist = [
    {
        label: "CS101",
        url: "cs101/index.html"
    },
    {
        label: "WDD130",
        url: "https://rich20053.github.io/WDD130/index.html"
    },
    {
        label: "COMM130",
        url: "comm130/index.html"
    },
    {
        label: "CIT160",
        url: "week4/index.html"
    },
    {
        label: "CS241",
        url: "cs241/index.html"
    },
    {
        label: "CSE210",
        url: "week7/index.html"
    },
    {
        label: "WDD230",
        url: "https://rich20053.github.io/WDD230/index.html"
    },
    {
        label: "WDD331R",
        url: "https://rich20053.github.io/WDD331RPortfolio/index.html"
    },
    {
        label: "WDD330",
        url: "https://rich20053.github.io/WDD330-Portfolio/index.html"
    }
  ]

for (i=0; i<linklist.length; i++) {
    let line = document.createElement('li');
    let link = document.createElement('a');
    // Change the properties of the a element to contain the link for the week
    link.href = linklist[i].url;
    link.textContent = linklist[i].label;
    // Add/append the link element to the line item
    line.appendChild(link);
    
    //<li>Lesson 2:  <a href="./lesson2/design-principles.html">Design Principles</a></li>

    // Add/append the line item to the list
    document.querySelector('#TableOfContents').appendChild(line);
}






