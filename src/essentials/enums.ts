//Bad ❌
enum BadState {
  InProgress,
  Success,
  Fail,
}

BadState.InProgress; // (enum member) State.InProgress = 0
BadState.Success; // (enum member) State.Success = 1
BadState.Fail; // (enum member) State.Fail = 2

const badCheckState = (state: BadState) => {
  //
};
badCheckState(100);

//Good ✅
type GoodState = "InProgress" | "Success" | "Fail";
enum GoodState2 {
  InProgress = "InProgress",
  Success = "Success",
  Fail = "Fail",
}

const goodCheckState = (state: GoodState2) => {};

goodCheckState("fsdgfsgf");

export {};
