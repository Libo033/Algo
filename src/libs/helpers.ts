export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function buttonSelected(set: string, btn: string) {
  if (set === btn) {
    // Seleccionado
    return "w-3/6 py-2 border border-blue-300 rounded-md text-black bg-blue-200/70";
  } else {
    // No seleccionado
    return "w-3/6 py-2 text-white border border-blue-300 bg-blue-50/10 rounded-md";
  }
}
