import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
  })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
} & typeof global;

// Using a Proxy to lazily initialize PrismaClient only when it's actually used.
// This prevents "Failed to collect page data" errors during Next.js build
// by avoiding database connection attempts during module evaluation.
const prisma = new Proxy({} as ReturnType<typeof prismaClientSingleton>, {
  get(target, prop, receiver) {
    if (!globalThis.prismaGlobal) {
      globalThis.prismaGlobal = prismaClientSingleton();
    }
    const value = Reflect.get(globalThis.prismaGlobal, prop, receiver);
    if (typeof value === 'function') {
      return value.bind(globalThis.prismaGlobal);
    }
    return value;
  }
});

export default prisma
