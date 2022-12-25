type Species = "cat" | "dog";

interface Pet {
  species: Species;
}

class Cat implements Pet {
  public species: Species = "cat";
  public meow(): void {
    console.log("Meow");
  }

  public jump(): void {
    console.log("Jumping...");
  }

  public walk(): void {
    console.log("Walking...");
  }
}

function petIsCat(pet: Pet): pet is Cat {
  return pet.species === "cat";
}

function petIsCatBoolean(pet: Pet): boolean {
  return pet.species === "cat";
}

const p: Pet = new Cat();

//Bad ❌
// p.meow(); // ERROR: Property 'meow' does not exist on type 'Pet'.

if (petIsCatBoolean(p)) {
  // p.meow(); // ERROR: Property 'meow' does not exist on type 'Pet'.

  (p as Cat).meow();

  //What if we have many properties? Do you wanna repeat the same casting
  //Over and over again...
}

//Good ✅
if (petIsCat(p)) {
  p.meow(); // now compiler knows for sure that the variable is of type Cat and it has meow method
}

export {};
