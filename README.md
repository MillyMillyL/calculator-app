# Reducer Logic

## State Structure

The `state` object represents the current state of the calculator and includes the following properties:

- **`currentValue`**: (string) - The current input value or the result being displayed.
- **`previousValue`**: (string) - The value stored for use in the next calculation.
- **`operator`**: (string) - The arithmetic operator (`+`, `-`, `*`, `/`) currently selected.
- **`overwrite`**: (boolean) - A flag indicating whether the next input should overwrite the current value.

## Actions

The `Reducer` function responds to different actions to update the state of the calculator. Here’s the logic for each action:

### 1. `ADD_DIGIT`

Handles the addition of digits or a decimal point to the `currentValue`.

- **Conditions:**
  - If `state.overwrite` is `true`, replace the `currentValue` with `act.payload` and set `overwrite` to `false`.
  - Prevent adding multiple leading zeros:
    - If `act.payload` is `"0"` and `currentValue` is already `"0"`, do nothing.
  - Prevent multiple decimal points:
    - If `act.payload` is `"."` and `currentValue` already includes `"."`, do nothing.

- **Default Action:**
  - Append `act.payload` to `currentValue`.

### 2. `RESET`

Resets the calculator state.

- **Action:**
  - Clears the state to an empty object `{}`.

### 3. `DELETE_DIGIT`

Handles deleting the last digit from `currentValue`.

- **Conditions:**
  - If `state.overwrite` is `true`, clear the `currentValue` and set `overwrite` to `false`.
  - If `currentValue` is `null`, do nothing.
  - If `currentValue` has only one digit, set `currentValue` to `null`.

- **Default Action:**
  - Remove the last digit of `currentValue` using `slice(0, -1)`.

### 4. `CHOOSE_OPERATION`

Manages the selection of an arithmetic operation.

- **Conditions:**
  - If both `currentValue` and `previousValue` are `null`, do nothing.
  - If `currentValue` is `null`, update only the `operator`.
  - If `previousValue` is `null`, set `previousValue` to `currentValue`, update the `operator`, and clear `currentValue`.

- **Default Action:**
  - Evaluate the expression using the `Evaluate(state)` function, set `previousValue` to the result, update the `operator`, and clear `currentValue`.

### 5. `EVALUATE`

Performs the calculation based on the current state.

- **Conditions:**
  - If any of `currentValue`, `operator`, or `previousValue` is `null`, do nothing.

- **Default Action:**
  - Use `Evaluate(state)` to compute the result, set `currentValue` to the result, set `overwrite` to `true`, and clear `previousValue` and `operator`.
