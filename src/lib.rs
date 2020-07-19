use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn solve(params: &str) -> String {
  let ps: (f32, f32) = serde_json::from_str(&params).unwrap();
  let mut solution: (f32, f32, f32, f32) = (0., 0., 0., 0.);

  solution.0 = ps.0 + ps.1;
  solution.1 = ps.0 - ps.1;
  solution.2 = ps.0 * ps.1;
  solution.3 = ps.0 / ps.1;
  return serde_json::to_string(&solution).unwrap();
}