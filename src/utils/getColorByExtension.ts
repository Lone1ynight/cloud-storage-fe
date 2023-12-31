// const extColor = {
//   pdf: "purple",
//   xls: "green",
//   doc: "blue",
//   txt: "blue",
//   png: "orange",
//   jpg: "orange",
//   jpeg: "orange",
//   zip: "red",
// }

enum extColor {
  pdf= "purple",
  xls= "green",
  doc= "blue",
  txt= "blue",
  png= "orange",
  jpg= "orange",
  jpeg= "orange",
  zip= "red",
}

export type Extension = keyof typeof extColor;
export type Color = typeof extColor[Extension];

export const getColorByExtension = (ext: string): Color => {
  // @ts-ignore
  return extColor[ext] ;
};