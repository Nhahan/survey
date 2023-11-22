// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Deprecated(_?: string): ClassDecorator & MethodDecorator {
  return (target: any, key?: string, descriptor?: any) => descriptor;
}
