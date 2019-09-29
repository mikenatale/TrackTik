Hello! I figured I'd use this space to justify some of the technical decision I made and stuff like that.

---

## First off, how to run the App

```
npm i
npm start
```

That's it! I used a local tunnel to test on my phone (I recommend `serveo.net`!)

## Tech Stack

Gonna break this down one by one:

#### React

I know you guys use Vue over there and I'm not worried about learning it, but learning it on the fly would have been bold move :p

I used regular components for anything with a state, and stateless components for the "dumb" ones that only had to deal with inputs and outputs for optimization. 

#### Material UI

The basic design and icons looked VERY Material-ish, so I decided to roll with that. I figured it was important to show that I'm able to use existing components rather than make everything custom.

I also had to do some funky CSS injection as a result; I know it makes the files ugly and I'd usually prefer dedicated `.scss` files myself, but that's how the framework works ¯\\\_(ツ)_/¯

#### Typescript

Possibly a bit overkill, but many big projects use Typescript and the spec said that this should be something that could be built upon. I figured it's way easier to include it from the get-go rather than trying to add it in after the fact.


## Other things I wanted to acknowledge

* Some (most) of the buttons don't do anything, they're just there to match the design.
* I kind of cheated and used `div`s with `cursor: pointer` for clickable elements, which that doesn't take accessibility into account. Given more time I'd rework that.
* I could made every component stateless and used hooks to manage those, but from what I understand there's no common consensus on which one is * actually better.

---

I appreciate your time and thanks for coming to my TED Talk

<sup>hire me pls</sup>