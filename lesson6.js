//HtmlElement is a javascript class that represents an HTML element. It's constructor takes in two arguments: type and text
//type is the type of element example div, p, span, h1, etc. text is an optional argument and represents any text in the element
//text is an optional argument and represents any text in the element


//the addID method will add an id to an HTML element. If an id already exists, it will overwrite it.


//the addClasss method will add a class to an HTML element
//addClass can be called multiple times to adddifferent classes


//the addChild method will add children elements the argument must be an HtmlElement object


//the toString method returns a string version of the HTML element Notee: the following code is quite complicated while you can use this method to check your work, there is no need to read through it or understand (until you get to the stretch question)


// creaet following instances of HtmlElement. you  will need to use the method of addID and addClass.
// the toString method may be used to check your work.
//
//

/* === DO NOT ALTER CODE BELOW THIS LINE UNTIL LINE 88 === */
// HtmlElement is a javascript class that represents an HTML element
// It's constructor takes in two arguments: type and text
// type is the type of element (example div, p, span, h1, etc)
// text is an optional argument and represents any text in the element
const HtmlElement = function(type, text) {
  this.type = type;
  this.text = text || "";
  this.id = null;
  this.classes = [];
  this.children = [];
};

// The addID method will add an id to an HTML element
// If an id already exists, it will overwrite it.
HtmlElement.prototype.addID = function(id) {
  this.id = id;
};

// The addClass method will add a class to an HTML element
// addClass can be called multiple times to add difference classes
HtmlElement.prototype.addClass = function(className) {
  this.classes.push(className);
};

// The addChild method will add children elements
// The argument must be an HtmlElement object
HtmlElement.prototype.addChild = function(element) {
  if (!(element instanceof HtmlElement)) {
    throw new Error('Invalid argument for addChild method');
  }

  this.children.push(element);
};

// The toString method returns a string version of the HTML element
// Note: The following code is quite complicated
// While you can use this method to check your work,
// there is no need to read through it or understand it
// (until you get the stretch question)
HtmlElement.prototype.toString = function() {
  const openingTag = getOpeningTag(this.type, this.id, this.classes);
  const closingTag = "</" + this.type + ">";

  return openingTag + this.text + closingTag;

  function getID(id) {
    if (!id) {
      return "";
    }

    return "id=\"" + id + "\"";
  }

  function getClasses(classes) {
    if (!classes.length) {
      return "";
    }

    const classList = classes.reduce(function(string, name) {
      return string + ' ' + name;
    });

    return "class=\"" + classList + "\"";
  }

  function getOpeningTag(type, id, classes) {
    const idText = getID(id);
    const classText = getClasses(classes);

    let text = type;

    if (idText) {
      text += " " + idText;
    }

    if (classText) {
      text += " " + classText;
    }

    return "<"+text+">";
  }
};

/* === DO NOT ALTER ANY CODE ABOVE THIS LINE === */


// Question 1: Create following instances of HtmlElement.
//             You will need to use the method of addID and addClass.
//             The toString method may be used to check your work.
//
//  a. <p>To every action there is an equal and opposite reaction.</p>
//  b. <h1 id="main">Welcome to the Webpage</h1>
//  c. <div class="container important"></div>
//  d. <li id="first-item" class="stir-fry">Scallion</li>
//  e. <span id="CTA" class="inline important"></span>

// Assign the following variables correctly:

const elementA = new HtmlElement('p', 'To every action there is an equal and opposite reaction.');
const elementB = new HtmlElement('h1', 'Welcome to the Webpage');
elementB.addID('main');
const elementC = new HtmlElement('div', '');
elementC.addClass('container important');
const elementD = new HtmlElement('li', 'Scallion');
elementD.addID('first-item');
elementD.addClass('stir-fry');
const elementE = new HtmlElement('span', '');
elementE.addID('CTA');
elementE.addClass('inline important');


// Question 2: Create an element that represents the following ordered list.
// //             You will need to create an new element for each of its children
// //             and add them to their parent using the addChild method.
// //             Note that the toString method won't fully work on elements with
// //             children (see stretch question).
// //
// // <ol id="world-domination">
// //   <li> Discover the secret to prime factorization </li>
// //   <li class="illegal"> Hack through online banking security </li>
// //   <li class="illegal"> Blackmail all the major global leaders </li>
// //   <li> World domination </li>
// // </ol>


const stepsToWorldDomination = new HtmlElement('ol');
stepsToWorldDomination.addID('world-domination');
const childElement1 = new HtmlElement('li', 'Discover the secret to prime factorization');
const childElement2 = new HtmlElement('li', 'Hack through online banking security');
chileElement2.addClass('illegal');
const childElement3 = new HtmlElement('li', 'Blackmail all the major global leaders');
chileElement3.addClass('illegal');
const childElement4 = new HtmlElement('li', 'World domination');
stepsToWorldDomination.addChild(childElement1);
stepsToWorldDomination.addChild(childElement2);
stepsToWorldDomination.addChild(childElement3);
stepsToWorldDomination.addChild(childElement4);

// Question 3: Write the removeClass method on the HTMLElement class.
//
//
// // The removeClass method will remove a class from an element
// // by removing that class name from the this.classes array
// // Example: if element.children were equal to ['inline', 'important']
// //          and you called element.removeClass('inline'), afterward
// //          element.chasses would be equal to ['important']
//


//HtmlElement.prototype.removeClass = function(className) {
		//function trueOrFalse() {
				//return !className;
//				//this.classes = this.classes.splice(className, 1)
				//for (let i = 0; i < this.children.length; i++) {
						//this.children[i]['classes'] = this.children[i]['classes'].filter(trueOrFalse);
				//}
		//}
//};
		//still working on this.  lost at the moment would be an understatment.

