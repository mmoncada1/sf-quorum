
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Supervisor
 * A district supervisor (current or former member of the Board).
 */
export type Supervisor = $Result.DefaultSelection<Prisma.$SupervisorPayload>
/**
 * Model Matter
 * A piece of legislation (ordinance, resolution, motion, hearing, etc.).
 */
export type Matter = $Result.DefaultSelection<Prisma.$MatterPayload>
/**
 * Model MatterAttachment
 * A named document attached to a matter on Legistar (e.g. "HPC Reso No. 1565", "PLN Transmittal").
 */
export type MatterAttachment = $Result.DefaultSelection<Prisma.$MatterAttachmentPayload>
/**
 * Model MatterRelation
 * A directional reference from one matter to a related/predecessor matter.
 */
export type MatterRelation = $Result.DefaultSelection<Prisma.$MatterRelationPayload>
/**
 * Model Meeting
 * A scheduled meeting / hearing of the Board or one of its committees.
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model Action
 * A recorded action taken on a matter at a meeting (a "history" row in Legistar).
 * This is the unit that carries a roll-call vote.
 */
export type Action = $Result.DefaultSelection<Prisma.$ActionPayload>
/**
 * Model Vote
 * A single supervisor's vote on a single action.
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>
/**
 * Model Sponsorship
 * Authorship / sponsorship of a matter by a supervisor.
 */
export type Sponsorship = $Result.DefaultSelection<Prisma.$SponsorshipPayload>
/**
 * Model Topic
 * A policy topic / focus area (e.g. Housing, Public Safety, Transit).
 */
export type Topic = $Result.DefaultSelection<Prisma.$TopicPayload>
/**
 * Model MatterTopic
 * 
 */
export type MatterTopic = $Result.DefaultSelection<Prisma.$MatterTopicPayload>
/**
 * Model SupervisorStat
 * Pre-computed "athlete" stats per supervisor for the leaderboard / dossier.
 */
export type SupervisorStat = $Result.DefaultSelection<Prisma.$SupervisorStatPayload>
/**
 * Model IngestLog
 * Bookkeeping for ingestion runs.
 */
export type IngestLog = $Result.DefaultSelection<Prisma.$IngestLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Supervisors
 * const supervisors = await prisma.supervisor.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Supervisors
   * const supervisors = await prisma.supervisor.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.supervisor`: Exposes CRUD operations for the **Supervisor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supervisors
    * const supervisors = await prisma.supervisor.findMany()
    * ```
    */
  get supervisor(): Prisma.SupervisorDelegate<ExtArgs>;

  /**
   * `prisma.matter`: Exposes CRUD operations for the **Matter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matters
    * const matters = await prisma.matter.findMany()
    * ```
    */
  get matter(): Prisma.MatterDelegate<ExtArgs>;

  /**
   * `prisma.matterAttachment`: Exposes CRUD operations for the **MatterAttachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatterAttachments
    * const matterAttachments = await prisma.matterAttachment.findMany()
    * ```
    */
  get matterAttachment(): Prisma.MatterAttachmentDelegate<ExtArgs>;

  /**
   * `prisma.matterRelation`: Exposes CRUD operations for the **MatterRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatterRelations
    * const matterRelations = await prisma.matterRelation.findMany()
    * ```
    */
  get matterRelation(): Prisma.MatterRelationDelegate<ExtArgs>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs>;

  /**
   * `prisma.action`: Exposes CRUD operations for the **Action** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actions
    * const actions = await prisma.action.findMany()
    * ```
    */
  get action(): Prisma.ActionDelegate<ExtArgs>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs>;

  /**
   * `prisma.sponsorship`: Exposes CRUD operations for the **Sponsorship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sponsorships
    * const sponsorships = await prisma.sponsorship.findMany()
    * ```
    */
  get sponsorship(): Prisma.SponsorshipDelegate<ExtArgs>;

  /**
   * `prisma.topic`: Exposes CRUD operations for the **Topic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Topics
    * const topics = await prisma.topic.findMany()
    * ```
    */
  get topic(): Prisma.TopicDelegate<ExtArgs>;

  /**
   * `prisma.matterTopic`: Exposes CRUD operations for the **MatterTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatterTopics
    * const matterTopics = await prisma.matterTopic.findMany()
    * ```
    */
  get matterTopic(): Prisma.MatterTopicDelegate<ExtArgs>;

  /**
   * `prisma.supervisorStat`: Exposes CRUD operations for the **SupervisorStat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupervisorStats
    * const supervisorStats = await prisma.supervisorStat.findMany()
    * ```
    */
  get supervisorStat(): Prisma.SupervisorStatDelegate<ExtArgs>;

  /**
   * `prisma.ingestLog`: Exposes CRUD operations for the **IngestLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IngestLogs
    * const ingestLogs = await prisma.ingestLog.findMany()
    * ```
    */
  get ingestLog(): Prisma.IngestLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Supervisor: 'Supervisor',
    Matter: 'Matter',
    MatterAttachment: 'MatterAttachment',
    MatterRelation: 'MatterRelation',
    Meeting: 'Meeting',
    Action: 'Action',
    Vote: 'Vote',
    Sponsorship: 'Sponsorship',
    Topic: 'Topic',
    MatterTopic: 'MatterTopic',
    SupervisorStat: 'SupervisorStat',
    IngestLog: 'IngestLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "supervisor" | "matter" | "matterAttachment" | "matterRelation" | "meeting" | "action" | "vote" | "sponsorship" | "topic" | "matterTopic" | "supervisorStat" | "ingestLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Supervisor: {
        payload: Prisma.$SupervisorPayload<ExtArgs>
        fields: Prisma.SupervisorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupervisorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupervisorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          findFirst: {
            args: Prisma.SupervisorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupervisorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          findMany: {
            args: Prisma.SupervisorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>[]
          }
          create: {
            args: Prisma.SupervisorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          createMany: {
            args: Prisma.SupervisorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupervisorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>[]
          }
          delete: {
            args: Prisma.SupervisorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          update: {
            args: Prisma.SupervisorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          deleteMany: {
            args: Prisma.SupervisorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupervisorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupervisorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorPayload>
          }
          aggregate: {
            args: Prisma.SupervisorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupervisor>
          }
          groupBy: {
            args: Prisma.SupervisorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupervisorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupervisorCountArgs<ExtArgs>
            result: $Utils.Optional<SupervisorCountAggregateOutputType> | number
          }
        }
      }
      Matter: {
        payload: Prisma.$MatterPayload<ExtArgs>
        fields: Prisma.MatterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload>
          }
          findFirst: {
            args: Prisma.MatterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload>
          }
          findMany: {
            args: Prisma.MatterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload>[]
          }
          create: {
            args: Prisma.MatterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload>
          }
          createMany: {
            args: Prisma.MatterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload>[]
          }
          delete: {
            args: Prisma.MatterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload>
          }
          update: {
            args: Prisma.MatterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload>
          }
          deleteMany: {
            args: Prisma.MatterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterPayload>
          }
          aggregate: {
            args: Prisma.MatterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatter>
          }
          groupBy: {
            args: Prisma.MatterGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatterCountArgs<ExtArgs>
            result: $Utils.Optional<MatterCountAggregateOutputType> | number
          }
        }
      }
      MatterAttachment: {
        payload: Prisma.$MatterAttachmentPayload<ExtArgs>
        fields: Prisma.MatterAttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatterAttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatterAttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload>
          }
          findFirst: {
            args: Prisma.MatterAttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatterAttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload>
          }
          findMany: {
            args: Prisma.MatterAttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload>[]
          }
          create: {
            args: Prisma.MatterAttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload>
          }
          createMany: {
            args: Prisma.MatterAttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatterAttachmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload>[]
          }
          delete: {
            args: Prisma.MatterAttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload>
          }
          update: {
            args: Prisma.MatterAttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload>
          }
          deleteMany: {
            args: Prisma.MatterAttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatterAttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatterAttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterAttachmentPayload>
          }
          aggregate: {
            args: Prisma.MatterAttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatterAttachment>
          }
          groupBy: {
            args: Prisma.MatterAttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatterAttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatterAttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<MatterAttachmentCountAggregateOutputType> | number
          }
        }
      }
      MatterRelation: {
        payload: Prisma.$MatterRelationPayload<ExtArgs>
        fields: Prisma.MatterRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatterRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatterRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload>
          }
          findFirst: {
            args: Prisma.MatterRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatterRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload>
          }
          findMany: {
            args: Prisma.MatterRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload>[]
          }
          create: {
            args: Prisma.MatterRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload>
          }
          createMany: {
            args: Prisma.MatterRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatterRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload>[]
          }
          delete: {
            args: Prisma.MatterRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload>
          }
          update: {
            args: Prisma.MatterRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload>
          }
          deleteMany: {
            args: Prisma.MatterRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatterRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatterRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterRelationPayload>
          }
          aggregate: {
            args: Prisma.MatterRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatterRelation>
          }
          groupBy: {
            args: Prisma.MatterRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatterRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatterRelationCountArgs<ExtArgs>
            result: $Utils.Optional<MatterRelationCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      Action: {
        payload: Prisma.$ActionPayload<ExtArgs>
        fields: Prisma.ActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findFirst: {
            args: Prisma.ActionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          findMany: {
            args: Prisma.ActionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          create: {
            args: Prisma.ActionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          createMany: {
            args: Prisma.ActionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>[]
          }
          delete: {
            args: Prisma.ActionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          update: {
            args: Prisma.ActionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          deleteMany: {
            args: Prisma.ActionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActionPayload>
          }
          aggregate: {
            args: Prisma.ActionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAction>
          }
          groupBy: {
            args: Prisma.ActionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActionCountArgs<ExtArgs>
            result: $Utils.Optional<ActionCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
      Sponsorship: {
        payload: Prisma.$SponsorshipPayload<ExtArgs>
        fields: Prisma.SponsorshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SponsorshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SponsorshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload>
          }
          findFirst: {
            args: Prisma.SponsorshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SponsorshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload>
          }
          findMany: {
            args: Prisma.SponsorshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload>[]
          }
          create: {
            args: Prisma.SponsorshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload>
          }
          createMany: {
            args: Prisma.SponsorshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SponsorshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload>[]
          }
          delete: {
            args: Prisma.SponsorshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload>
          }
          update: {
            args: Prisma.SponsorshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload>
          }
          deleteMany: {
            args: Prisma.SponsorshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SponsorshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SponsorshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorshipPayload>
          }
          aggregate: {
            args: Prisma.SponsorshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSponsorship>
          }
          groupBy: {
            args: Prisma.SponsorshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<SponsorshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.SponsorshipCountArgs<ExtArgs>
            result: $Utils.Optional<SponsorshipCountAggregateOutputType> | number
          }
        }
      }
      Topic: {
        payload: Prisma.$TopicPayload<ExtArgs>
        fields: Prisma.TopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findFirst: {
            args: Prisma.TopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          findMany: {
            args: Prisma.TopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          create: {
            args: Prisma.TopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          createMany: {
            args: Prisma.TopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>[]
          }
          delete: {
            args: Prisma.TopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          update: {
            args: Prisma.TopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          deleteMany: {
            args: Prisma.TopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicPayload>
          }
          aggregate: {
            args: Prisma.TopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopic>
          }
          groupBy: {
            args: Prisma.TopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicCountArgs<ExtArgs>
            result: $Utils.Optional<TopicCountAggregateOutputType> | number
          }
        }
      }
      MatterTopic: {
        payload: Prisma.$MatterTopicPayload<ExtArgs>
        fields: Prisma.MatterTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatterTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatterTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload>
          }
          findFirst: {
            args: Prisma.MatterTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatterTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload>
          }
          findMany: {
            args: Prisma.MatterTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload>[]
          }
          create: {
            args: Prisma.MatterTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload>
          }
          createMany: {
            args: Prisma.MatterTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatterTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload>[]
          }
          delete: {
            args: Prisma.MatterTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload>
          }
          update: {
            args: Prisma.MatterTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload>
          }
          deleteMany: {
            args: Prisma.MatterTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatterTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatterTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatterTopicPayload>
          }
          aggregate: {
            args: Prisma.MatterTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatterTopic>
          }
          groupBy: {
            args: Prisma.MatterTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatterTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatterTopicCountArgs<ExtArgs>
            result: $Utils.Optional<MatterTopicCountAggregateOutputType> | number
          }
        }
      }
      SupervisorStat: {
        payload: Prisma.$SupervisorStatPayload<ExtArgs>
        fields: Prisma.SupervisorStatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupervisorStatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupervisorStatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload>
          }
          findFirst: {
            args: Prisma.SupervisorStatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupervisorStatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload>
          }
          findMany: {
            args: Prisma.SupervisorStatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload>[]
          }
          create: {
            args: Prisma.SupervisorStatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload>
          }
          createMany: {
            args: Prisma.SupervisorStatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupervisorStatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload>[]
          }
          delete: {
            args: Prisma.SupervisorStatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload>
          }
          update: {
            args: Prisma.SupervisorStatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload>
          }
          deleteMany: {
            args: Prisma.SupervisorStatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupervisorStatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupervisorStatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupervisorStatPayload>
          }
          aggregate: {
            args: Prisma.SupervisorStatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupervisorStat>
          }
          groupBy: {
            args: Prisma.SupervisorStatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupervisorStatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupervisorStatCountArgs<ExtArgs>
            result: $Utils.Optional<SupervisorStatCountAggregateOutputType> | number
          }
        }
      }
      IngestLog: {
        payload: Prisma.$IngestLogPayload<ExtArgs>
        fields: Prisma.IngestLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngestLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngestLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          findFirst: {
            args: Prisma.IngestLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngestLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          findMany: {
            args: Prisma.IngestLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>[]
          }
          create: {
            args: Prisma.IngestLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          createMany: {
            args: Prisma.IngestLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngestLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>[]
          }
          delete: {
            args: Prisma.IngestLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          update: {
            args: Prisma.IngestLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          deleteMany: {
            args: Prisma.IngestLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngestLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IngestLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngestLogPayload>
          }
          aggregate: {
            args: Prisma.IngestLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngestLog>
          }
          groupBy: {
            args: Prisma.IngestLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngestLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngestLogCountArgs<ExtArgs>
            result: $Utils.Optional<IngestLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type SupervisorCountOutputType
   */

  export type SupervisorCountOutputType = {
    votes: number
    sponsorships: number
  }

  export type SupervisorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | SupervisorCountOutputTypeCountVotesArgs
    sponsorships?: boolean | SupervisorCountOutputTypeCountSponsorshipsArgs
  }

  // Custom InputTypes
  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorCountOutputType
     */
    select?: SupervisorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeCountSponsorshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorshipWhereInput
  }


  /**
   * Count Type MatterCountOutputType
   */

  export type MatterCountOutputType = {
    topics: number
    votes: number
    actions: number
    sponsorships: number
    attachments: number
    relationsFrom: number
    relationsTo: number
  }

  export type MatterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | MatterCountOutputTypeCountTopicsArgs
    votes?: boolean | MatterCountOutputTypeCountVotesArgs
    actions?: boolean | MatterCountOutputTypeCountActionsArgs
    sponsorships?: boolean | MatterCountOutputTypeCountSponsorshipsArgs
    attachments?: boolean | MatterCountOutputTypeCountAttachmentsArgs
    relationsFrom?: boolean | MatterCountOutputTypeCountRelationsFromArgs
    relationsTo?: boolean | MatterCountOutputTypeCountRelationsToArgs
  }

  // Custom InputTypes
  /**
   * MatterCountOutputType without action
   */
  export type MatterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterCountOutputType
     */
    select?: MatterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatterCountOutputType without action
   */
  export type MatterCountOutputTypeCountTopicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatterTopicWhereInput
  }

  /**
   * MatterCountOutputType without action
   */
  export type MatterCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }

  /**
   * MatterCountOutputType without action
   */
  export type MatterCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }

  /**
   * MatterCountOutputType without action
   */
  export type MatterCountOutputTypeCountSponsorshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorshipWhereInput
  }

  /**
   * MatterCountOutputType without action
   */
  export type MatterCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatterAttachmentWhereInput
  }

  /**
   * MatterCountOutputType without action
   */
  export type MatterCountOutputTypeCountRelationsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatterRelationWhereInput
  }

  /**
   * MatterCountOutputType without action
   */
  export type MatterCountOutputTypeCountRelationsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatterRelationWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    actions: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | MeetingCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
  }


  /**
   * Count Type ActionCountOutputType
   */

  export type ActionCountOutputType = {
    votes: number
  }

  export type ActionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | ActionCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * ActionCountOutputType without action
   */
  export type ActionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActionCountOutputType
     */
    select?: ActionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActionCountOutputType without action
   */
  export type ActionCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Count Type TopicCountOutputType
   */

  export type TopicCountOutputType = {
    matters: number
  }

  export type TopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matters?: boolean | TopicCountOutputTypeCountMattersArgs
  }

  // Custom InputTypes
  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicCountOutputType
     */
    select?: TopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicCountOutputType without action
   */
  export type TopicCountOutputTypeCountMattersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatterTopicWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Supervisor
   */

  export type AggregateSupervisor = {
    _count: SupervisorCountAggregateOutputType | null
    _avg: SupervisorAvgAggregateOutputType | null
    _sum: SupervisorSumAggregateOutputType | null
    _min: SupervisorMinAggregateOutputType | null
    _max: SupervisorMaxAggregateOutputType | null
  }

  export type SupervisorAvgAggregateOutputType = {
    id: number | null
    legistarId: number | null
    district: number | null
  }

  export type SupervisorSumAggregateOutputType = {
    id: number | null
    legistarId: number | null
    district: number | null
  }

  export type SupervisorMinAggregateOutputType = {
    id: number | null
    legistarId: number | null
    slug: string | null
    fullName: string | null
    district: number | null
    title: string | null
    party: string | null
    active: boolean | null
    photoUrl: string | null
    bio: string | null
    email: string | null
    website: string | null
    termStart: Date | null
    termEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupervisorMaxAggregateOutputType = {
    id: number | null
    legistarId: number | null
    slug: string | null
    fullName: string | null
    district: number | null
    title: string | null
    party: string | null
    active: boolean | null
    photoUrl: string | null
    bio: string | null
    email: string | null
    website: string | null
    termStart: Date | null
    termEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupervisorCountAggregateOutputType = {
    id: number
    legistarId: number
    slug: number
    fullName: number
    district: number
    title: number
    party: number
    active: number
    photoUrl: number
    bio: number
    email: number
    website: number
    termStart: number
    termEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupervisorAvgAggregateInputType = {
    id?: true
    legistarId?: true
    district?: true
  }

  export type SupervisorSumAggregateInputType = {
    id?: true
    legistarId?: true
    district?: true
  }

  export type SupervisorMinAggregateInputType = {
    id?: true
    legistarId?: true
    slug?: true
    fullName?: true
    district?: true
    title?: true
    party?: true
    active?: true
    photoUrl?: true
    bio?: true
    email?: true
    website?: true
    termStart?: true
    termEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupervisorMaxAggregateInputType = {
    id?: true
    legistarId?: true
    slug?: true
    fullName?: true
    district?: true
    title?: true
    party?: true
    active?: true
    photoUrl?: true
    bio?: true
    email?: true
    website?: true
    termStart?: true
    termEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupervisorCountAggregateInputType = {
    id?: true
    legistarId?: true
    slug?: true
    fullName?: true
    district?: true
    title?: true
    party?: true
    active?: true
    photoUrl?: true
    bio?: true
    email?: true
    website?: true
    termStart?: true
    termEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupervisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supervisor to aggregate.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Supervisors
    **/
    _count?: true | SupervisorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupervisorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupervisorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupervisorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupervisorMaxAggregateInputType
  }

  export type GetSupervisorAggregateType<T extends SupervisorAggregateArgs> = {
        [P in keyof T & keyof AggregateSupervisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupervisor[P]>
      : GetScalarType<T[P], AggregateSupervisor[P]>
  }




  export type SupervisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisorWhereInput
    orderBy?: SupervisorOrderByWithAggregationInput | SupervisorOrderByWithAggregationInput[]
    by: SupervisorScalarFieldEnum[] | SupervisorScalarFieldEnum
    having?: SupervisorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupervisorCountAggregateInputType | true
    _avg?: SupervisorAvgAggregateInputType
    _sum?: SupervisorSumAggregateInputType
    _min?: SupervisorMinAggregateInputType
    _max?: SupervisorMaxAggregateInputType
  }

  export type SupervisorGroupByOutputType = {
    id: number
    legistarId: number | null
    slug: string
    fullName: string
    district: number | null
    title: string | null
    party: string | null
    active: boolean
    photoUrl: string | null
    bio: string | null
    email: string | null
    website: string | null
    termStart: Date | null
    termEnd: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SupervisorCountAggregateOutputType | null
    _avg: SupervisorAvgAggregateOutputType | null
    _sum: SupervisorSumAggregateOutputType | null
    _min: SupervisorMinAggregateOutputType | null
    _max: SupervisorMaxAggregateOutputType | null
  }

  type GetSupervisorGroupByPayload<T extends SupervisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupervisorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupervisorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupervisorGroupByOutputType[P]>
            : GetScalarType<T[P], SupervisorGroupByOutputType[P]>
        }
      >
    >


  export type SupervisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legistarId?: boolean
    slug?: boolean
    fullName?: boolean
    district?: boolean
    title?: boolean
    party?: boolean
    active?: boolean
    photoUrl?: boolean
    bio?: boolean
    email?: boolean
    website?: boolean
    termStart?: boolean
    termEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    votes?: boolean | Supervisor$votesArgs<ExtArgs>
    sponsorships?: boolean | Supervisor$sponsorshipsArgs<ExtArgs>
    stats?: boolean | Supervisor$statsArgs<ExtArgs>
    _count?: boolean | SupervisorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisor"]>

  export type SupervisorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legistarId?: boolean
    slug?: boolean
    fullName?: boolean
    district?: boolean
    title?: boolean
    party?: boolean
    active?: boolean
    photoUrl?: boolean
    bio?: boolean
    email?: boolean
    website?: boolean
    termStart?: boolean
    termEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supervisor"]>

  export type SupervisorSelectScalar = {
    id?: boolean
    legistarId?: boolean
    slug?: boolean
    fullName?: boolean
    district?: boolean
    title?: boolean
    party?: boolean
    active?: boolean
    photoUrl?: boolean
    bio?: boolean
    email?: boolean
    website?: boolean
    termStart?: boolean
    termEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupervisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | Supervisor$votesArgs<ExtArgs>
    sponsorships?: boolean | Supervisor$sponsorshipsArgs<ExtArgs>
    stats?: boolean | Supervisor$statsArgs<ExtArgs>
    _count?: boolean | SupervisorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupervisorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupervisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supervisor"
    objects: {
      votes: Prisma.$VotePayload<ExtArgs>[]
      sponsorships: Prisma.$SponsorshipPayload<ExtArgs>[]
      stats: Prisma.$SupervisorStatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      legistarId: number | null
      slug: string
      fullName: string
      district: number | null
      title: string | null
      party: string | null
      active: boolean
      photoUrl: string | null
      bio: string | null
      email: string | null
      website: string | null
      termStart: Date | null
      termEnd: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supervisor"]>
    composites: {}
  }

  type SupervisorGetPayload<S extends boolean | null | undefined | SupervisorDefaultArgs> = $Result.GetResult<Prisma.$SupervisorPayload, S>

  type SupervisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupervisorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupervisorCountAggregateInputType | true
    }

  export interface SupervisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supervisor'], meta: { name: 'Supervisor' } }
    /**
     * Find zero or one Supervisor that matches the filter.
     * @param {SupervisorFindUniqueArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupervisorFindUniqueArgs>(args: SelectSubset<T, SupervisorFindUniqueArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Supervisor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupervisorFindUniqueOrThrowArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupervisorFindUniqueOrThrowArgs>(args: SelectSubset<T, SupervisorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Supervisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFindFirstArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupervisorFindFirstArgs>(args?: SelectSubset<T, SupervisorFindFirstArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Supervisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFindFirstOrThrowArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupervisorFindFirstOrThrowArgs>(args?: SelectSubset<T, SupervisorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Supervisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supervisors
     * const supervisors = await prisma.supervisor.findMany()
     * 
     * // Get first 10 Supervisors
     * const supervisors = await prisma.supervisor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supervisorWithIdOnly = await prisma.supervisor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupervisorFindManyArgs>(args?: SelectSubset<T, SupervisorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Supervisor.
     * @param {SupervisorCreateArgs} args - Arguments to create a Supervisor.
     * @example
     * // Create one Supervisor
     * const Supervisor = await prisma.supervisor.create({
     *   data: {
     *     // ... data to create a Supervisor
     *   }
     * })
     * 
     */
    create<T extends SupervisorCreateArgs>(args: SelectSubset<T, SupervisorCreateArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Supervisors.
     * @param {SupervisorCreateManyArgs} args - Arguments to create many Supervisors.
     * @example
     * // Create many Supervisors
     * const supervisor = await prisma.supervisor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupervisorCreateManyArgs>(args?: SelectSubset<T, SupervisorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supervisors and returns the data saved in the database.
     * @param {SupervisorCreateManyAndReturnArgs} args - Arguments to create many Supervisors.
     * @example
     * // Create many Supervisors
     * const supervisor = await prisma.supervisor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supervisors and only return the `id`
     * const supervisorWithIdOnly = await prisma.supervisor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupervisorCreateManyAndReturnArgs>(args?: SelectSubset<T, SupervisorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Supervisor.
     * @param {SupervisorDeleteArgs} args - Arguments to delete one Supervisor.
     * @example
     * // Delete one Supervisor
     * const Supervisor = await prisma.supervisor.delete({
     *   where: {
     *     // ... filter to delete one Supervisor
     *   }
     * })
     * 
     */
    delete<T extends SupervisorDeleteArgs>(args: SelectSubset<T, SupervisorDeleteArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Supervisor.
     * @param {SupervisorUpdateArgs} args - Arguments to update one Supervisor.
     * @example
     * // Update one Supervisor
     * const supervisor = await prisma.supervisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupervisorUpdateArgs>(args: SelectSubset<T, SupervisorUpdateArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Supervisors.
     * @param {SupervisorDeleteManyArgs} args - Arguments to filter Supervisors to delete.
     * @example
     * // Delete a few Supervisors
     * const { count } = await prisma.supervisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupervisorDeleteManyArgs>(args?: SelectSubset<T, SupervisorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supervisors
     * const supervisor = await prisma.supervisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupervisorUpdateManyArgs>(args: SelectSubset<T, SupervisorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supervisor.
     * @param {SupervisorUpsertArgs} args - Arguments to update or create a Supervisor.
     * @example
     * // Update or create a Supervisor
     * const supervisor = await prisma.supervisor.upsert({
     *   create: {
     *     // ... data to create a Supervisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supervisor we want to update
     *   }
     * })
     */
    upsert<T extends SupervisorUpsertArgs>(args: SelectSubset<T, SupervisorUpsertArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorCountArgs} args - Arguments to filter Supervisors to count.
     * @example
     * // Count the number of Supervisors
     * const count = await prisma.supervisor.count({
     *   where: {
     *     // ... the filter for the Supervisors we want to count
     *   }
     * })
    **/
    count<T extends SupervisorCountArgs>(
      args?: Subset<T, SupervisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupervisorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupervisorAggregateArgs>(args: Subset<T, SupervisorAggregateArgs>): Prisma.PrismaPromise<GetSupervisorAggregateType<T>>

    /**
     * Group by Supervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupervisorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupervisorGroupByArgs['orderBy'] }
        : { orderBy?: SupervisorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupervisorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supervisor model
   */
  readonly fields: SupervisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supervisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupervisorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    votes<T extends Supervisor$votesArgs<ExtArgs> = {}>(args?: Subset<T, Supervisor$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany"> | Null>
    sponsorships<T extends Supervisor$sponsorshipsArgs<ExtArgs> = {}>(args?: Subset<T, Supervisor$sponsorshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "findMany"> | Null>
    stats<T extends Supervisor$statsArgs<ExtArgs> = {}>(args?: Subset<T, Supervisor$statsArgs<ExtArgs>>): Prisma__SupervisorStatClient<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supervisor model
   */ 
  interface SupervisorFieldRefs {
    readonly id: FieldRef<"Supervisor", 'Int'>
    readonly legistarId: FieldRef<"Supervisor", 'Int'>
    readonly slug: FieldRef<"Supervisor", 'String'>
    readonly fullName: FieldRef<"Supervisor", 'String'>
    readonly district: FieldRef<"Supervisor", 'Int'>
    readonly title: FieldRef<"Supervisor", 'String'>
    readonly party: FieldRef<"Supervisor", 'String'>
    readonly active: FieldRef<"Supervisor", 'Boolean'>
    readonly photoUrl: FieldRef<"Supervisor", 'String'>
    readonly bio: FieldRef<"Supervisor", 'String'>
    readonly email: FieldRef<"Supervisor", 'String'>
    readonly website: FieldRef<"Supervisor", 'String'>
    readonly termStart: FieldRef<"Supervisor", 'DateTime'>
    readonly termEnd: FieldRef<"Supervisor", 'DateTime'>
    readonly createdAt: FieldRef<"Supervisor", 'DateTime'>
    readonly updatedAt: FieldRef<"Supervisor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supervisor findUnique
   */
  export type SupervisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor findUniqueOrThrow
   */
  export type SupervisorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor findFirst
   */
  export type SupervisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supervisors.
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supervisors.
     */
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor findFirstOrThrow
   */
  export type SupervisorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisor to fetch.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supervisors.
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supervisors.
     */
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor findMany
   */
  export type SupervisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter, which Supervisors to fetch.
     */
    where?: SupervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supervisors to fetch.
     */
    orderBy?: SupervisorOrderByWithRelationInput | SupervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Supervisors.
     */
    cursor?: SupervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supervisors.
     */
    skip?: number
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * Supervisor create
   */
  export type SupervisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * The data needed to create a Supervisor.
     */
    data: XOR<SupervisorCreateInput, SupervisorUncheckedCreateInput>
  }

  /**
   * Supervisor createMany
   */
  export type SupervisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Supervisors.
     */
    data: SupervisorCreateManyInput | SupervisorCreateManyInput[]
  }

  /**
   * Supervisor createManyAndReturn
   */
  export type SupervisorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Supervisors.
     */
    data: SupervisorCreateManyInput | SupervisorCreateManyInput[]
  }

  /**
   * Supervisor update
   */
  export type SupervisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * The data needed to update a Supervisor.
     */
    data: XOR<SupervisorUpdateInput, SupervisorUncheckedUpdateInput>
    /**
     * Choose, which Supervisor to update.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor updateMany
   */
  export type SupervisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Supervisors.
     */
    data: XOR<SupervisorUpdateManyMutationInput, SupervisorUncheckedUpdateManyInput>
    /**
     * Filter which Supervisors to update
     */
    where?: SupervisorWhereInput
  }

  /**
   * Supervisor upsert
   */
  export type SupervisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * The filter to search for the Supervisor to update in case it exists.
     */
    where: SupervisorWhereUniqueInput
    /**
     * In case the Supervisor found by the `where` argument doesn't exist, create a new Supervisor with this data.
     */
    create: XOR<SupervisorCreateInput, SupervisorUncheckedCreateInput>
    /**
     * In case the Supervisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupervisorUpdateInput, SupervisorUncheckedUpdateInput>
  }

  /**
   * Supervisor delete
   */
  export type SupervisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
    /**
     * Filter which Supervisor to delete.
     */
    where: SupervisorWhereUniqueInput
  }

  /**
   * Supervisor deleteMany
   */
  export type SupervisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supervisors to delete
     */
    where?: SupervisorWhereInput
  }

  /**
   * Supervisor.votes
   */
  export type Supervisor$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Supervisor.sponsorships
   */
  export type Supervisor$sponsorshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    where?: SponsorshipWhereInput
    orderBy?: SponsorshipOrderByWithRelationInput | SponsorshipOrderByWithRelationInput[]
    cursor?: SponsorshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * Supervisor.stats
   */
  export type Supervisor$statsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    where?: SupervisorStatWhereInput
  }

  /**
   * Supervisor without action
   */
  export type SupervisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supervisor
     */
    select?: SupervisorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorInclude<ExtArgs> | null
  }


  /**
   * Model Matter
   */

  export type AggregateMatter = {
    _count: MatterCountAggregateOutputType | null
    _avg: MatterAvgAggregateOutputType | null
    _sum: MatterSumAggregateOutputType | null
    _min: MatterMinAggregateOutputType | null
    _max: MatterMaxAggregateOutputType | null
  }

  export type MatterAvgAggregateOutputType = {
    id: number | null
    legistarId: number | null
    importance: number | null
  }

  export type MatterSumAggregateOutputType = {
    id: number | null
    legistarId: number | null
    importance: number | null
  }

  export type MatterMinAggregateOutputType = {
    id: number | null
    legistarId: number | null
    legistarGuid: string | null
    file: string | null
    type: string | null
    status: string | null
    title: string | null
    summary: string | null
    summarySource: string | null
    fullText: string | null
    introDate: Date | null
    finalDate: Date | null
    sourceUrl: string | null
    inControl: string | null
    originTimeline: string | null
    originGeneratedAt: Date | null
    importance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatterMaxAggregateOutputType = {
    id: number | null
    legistarId: number | null
    legistarGuid: string | null
    file: string | null
    type: string | null
    status: string | null
    title: string | null
    summary: string | null
    summarySource: string | null
    fullText: string | null
    introDate: Date | null
    finalDate: Date | null
    sourceUrl: string | null
    inControl: string | null
    originTimeline: string | null
    originGeneratedAt: Date | null
    importance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatterCountAggregateOutputType = {
    id: number
    legistarId: number
    legistarGuid: number
    file: number
    type: number
    status: number
    title: number
    summary: number
    summarySource: number
    fullText: number
    introDate: number
    finalDate: number
    sourceUrl: number
    inControl: number
    originTimeline: number
    originGeneratedAt: number
    importance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatterAvgAggregateInputType = {
    id?: true
    legistarId?: true
    importance?: true
  }

  export type MatterSumAggregateInputType = {
    id?: true
    legistarId?: true
    importance?: true
  }

  export type MatterMinAggregateInputType = {
    id?: true
    legistarId?: true
    legistarGuid?: true
    file?: true
    type?: true
    status?: true
    title?: true
    summary?: true
    summarySource?: true
    fullText?: true
    introDate?: true
    finalDate?: true
    sourceUrl?: true
    inControl?: true
    originTimeline?: true
    originGeneratedAt?: true
    importance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatterMaxAggregateInputType = {
    id?: true
    legistarId?: true
    legistarGuid?: true
    file?: true
    type?: true
    status?: true
    title?: true
    summary?: true
    summarySource?: true
    fullText?: true
    introDate?: true
    finalDate?: true
    sourceUrl?: true
    inControl?: true
    originTimeline?: true
    originGeneratedAt?: true
    importance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatterCountAggregateInputType = {
    id?: true
    legistarId?: true
    legistarGuid?: true
    file?: true
    type?: true
    status?: true
    title?: true
    summary?: true
    summarySource?: true
    fullText?: true
    introDate?: true
    finalDate?: true
    sourceUrl?: true
    inControl?: true
    originTimeline?: true
    originGeneratedAt?: true
    importance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matter to aggregate.
     */
    where?: MatterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matters to fetch.
     */
    orderBy?: MatterOrderByWithRelationInput | MatterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matters
    **/
    _count?: true | MatterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatterMaxAggregateInputType
  }

  export type GetMatterAggregateType<T extends MatterAggregateArgs> = {
        [P in keyof T & keyof AggregateMatter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatter[P]>
      : GetScalarType<T[P], AggregateMatter[P]>
  }




  export type MatterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatterWhereInput
    orderBy?: MatterOrderByWithAggregationInput | MatterOrderByWithAggregationInput[]
    by: MatterScalarFieldEnum[] | MatterScalarFieldEnum
    having?: MatterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatterCountAggregateInputType | true
    _avg?: MatterAvgAggregateInputType
    _sum?: MatterSumAggregateInputType
    _min?: MatterMinAggregateInputType
    _max?: MatterMaxAggregateInputType
  }

  export type MatterGroupByOutputType = {
    id: number
    legistarId: number
    legistarGuid: string | null
    file: string | null
    type: string | null
    status: string | null
    title: string
    summary: string | null
    summarySource: string | null
    fullText: string | null
    introDate: Date | null
    finalDate: Date | null
    sourceUrl: string | null
    inControl: string | null
    originTimeline: string | null
    originGeneratedAt: Date | null
    importance: number | null
    createdAt: Date
    updatedAt: Date
    _count: MatterCountAggregateOutputType | null
    _avg: MatterAvgAggregateOutputType | null
    _sum: MatterSumAggregateOutputType | null
    _min: MatterMinAggregateOutputType | null
    _max: MatterMaxAggregateOutputType | null
  }

  type GetMatterGroupByPayload<T extends MatterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatterGroupByOutputType[P]>
            : GetScalarType<T[P], MatterGroupByOutputType[P]>
        }
      >
    >


  export type MatterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legistarId?: boolean
    legistarGuid?: boolean
    file?: boolean
    type?: boolean
    status?: boolean
    title?: boolean
    summary?: boolean
    summarySource?: boolean
    fullText?: boolean
    introDate?: boolean
    finalDate?: boolean
    sourceUrl?: boolean
    inControl?: boolean
    originTimeline?: boolean
    originGeneratedAt?: boolean
    importance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    topics?: boolean | Matter$topicsArgs<ExtArgs>
    votes?: boolean | Matter$votesArgs<ExtArgs>
    actions?: boolean | Matter$actionsArgs<ExtArgs>
    sponsorships?: boolean | Matter$sponsorshipsArgs<ExtArgs>
    attachments?: boolean | Matter$attachmentsArgs<ExtArgs>
    relationsFrom?: boolean | Matter$relationsFromArgs<ExtArgs>
    relationsTo?: boolean | Matter$relationsToArgs<ExtArgs>
    _count?: boolean | MatterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matter"]>

  export type MatterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legistarId?: boolean
    legistarGuid?: boolean
    file?: boolean
    type?: boolean
    status?: boolean
    title?: boolean
    summary?: boolean
    summarySource?: boolean
    fullText?: boolean
    introDate?: boolean
    finalDate?: boolean
    sourceUrl?: boolean
    inControl?: boolean
    originTimeline?: boolean
    originGeneratedAt?: boolean
    importance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["matter"]>

  export type MatterSelectScalar = {
    id?: boolean
    legistarId?: boolean
    legistarGuid?: boolean
    file?: boolean
    type?: boolean
    status?: boolean
    title?: boolean
    summary?: boolean
    summarySource?: boolean
    fullText?: boolean
    introDate?: boolean
    finalDate?: boolean
    sourceUrl?: boolean
    inControl?: boolean
    originTimeline?: boolean
    originGeneratedAt?: boolean
    importance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topics?: boolean | Matter$topicsArgs<ExtArgs>
    votes?: boolean | Matter$votesArgs<ExtArgs>
    actions?: boolean | Matter$actionsArgs<ExtArgs>
    sponsorships?: boolean | Matter$sponsorshipsArgs<ExtArgs>
    attachments?: boolean | Matter$attachmentsArgs<ExtArgs>
    relationsFrom?: boolean | Matter$relationsFromArgs<ExtArgs>
    relationsTo?: boolean | Matter$relationsToArgs<ExtArgs>
    _count?: boolean | MatterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MatterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Matter"
    objects: {
      topics: Prisma.$MatterTopicPayload<ExtArgs>[]
      votes: Prisma.$VotePayload<ExtArgs>[]
      actions: Prisma.$ActionPayload<ExtArgs>[]
      sponsorships: Prisma.$SponsorshipPayload<ExtArgs>[]
      attachments: Prisma.$MatterAttachmentPayload<ExtArgs>[]
      relationsFrom: Prisma.$MatterRelationPayload<ExtArgs>[]
      relationsTo: Prisma.$MatterRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      legistarId: number
      legistarGuid: string | null
      file: string | null
      type: string | null
      status: string | null
      title: string
      summary: string | null
      summarySource: string | null
      fullText: string | null
      introDate: Date | null
      finalDate: Date | null
      sourceUrl: string | null
      inControl: string | null
      originTimeline: string | null
      originGeneratedAt: Date | null
      importance: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matter"]>
    composites: {}
  }

  type MatterGetPayload<S extends boolean | null | undefined | MatterDefaultArgs> = $Result.GetResult<Prisma.$MatterPayload, S>

  type MatterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatterCountAggregateInputType | true
    }

  export interface MatterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Matter'], meta: { name: 'Matter' } }
    /**
     * Find zero or one Matter that matches the filter.
     * @param {MatterFindUniqueArgs} args - Arguments to find a Matter
     * @example
     * // Get one Matter
     * const matter = await prisma.matter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatterFindUniqueArgs>(args: SelectSubset<T, MatterFindUniqueArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Matter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatterFindUniqueOrThrowArgs} args - Arguments to find a Matter
     * @example
     * // Get one Matter
     * const matter = await prisma.matter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatterFindUniqueOrThrowArgs>(args: SelectSubset<T, MatterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Matter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterFindFirstArgs} args - Arguments to find a Matter
     * @example
     * // Get one Matter
     * const matter = await prisma.matter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatterFindFirstArgs>(args?: SelectSubset<T, MatterFindFirstArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Matter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterFindFirstOrThrowArgs} args - Arguments to find a Matter
     * @example
     * // Get one Matter
     * const matter = await prisma.matter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatterFindFirstOrThrowArgs>(args?: SelectSubset<T, MatterFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Matters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matters
     * const matters = await prisma.matter.findMany()
     * 
     * // Get first 10 Matters
     * const matters = await prisma.matter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matterWithIdOnly = await prisma.matter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatterFindManyArgs>(args?: SelectSubset<T, MatterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Matter.
     * @param {MatterCreateArgs} args - Arguments to create a Matter.
     * @example
     * // Create one Matter
     * const Matter = await prisma.matter.create({
     *   data: {
     *     // ... data to create a Matter
     *   }
     * })
     * 
     */
    create<T extends MatterCreateArgs>(args: SelectSubset<T, MatterCreateArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Matters.
     * @param {MatterCreateManyArgs} args - Arguments to create many Matters.
     * @example
     * // Create many Matters
     * const matter = await prisma.matter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatterCreateManyArgs>(args?: SelectSubset<T, MatterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matters and returns the data saved in the database.
     * @param {MatterCreateManyAndReturnArgs} args - Arguments to create many Matters.
     * @example
     * // Create many Matters
     * const matter = await prisma.matter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matters and only return the `id`
     * const matterWithIdOnly = await prisma.matter.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatterCreateManyAndReturnArgs>(args?: SelectSubset<T, MatterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Matter.
     * @param {MatterDeleteArgs} args - Arguments to delete one Matter.
     * @example
     * // Delete one Matter
     * const Matter = await prisma.matter.delete({
     *   where: {
     *     // ... filter to delete one Matter
     *   }
     * })
     * 
     */
    delete<T extends MatterDeleteArgs>(args: SelectSubset<T, MatterDeleteArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Matter.
     * @param {MatterUpdateArgs} args - Arguments to update one Matter.
     * @example
     * // Update one Matter
     * const matter = await prisma.matter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatterUpdateArgs>(args: SelectSubset<T, MatterUpdateArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Matters.
     * @param {MatterDeleteManyArgs} args - Arguments to filter Matters to delete.
     * @example
     * // Delete a few Matters
     * const { count } = await prisma.matter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatterDeleteManyArgs>(args?: SelectSubset<T, MatterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matters
     * const matter = await prisma.matter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatterUpdateManyArgs>(args: SelectSubset<T, MatterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Matter.
     * @param {MatterUpsertArgs} args - Arguments to update or create a Matter.
     * @example
     * // Update or create a Matter
     * const matter = await prisma.matter.upsert({
     *   create: {
     *     // ... data to create a Matter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matter we want to update
     *   }
     * })
     */
    upsert<T extends MatterUpsertArgs>(args: SelectSubset<T, MatterUpsertArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Matters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterCountArgs} args - Arguments to filter Matters to count.
     * @example
     * // Count the number of Matters
     * const count = await prisma.matter.count({
     *   where: {
     *     // ... the filter for the Matters we want to count
     *   }
     * })
    **/
    count<T extends MatterCountArgs>(
      args?: Subset<T, MatterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatterAggregateArgs>(args: Subset<T, MatterAggregateArgs>): Prisma.PrismaPromise<GetMatterAggregateType<T>>

    /**
     * Group by Matter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatterGroupByArgs['orderBy'] }
        : { orderBy?: MatterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Matter model
   */
  readonly fields: MatterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Matter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    topics<T extends Matter$topicsArgs<ExtArgs> = {}>(args?: Subset<T, Matter$topicsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "findMany"> | Null>
    votes<T extends Matter$votesArgs<ExtArgs> = {}>(args?: Subset<T, Matter$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany"> | Null>
    actions<T extends Matter$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Matter$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany"> | Null>
    sponsorships<T extends Matter$sponsorshipsArgs<ExtArgs> = {}>(args?: Subset<T, Matter$sponsorshipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "findMany"> | Null>
    attachments<T extends Matter$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Matter$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "findMany"> | Null>
    relationsFrom<T extends Matter$relationsFromArgs<ExtArgs> = {}>(args?: Subset<T, Matter$relationsFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "findMany"> | Null>
    relationsTo<T extends Matter$relationsToArgs<ExtArgs> = {}>(args?: Subset<T, Matter$relationsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Matter model
   */ 
  interface MatterFieldRefs {
    readonly id: FieldRef<"Matter", 'Int'>
    readonly legistarId: FieldRef<"Matter", 'Int'>
    readonly legistarGuid: FieldRef<"Matter", 'String'>
    readonly file: FieldRef<"Matter", 'String'>
    readonly type: FieldRef<"Matter", 'String'>
    readonly status: FieldRef<"Matter", 'String'>
    readonly title: FieldRef<"Matter", 'String'>
    readonly summary: FieldRef<"Matter", 'String'>
    readonly summarySource: FieldRef<"Matter", 'String'>
    readonly fullText: FieldRef<"Matter", 'String'>
    readonly introDate: FieldRef<"Matter", 'DateTime'>
    readonly finalDate: FieldRef<"Matter", 'DateTime'>
    readonly sourceUrl: FieldRef<"Matter", 'String'>
    readonly inControl: FieldRef<"Matter", 'String'>
    readonly originTimeline: FieldRef<"Matter", 'String'>
    readonly originGeneratedAt: FieldRef<"Matter", 'DateTime'>
    readonly importance: FieldRef<"Matter", 'Float'>
    readonly createdAt: FieldRef<"Matter", 'DateTime'>
    readonly updatedAt: FieldRef<"Matter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Matter findUnique
   */
  export type MatterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    /**
     * Filter, which Matter to fetch.
     */
    where: MatterWhereUniqueInput
  }

  /**
   * Matter findUniqueOrThrow
   */
  export type MatterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    /**
     * Filter, which Matter to fetch.
     */
    where: MatterWhereUniqueInput
  }

  /**
   * Matter findFirst
   */
  export type MatterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    /**
     * Filter, which Matter to fetch.
     */
    where?: MatterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matters to fetch.
     */
    orderBy?: MatterOrderByWithRelationInput | MatterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matters.
     */
    cursor?: MatterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matters.
     */
    distinct?: MatterScalarFieldEnum | MatterScalarFieldEnum[]
  }

  /**
   * Matter findFirstOrThrow
   */
  export type MatterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    /**
     * Filter, which Matter to fetch.
     */
    where?: MatterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matters to fetch.
     */
    orderBy?: MatterOrderByWithRelationInput | MatterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matters.
     */
    cursor?: MatterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matters.
     */
    distinct?: MatterScalarFieldEnum | MatterScalarFieldEnum[]
  }

  /**
   * Matter findMany
   */
  export type MatterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    /**
     * Filter, which Matters to fetch.
     */
    where?: MatterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matters to fetch.
     */
    orderBy?: MatterOrderByWithRelationInput | MatterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matters.
     */
    cursor?: MatterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matters.
     */
    skip?: number
    distinct?: MatterScalarFieldEnum | MatterScalarFieldEnum[]
  }

  /**
   * Matter create
   */
  export type MatterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    /**
     * The data needed to create a Matter.
     */
    data: XOR<MatterCreateInput, MatterUncheckedCreateInput>
  }

  /**
   * Matter createMany
   */
  export type MatterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matters.
     */
    data: MatterCreateManyInput | MatterCreateManyInput[]
  }

  /**
   * Matter createManyAndReturn
   */
  export type MatterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Matters.
     */
    data: MatterCreateManyInput | MatterCreateManyInput[]
  }

  /**
   * Matter update
   */
  export type MatterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    /**
     * The data needed to update a Matter.
     */
    data: XOR<MatterUpdateInput, MatterUncheckedUpdateInput>
    /**
     * Choose, which Matter to update.
     */
    where: MatterWhereUniqueInput
  }

  /**
   * Matter updateMany
   */
  export type MatterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matters.
     */
    data: XOR<MatterUpdateManyMutationInput, MatterUncheckedUpdateManyInput>
    /**
     * Filter which Matters to update
     */
    where?: MatterWhereInput
  }

  /**
   * Matter upsert
   */
  export type MatterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    /**
     * The filter to search for the Matter to update in case it exists.
     */
    where: MatterWhereUniqueInput
    /**
     * In case the Matter found by the `where` argument doesn't exist, create a new Matter with this data.
     */
    create: XOR<MatterCreateInput, MatterUncheckedCreateInput>
    /**
     * In case the Matter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatterUpdateInput, MatterUncheckedUpdateInput>
  }

  /**
   * Matter delete
   */
  export type MatterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    /**
     * Filter which Matter to delete.
     */
    where: MatterWhereUniqueInput
  }

  /**
   * Matter deleteMany
   */
  export type MatterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matters to delete
     */
    where?: MatterWhereInput
  }

  /**
   * Matter.topics
   */
  export type Matter$topicsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    where?: MatterTopicWhereInput
    orderBy?: MatterTopicOrderByWithRelationInput | MatterTopicOrderByWithRelationInput[]
    cursor?: MatterTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatterTopicScalarFieldEnum | MatterTopicScalarFieldEnum[]
  }

  /**
   * Matter.votes
   */
  export type Matter$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Matter.actions
   */
  export type Matter$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Matter.sponsorships
   */
  export type Matter$sponsorshipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    where?: SponsorshipWhereInput
    orderBy?: SponsorshipOrderByWithRelationInput | SponsorshipOrderByWithRelationInput[]
    cursor?: SponsorshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * Matter.attachments
   */
  export type Matter$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    where?: MatterAttachmentWhereInput
    orderBy?: MatterAttachmentOrderByWithRelationInput | MatterAttachmentOrderByWithRelationInput[]
    cursor?: MatterAttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatterAttachmentScalarFieldEnum | MatterAttachmentScalarFieldEnum[]
  }

  /**
   * Matter.relationsFrom
   */
  export type Matter$relationsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    where?: MatterRelationWhereInput
    orderBy?: MatterRelationOrderByWithRelationInput | MatterRelationOrderByWithRelationInput[]
    cursor?: MatterRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatterRelationScalarFieldEnum | MatterRelationScalarFieldEnum[]
  }

  /**
   * Matter.relationsTo
   */
  export type Matter$relationsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    where?: MatterRelationWhereInput
    orderBy?: MatterRelationOrderByWithRelationInput | MatterRelationOrderByWithRelationInput[]
    cursor?: MatterRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatterRelationScalarFieldEnum | MatterRelationScalarFieldEnum[]
  }

  /**
   * Matter without action
   */
  export type MatterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
  }


  /**
   * Model MatterAttachment
   */

  export type AggregateMatterAttachment = {
    _count: MatterAttachmentCountAggregateOutputType | null
    _avg: MatterAttachmentAvgAggregateOutputType | null
    _sum: MatterAttachmentSumAggregateOutputType | null
    _min: MatterAttachmentMinAggregateOutputType | null
    _max: MatterAttachmentMaxAggregateOutputType | null
  }

  export type MatterAttachmentAvgAggregateOutputType = {
    id: number | null
    matterId: number | null
  }

  export type MatterAttachmentSumAggregateOutputType = {
    id: number | null
    matterId: number | null
  }

  export type MatterAttachmentMinAggregateOutputType = {
    id: number | null
    matterId: number | null
    name: string | null
    url: string | null
  }

  export type MatterAttachmentMaxAggregateOutputType = {
    id: number | null
    matterId: number | null
    name: string | null
    url: string | null
  }

  export type MatterAttachmentCountAggregateOutputType = {
    id: number
    matterId: number
    name: number
    url: number
    _all: number
  }


  export type MatterAttachmentAvgAggregateInputType = {
    id?: true
    matterId?: true
  }

  export type MatterAttachmentSumAggregateInputType = {
    id?: true
    matterId?: true
  }

  export type MatterAttachmentMinAggregateInputType = {
    id?: true
    matterId?: true
    name?: true
    url?: true
  }

  export type MatterAttachmentMaxAggregateInputType = {
    id?: true
    matterId?: true
    name?: true
    url?: true
  }

  export type MatterAttachmentCountAggregateInputType = {
    id?: true
    matterId?: true
    name?: true
    url?: true
    _all?: true
  }

  export type MatterAttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatterAttachment to aggregate.
     */
    where?: MatterAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterAttachments to fetch.
     */
    orderBy?: MatterAttachmentOrderByWithRelationInput | MatterAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatterAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatterAttachments
    **/
    _count?: true | MatterAttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatterAttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatterAttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatterAttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatterAttachmentMaxAggregateInputType
  }

  export type GetMatterAttachmentAggregateType<T extends MatterAttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMatterAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatterAttachment[P]>
      : GetScalarType<T[P], AggregateMatterAttachment[P]>
  }




  export type MatterAttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatterAttachmentWhereInput
    orderBy?: MatterAttachmentOrderByWithAggregationInput | MatterAttachmentOrderByWithAggregationInput[]
    by: MatterAttachmentScalarFieldEnum[] | MatterAttachmentScalarFieldEnum
    having?: MatterAttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatterAttachmentCountAggregateInputType | true
    _avg?: MatterAttachmentAvgAggregateInputType
    _sum?: MatterAttachmentSumAggregateInputType
    _min?: MatterAttachmentMinAggregateInputType
    _max?: MatterAttachmentMaxAggregateInputType
  }

  export type MatterAttachmentGroupByOutputType = {
    id: number
    matterId: number
    name: string
    url: string | null
    _count: MatterAttachmentCountAggregateOutputType | null
    _avg: MatterAttachmentAvgAggregateOutputType | null
    _sum: MatterAttachmentSumAggregateOutputType | null
    _min: MatterAttachmentMinAggregateOutputType | null
    _max: MatterAttachmentMaxAggregateOutputType | null
  }

  type GetMatterAttachmentGroupByPayload<T extends MatterAttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatterAttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatterAttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatterAttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], MatterAttachmentGroupByOutputType[P]>
        }
      >
    >


  export type MatterAttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matterId?: boolean
    name?: boolean
    url?: boolean
    matter?: boolean | MatterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matterAttachment"]>

  export type MatterAttachmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matterId?: boolean
    name?: boolean
    url?: boolean
    matter?: boolean | MatterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matterAttachment"]>

  export type MatterAttachmentSelectScalar = {
    id?: boolean
    matterId?: boolean
    name?: boolean
    url?: boolean
  }

  export type MatterAttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matter?: boolean | MatterDefaultArgs<ExtArgs>
  }
  export type MatterAttachmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matter?: boolean | MatterDefaultArgs<ExtArgs>
  }

  export type $MatterAttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatterAttachment"
    objects: {
      matter: Prisma.$MatterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      matterId: number
      name: string
      url: string | null
    }, ExtArgs["result"]["matterAttachment"]>
    composites: {}
  }

  type MatterAttachmentGetPayload<S extends boolean | null | undefined | MatterAttachmentDefaultArgs> = $Result.GetResult<Prisma.$MatterAttachmentPayload, S>

  type MatterAttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatterAttachmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatterAttachmentCountAggregateInputType | true
    }

  export interface MatterAttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatterAttachment'], meta: { name: 'MatterAttachment' } }
    /**
     * Find zero or one MatterAttachment that matches the filter.
     * @param {MatterAttachmentFindUniqueArgs} args - Arguments to find a MatterAttachment
     * @example
     * // Get one MatterAttachment
     * const matterAttachment = await prisma.matterAttachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatterAttachmentFindUniqueArgs>(args: SelectSubset<T, MatterAttachmentFindUniqueArgs<ExtArgs>>): Prisma__MatterAttachmentClient<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MatterAttachment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatterAttachmentFindUniqueOrThrowArgs} args - Arguments to find a MatterAttachment
     * @example
     * // Get one MatterAttachment
     * const matterAttachment = await prisma.matterAttachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatterAttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MatterAttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatterAttachmentClient<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MatterAttachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterAttachmentFindFirstArgs} args - Arguments to find a MatterAttachment
     * @example
     * // Get one MatterAttachment
     * const matterAttachment = await prisma.matterAttachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatterAttachmentFindFirstArgs>(args?: SelectSubset<T, MatterAttachmentFindFirstArgs<ExtArgs>>): Prisma__MatterAttachmentClient<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MatterAttachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterAttachmentFindFirstOrThrowArgs} args - Arguments to find a MatterAttachment
     * @example
     * // Get one MatterAttachment
     * const matterAttachment = await prisma.matterAttachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatterAttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MatterAttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatterAttachmentClient<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MatterAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterAttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatterAttachments
     * const matterAttachments = await prisma.matterAttachment.findMany()
     * 
     * // Get first 10 MatterAttachments
     * const matterAttachments = await prisma.matterAttachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matterAttachmentWithIdOnly = await prisma.matterAttachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatterAttachmentFindManyArgs>(args?: SelectSubset<T, MatterAttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MatterAttachment.
     * @param {MatterAttachmentCreateArgs} args - Arguments to create a MatterAttachment.
     * @example
     * // Create one MatterAttachment
     * const MatterAttachment = await prisma.matterAttachment.create({
     *   data: {
     *     // ... data to create a MatterAttachment
     *   }
     * })
     * 
     */
    create<T extends MatterAttachmentCreateArgs>(args: SelectSubset<T, MatterAttachmentCreateArgs<ExtArgs>>): Prisma__MatterAttachmentClient<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MatterAttachments.
     * @param {MatterAttachmentCreateManyArgs} args - Arguments to create many MatterAttachments.
     * @example
     * // Create many MatterAttachments
     * const matterAttachment = await prisma.matterAttachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatterAttachmentCreateManyArgs>(args?: SelectSubset<T, MatterAttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatterAttachments and returns the data saved in the database.
     * @param {MatterAttachmentCreateManyAndReturnArgs} args - Arguments to create many MatterAttachments.
     * @example
     * // Create many MatterAttachments
     * const matterAttachment = await prisma.matterAttachment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatterAttachments and only return the `id`
     * const matterAttachmentWithIdOnly = await prisma.matterAttachment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatterAttachmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MatterAttachmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MatterAttachment.
     * @param {MatterAttachmentDeleteArgs} args - Arguments to delete one MatterAttachment.
     * @example
     * // Delete one MatterAttachment
     * const MatterAttachment = await prisma.matterAttachment.delete({
     *   where: {
     *     // ... filter to delete one MatterAttachment
     *   }
     * })
     * 
     */
    delete<T extends MatterAttachmentDeleteArgs>(args: SelectSubset<T, MatterAttachmentDeleteArgs<ExtArgs>>): Prisma__MatterAttachmentClient<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MatterAttachment.
     * @param {MatterAttachmentUpdateArgs} args - Arguments to update one MatterAttachment.
     * @example
     * // Update one MatterAttachment
     * const matterAttachment = await prisma.matterAttachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatterAttachmentUpdateArgs>(args: SelectSubset<T, MatterAttachmentUpdateArgs<ExtArgs>>): Prisma__MatterAttachmentClient<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MatterAttachments.
     * @param {MatterAttachmentDeleteManyArgs} args - Arguments to filter MatterAttachments to delete.
     * @example
     * // Delete a few MatterAttachments
     * const { count } = await prisma.matterAttachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatterAttachmentDeleteManyArgs>(args?: SelectSubset<T, MatterAttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatterAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterAttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatterAttachments
     * const matterAttachment = await prisma.matterAttachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatterAttachmentUpdateManyArgs>(args: SelectSubset<T, MatterAttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatterAttachment.
     * @param {MatterAttachmentUpsertArgs} args - Arguments to update or create a MatterAttachment.
     * @example
     * // Update or create a MatterAttachment
     * const matterAttachment = await prisma.matterAttachment.upsert({
     *   create: {
     *     // ... data to create a MatterAttachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatterAttachment we want to update
     *   }
     * })
     */
    upsert<T extends MatterAttachmentUpsertArgs>(args: SelectSubset<T, MatterAttachmentUpsertArgs<ExtArgs>>): Prisma__MatterAttachmentClient<$Result.GetResult<Prisma.$MatterAttachmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MatterAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterAttachmentCountArgs} args - Arguments to filter MatterAttachments to count.
     * @example
     * // Count the number of MatterAttachments
     * const count = await prisma.matterAttachment.count({
     *   where: {
     *     // ... the filter for the MatterAttachments we want to count
     *   }
     * })
    **/
    count<T extends MatterAttachmentCountArgs>(
      args?: Subset<T, MatterAttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatterAttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatterAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterAttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatterAttachmentAggregateArgs>(args: Subset<T, MatterAttachmentAggregateArgs>): Prisma.PrismaPromise<GetMatterAttachmentAggregateType<T>>

    /**
     * Group by MatterAttachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterAttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatterAttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatterAttachmentGroupByArgs['orderBy'] }
        : { orderBy?: MatterAttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatterAttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatterAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatterAttachment model
   */
  readonly fields: MatterAttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatterAttachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatterAttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matter<T extends MatterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatterDefaultArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatterAttachment model
   */ 
  interface MatterAttachmentFieldRefs {
    readonly id: FieldRef<"MatterAttachment", 'Int'>
    readonly matterId: FieldRef<"MatterAttachment", 'Int'>
    readonly name: FieldRef<"MatterAttachment", 'String'>
    readonly url: FieldRef<"MatterAttachment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MatterAttachment findUnique
   */
  export type MatterAttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MatterAttachment to fetch.
     */
    where: MatterAttachmentWhereUniqueInput
  }

  /**
   * MatterAttachment findUniqueOrThrow
   */
  export type MatterAttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MatterAttachment to fetch.
     */
    where: MatterAttachmentWhereUniqueInput
  }

  /**
   * MatterAttachment findFirst
   */
  export type MatterAttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MatterAttachment to fetch.
     */
    where?: MatterAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterAttachments to fetch.
     */
    orderBy?: MatterAttachmentOrderByWithRelationInput | MatterAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatterAttachments.
     */
    cursor?: MatterAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatterAttachments.
     */
    distinct?: MatterAttachmentScalarFieldEnum | MatterAttachmentScalarFieldEnum[]
  }

  /**
   * MatterAttachment findFirstOrThrow
   */
  export type MatterAttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MatterAttachment to fetch.
     */
    where?: MatterAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterAttachments to fetch.
     */
    orderBy?: MatterAttachmentOrderByWithRelationInput | MatterAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatterAttachments.
     */
    cursor?: MatterAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatterAttachments.
     */
    distinct?: MatterAttachmentScalarFieldEnum | MatterAttachmentScalarFieldEnum[]
  }

  /**
   * MatterAttachment findMany
   */
  export type MatterAttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    /**
     * Filter, which MatterAttachments to fetch.
     */
    where?: MatterAttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterAttachments to fetch.
     */
    orderBy?: MatterAttachmentOrderByWithRelationInput | MatterAttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatterAttachments.
     */
    cursor?: MatterAttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterAttachments.
     */
    skip?: number
    distinct?: MatterAttachmentScalarFieldEnum | MatterAttachmentScalarFieldEnum[]
  }

  /**
   * MatterAttachment create
   */
  export type MatterAttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a MatterAttachment.
     */
    data: XOR<MatterAttachmentCreateInput, MatterAttachmentUncheckedCreateInput>
  }

  /**
   * MatterAttachment createMany
   */
  export type MatterAttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatterAttachments.
     */
    data: MatterAttachmentCreateManyInput | MatterAttachmentCreateManyInput[]
  }

  /**
   * MatterAttachment createManyAndReturn
   */
  export type MatterAttachmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MatterAttachments.
     */
    data: MatterAttachmentCreateManyInput | MatterAttachmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatterAttachment update
   */
  export type MatterAttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a MatterAttachment.
     */
    data: XOR<MatterAttachmentUpdateInput, MatterAttachmentUncheckedUpdateInput>
    /**
     * Choose, which MatterAttachment to update.
     */
    where: MatterAttachmentWhereUniqueInput
  }

  /**
   * MatterAttachment updateMany
   */
  export type MatterAttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatterAttachments.
     */
    data: XOR<MatterAttachmentUpdateManyMutationInput, MatterAttachmentUncheckedUpdateManyInput>
    /**
     * Filter which MatterAttachments to update
     */
    where?: MatterAttachmentWhereInput
  }

  /**
   * MatterAttachment upsert
   */
  export type MatterAttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the MatterAttachment to update in case it exists.
     */
    where: MatterAttachmentWhereUniqueInput
    /**
     * In case the MatterAttachment found by the `where` argument doesn't exist, create a new MatterAttachment with this data.
     */
    create: XOR<MatterAttachmentCreateInput, MatterAttachmentUncheckedCreateInput>
    /**
     * In case the MatterAttachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatterAttachmentUpdateInput, MatterAttachmentUncheckedUpdateInput>
  }

  /**
   * MatterAttachment delete
   */
  export type MatterAttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
    /**
     * Filter which MatterAttachment to delete.
     */
    where: MatterAttachmentWhereUniqueInput
  }

  /**
   * MatterAttachment deleteMany
   */
  export type MatterAttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatterAttachments to delete
     */
    where?: MatterAttachmentWhereInput
  }

  /**
   * MatterAttachment without action
   */
  export type MatterAttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterAttachment
     */
    select?: MatterAttachmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterAttachmentInclude<ExtArgs> | null
  }


  /**
   * Model MatterRelation
   */

  export type AggregateMatterRelation = {
    _count: MatterRelationCountAggregateOutputType | null
    _avg: MatterRelationAvgAggregateOutputType | null
    _sum: MatterRelationSumAggregateOutputType | null
    _min: MatterRelationMinAggregateOutputType | null
    _max: MatterRelationMaxAggregateOutputType | null
  }

  export type MatterRelationAvgAggregateOutputType = {
    id: number | null
    fromId: number | null
    toLegistarId: number | null
  }

  export type MatterRelationSumAggregateOutputType = {
    id: number | null
    fromId: number | null
    toLegistarId: number | null
  }

  export type MatterRelationMinAggregateOutputType = {
    id: number | null
    fromId: number | null
    toFile: string | null
    toLegistarId: number | null
  }

  export type MatterRelationMaxAggregateOutputType = {
    id: number | null
    fromId: number | null
    toFile: string | null
    toLegistarId: number | null
  }

  export type MatterRelationCountAggregateOutputType = {
    id: number
    fromId: number
    toFile: number
    toLegistarId: number
    _all: number
  }


  export type MatterRelationAvgAggregateInputType = {
    id?: true
    fromId?: true
    toLegistarId?: true
  }

  export type MatterRelationSumAggregateInputType = {
    id?: true
    fromId?: true
    toLegistarId?: true
  }

  export type MatterRelationMinAggregateInputType = {
    id?: true
    fromId?: true
    toFile?: true
    toLegistarId?: true
  }

  export type MatterRelationMaxAggregateInputType = {
    id?: true
    fromId?: true
    toFile?: true
    toLegistarId?: true
  }

  export type MatterRelationCountAggregateInputType = {
    id?: true
    fromId?: true
    toFile?: true
    toLegistarId?: true
    _all?: true
  }

  export type MatterRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatterRelation to aggregate.
     */
    where?: MatterRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterRelations to fetch.
     */
    orderBy?: MatterRelationOrderByWithRelationInput | MatterRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatterRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatterRelations
    **/
    _count?: true | MatterRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatterRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatterRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatterRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatterRelationMaxAggregateInputType
  }

  export type GetMatterRelationAggregateType<T extends MatterRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateMatterRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatterRelation[P]>
      : GetScalarType<T[P], AggregateMatterRelation[P]>
  }




  export type MatterRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatterRelationWhereInput
    orderBy?: MatterRelationOrderByWithAggregationInput | MatterRelationOrderByWithAggregationInput[]
    by: MatterRelationScalarFieldEnum[] | MatterRelationScalarFieldEnum
    having?: MatterRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatterRelationCountAggregateInputType | true
    _avg?: MatterRelationAvgAggregateInputType
    _sum?: MatterRelationSumAggregateInputType
    _min?: MatterRelationMinAggregateInputType
    _max?: MatterRelationMaxAggregateInputType
  }

  export type MatterRelationGroupByOutputType = {
    id: number
    fromId: number
    toFile: string
    toLegistarId: number | null
    _count: MatterRelationCountAggregateOutputType | null
    _avg: MatterRelationAvgAggregateOutputType | null
    _sum: MatterRelationSumAggregateOutputType | null
    _min: MatterRelationMinAggregateOutputType | null
    _max: MatterRelationMaxAggregateOutputType | null
  }

  type GetMatterRelationGroupByPayload<T extends MatterRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatterRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatterRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatterRelationGroupByOutputType[P]>
            : GetScalarType<T[P], MatterRelationGroupByOutputType[P]>
        }
      >
    >


  export type MatterRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toFile?: boolean
    toLegistarId?: boolean
    from?: boolean | MatterDefaultArgs<ExtArgs>
    to?: boolean | MatterRelation$toArgs<ExtArgs>
  }, ExtArgs["result"]["matterRelation"]>

  export type MatterRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toFile?: boolean
    toLegistarId?: boolean
    from?: boolean | MatterDefaultArgs<ExtArgs>
    to?: boolean | MatterRelation$toArgs<ExtArgs>
  }, ExtArgs["result"]["matterRelation"]>

  export type MatterRelationSelectScalar = {
    id?: boolean
    fromId?: boolean
    toFile?: boolean
    toLegistarId?: boolean
  }

  export type MatterRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | MatterDefaultArgs<ExtArgs>
    to?: boolean | MatterRelation$toArgs<ExtArgs>
  }
  export type MatterRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | MatterDefaultArgs<ExtArgs>
    to?: boolean | MatterRelation$toArgs<ExtArgs>
  }

  export type $MatterRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatterRelation"
    objects: {
      from: Prisma.$MatterPayload<ExtArgs>
      to: Prisma.$MatterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fromId: number
      toFile: string
      toLegistarId: number | null
    }, ExtArgs["result"]["matterRelation"]>
    composites: {}
  }

  type MatterRelationGetPayload<S extends boolean | null | undefined | MatterRelationDefaultArgs> = $Result.GetResult<Prisma.$MatterRelationPayload, S>

  type MatterRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatterRelationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatterRelationCountAggregateInputType | true
    }

  export interface MatterRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatterRelation'], meta: { name: 'MatterRelation' } }
    /**
     * Find zero or one MatterRelation that matches the filter.
     * @param {MatterRelationFindUniqueArgs} args - Arguments to find a MatterRelation
     * @example
     * // Get one MatterRelation
     * const matterRelation = await prisma.matterRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatterRelationFindUniqueArgs>(args: SelectSubset<T, MatterRelationFindUniqueArgs<ExtArgs>>): Prisma__MatterRelationClient<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MatterRelation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatterRelationFindUniqueOrThrowArgs} args - Arguments to find a MatterRelation
     * @example
     * // Get one MatterRelation
     * const matterRelation = await prisma.matterRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatterRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, MatterRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatterRelationClient<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MatterRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterRelationFindFirstArgs} args - Arguments to find a MatterRelation
     * @example
     * // Get one MatterRelation
     * const matterRelation = await prisma.matterRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatterRelationFindFirstArgs>(args?: SelectSubset<T, MatterRelationFindFirstArgs<ExtArgs>>): Prisma__MatterRelationClient<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MatterRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterRelationFindFirstOrThrowArgs} args - Arguments to find a MatterRelation
     * @example
     * // Get one MatterRelation
     * const matterRelation = await prisma.matterRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatterRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, MatterRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatterRelationClient<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MatterRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatterRelations
     * const matterRelations = await prisma.matterRelation.findMany()
     * 
     * // Get first 10 MatterRelations
     * const matterRelations = await prisma.matterRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matterRelationWithIdOnly = await prisma.matterRelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatterRelationFindManyArgs>(args?: SelectSubset<T, MatterRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MatterRelation.
     * @param {MatterRelationCreateArgs} args - Arguments to create a MatterRelation.
     * @example
     * // Create one MatterRelation
     * const MatterRelation = await prisma.matterRelation.create({
     *   data: {
     *     // ... data to create a MatterRelation
     *   }
     * })
     * 
     */
    create<T extends MatterRelationCreateArgs>(args: SelectSubset<T, MatterRelationCreateArgs<ExtArgs>>): Prisma__MatterRelationClient<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MatterRelations.
     * @param {MatterRelationCreateManyArgs} args - Arguments to create many MatterRelations.
     * @example
     * // Create many MatterRelations
     * const matterRelation = await prisma.matterRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatterRelationCreateManyArgs>(args?: SelectSubset<T, MatterRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatterRelations and returns the data saved in the database.
     * @param {MatterRelationCreateManyAndReturnArgs} args - Arguments to create many MatterRelations.
     * @example
     * // Create many MatterRelations
     * const matterRelation = await prisma.matterRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatterRelations and only return the `id`
     * const matterRelationWithIdOnly = await prisma.matterRelation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatterRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, MatterRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MatterRelation.
     * @param {MatterRelationDeleteArgs} args - Arguments to delete one MatterRelation.
     * @example
     * // Delete one MatterRelation
     * const MatterRelation = await prisma.matterRelation.delete({
     *   where: {
     *     // ... filter to delete one MatterRelation
     *   }
     * })
     * 
     */
    delete<T extends MatterRelationDeleteArgs>(args: SelectSubset<T, MatterRelationDeleteArgs<ExtArgs>>): Prisma__MatterRelationClient<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MatterRelation.
     * @param {MatterRelationUpdateArgs} args - Arguments to update one MatterRelation.
     * @example
     * // Update one MatterRelation
     * const matterRelation = await prisma.matterRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatterRelationUpdateArgs>(args: SelectSubset<T, MatterRelationUpdateArgs<ExtArgs>>): Prisma__MatterRelationClient<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MatterRelations.
     * @param {MatterRelationDeleteManyArgs} args - Arguments to filter MatterRelations to delete.
     * @example
     * // Delete a few MatterRelations
     * const { count } = await prisma.matterRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatterRelationDeleteManyArgs>(args?: SelectSubset<T, MatterRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatterRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatterRelations
     * const matterRelation = await prisma.matterRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatterRelationUpdateManyArgs>(args: SelectSubset<T, MatterRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatterRelation.
     * @param {MatterRelationUpsertArgs} args - Arguments to update or create a MatterRelation.
     * @example
     * // Update or create a MatterRelation
     * const matterRelation = await prisma.matterRelation.upsert({
     *   create: {
     *     // ... data to create a MatterRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatterRelation we want to update
     *   }
     * })
     */
    upsert<T extends MatterRelationUpsertArgs>(args: SelectSubset<T, MatterRelationUpsertArgs<ExtArgs>>): Prisma__MatterRelationClient<$Result.GetResult<Prisma.$MatterRelationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MatterRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterRelationCountArgs} args - Arguments to filter MatterRelations to count.
     * @example
     * // Count the number of MatterRelations
     * const count = await prisma.matterRelation.count({
     *   where: {
     *     // ... the filter for the MatterRelations we want to count
     *   }
     * })
    **/
    count<T extends MatterRelationCountArgs>(
      args?: Subset<T, MatterRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatterRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatterRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatterRelationAggregateArgs>(args: Subset<T, MatterRelationAggregateArgs>): Prisma.PrismaPromise<GetMatterRelationAggregateType<T>>

    /**
     * Group by MatterRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterRelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatterRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatterRelationGroupByArgs['orderBy'] }
        : { orderBy?: MatterRelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatterRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatterRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatterRelation model
   */
  readonly fields: MatterRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatterRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatterRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from<T extends MatterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatterDefaultArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    to<T extends MatterRelation$toArgs<ExtArgs> = {}>(args?: Subset<T, MatterRelation$toArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatterRelation model
   */ 
  interface MatterRelationFieldRefs {
    readonly id: FieldRef<"MatterRelation", 'Int'>
    readonly fromId: FieldRef<"MatterRelation", 'Int'>
    readonly toFile: FieldRef<"MatterRelation", 'String'>
    readonly toLegistarId: FieldRef<"MatterRelation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MatterRelation findUnique
   */
  export type MatterRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    /**
     * Filter, which MatterRelation to fetch.
     */
    where: MatterRelationWhereUniqueInput
  }

  /**
   * MatterRelation findUniqueOrThrow
   */
  export type MatterRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    /**
     * Filter, which MatterRelation to fetch.
     */
    where: MatterRelationWhereUniqueInput
  }

  /**
   * MatterRelation findFirst
   */
  export type MatterRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    /**
     * Filter, which MatterRelation to fetch.
     */
    where?: MatterRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterRelations to fetch.
     */
    orderBy?: MatterRelationOrderByWithRelationInput | MatterRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatterRelations.
     */
    cursor?: MatterRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatterRelations.
     */
    distinct?: MatterRelationScalarFieldEnum | MatterRelationScalarFieldEnum[]
  }

  /**
   * MatterRelation findFirstOrThrow
   */
  export type MatterRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    /**
     * Filter, which MatterRelation to fetch.
     */
    where?: MatterRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterRelations to fetch.
     */
    orderBy?: MatterRelationOrderByWithRelationInput | MatterRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatterRelations.
     */
    cursor?: MatterRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatterRelations.
     */
    distinct?: MatterRelationScalarFieldEnum | MatterRelationScalarFieldEnum[]
  }

  /**
   * MatterRelation findMany
   */
  export type MatterRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    /**
     * Filter, which MatterRelations to fetch.
     */
    where?: MatterRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterRelations to fetch.
     */
    orderBy?: MatterRelationOrderByWithRelationInput | MatterRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatterRelations.
     */
    cursor?: MatterRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterRelations.
     */
    skip?: number
    distinct?: MatterRelationScalarFieldEnum | MatterRelationScalarFieldEnum[]
  }

  /**
   * MatterRelation create
   */
  export type MatterRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a MatterRelation.
     */
    data: XOR<MatterRelationCreateInput, MatterRelationUncheckedCreateInput>
  }

  /**
   * MatterRelation createMany
   */
  export type MatterRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatterRelations.
     */
    data: MatterRelationCreateManyInput | MatterRelationCreateManyInput[]
  }

  /**
   * MatterRelation createManyAndReturn
   */
  export type MatterRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MatterRelations.
     */
    data: MatterRelationCreateManyInput | MatterRelationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatterRelation update
   */
  export type MatterRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a MatterRelation.
     */
    data: XOR<MatterRelationUpdateInput, MatterRelationUncheckedUpdateInput>
    /**
     * Choose, which MatterRelation to update.
     */
    where: MatterRelationWhereUniqueInput
  }

  /**
   * MatterRelation updateMany
   */
  export type MatterRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatterRelations.
     */
    data: XOR<MatterRelationUpdateManyMutationInput, MatterRelationUncheckedUpdateManyInput>
    /**
     * Filter which MatterRelations to update
     */
    where?: MatterRelationWhereInput
  }

  /**
   * MatterRelation upsert
   */
  export type MatterRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the MatterRelation to update in case it exists.
     */
    where: MatterRelationWhereUniqueInput
    /**
     * In case the MatterRelation found by the `where` argument doesn't exist, create a new MatterRelation with this data.
     */
    create: XOR<MatterRelationCreateInput, MatterRelationUncheckedCreateInput>
    /**
     * In case the MatterRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatterRelationUpdateInput, MatterRelationUncheckedUpdateInput>
  }

  /**
   * MatterRelation delete
   */
  export type MatterRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
    /**
     * Filter which MatterRelation to delete.
     */
    where: MatterRelationWhereUniqueInput
  }

  /**
   * MatterRelation deleteMany
   */
  export type MatterRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatterRelations to delete
     */
    where?: MatterRelationWhereInput
  }

  /**
   * MatterRelation.to
   */
  export type MatterRelation$toArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Matter
     */
    select?: MatterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterInclude<ExtArgs> | null
    where?: MatterWhereInput
  }

  /**
   * MatterRelation without action
   */
  export type MatterRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterRelation
     */
    select?: MatterRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterRelationInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingAvgAggregateOutputType = {
    id: number | null
    legistarId: number | null
  }

  export type MeetingSumAggregateOutputType = {
    id: number | null
    legistarId: number | null
  }

  export type MeetingMinAggregateOutputType = {
    id: number | null
    legistarId: number | null
    legistarGuid: string | null
    bodyName: string | null
    date: Date | null
    location: string | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: number | null
    legistarId: number | null
    legistarGuid: string | null
    bodyName: string | null
    date: Date | null
    location: string | null
    sourceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    legistarId: number
    legistarGuid: number
    bodyName: number
    date: number
    location: number
    sourceUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MeetingAvgAggregateInputType = {
    id?: true
    legistarId?: true
  }

  export type MeetingSumAggregateInputType = {
    id?: true
    legistarId?: true
  }

  export type MeetingMinAggregateInputType = {
    id?: true
    legistarId?: true
    legistarGuid?: true
    bodyName?: true
    date?: true
    location?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    legistarId?: true
    legistarGuid?: true
    bodyName?: true
    date?: true
    location?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    legistarId?: true
    legistarGuid?: true
    bodyName?: true
    date?: true
    location?: true
    sourceUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _avg?: MeetingAvgAggregateInputType
    _sum?: MeetingSumAggregateInputType
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: number
    legistarId: number
    legistarGuid: string | null
    bodyName: string
    date: Date | null
    location: string | null
    sourceUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legistarId?: boolean
    legistarGuid?: boolean
    bodyName?: boolean
    date?: boolean
    location?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    actions?: boolean | Meeting$actionsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legistarId?: boolean
    legistarGuid?: boolean
    bodyName?: boolean
    date?: boolean
    location?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    legistarId?: boolean
    legistarGuid?: boolean
    bodyName?: boolean
    date?: boolean
    location?: boolean
    sourceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actions?: boolean | Meeting$actionsArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      actions: Prisma.$ActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      legistarId: number
      legistarGuid: string | null
      bodyName: string
      date: Date | null
      location: string | null
      sourceUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actions<T extends Meeting$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */ 
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'Int'>
    readonly legistarId: FieldRef<"Meeting", 'Int'>
    readonly legistarGuid: FieldRef<"Meeting", 'String'>
    readonly bodyName: FieldRef<"Meeting", 'String'>
    readonly date: FieldRef<"Meeting", 'DateTime'>
    readonly location: FieldRef<"Meeting", 'String'>
    readonly sourceUrl: FieldRef<"Meeting", 'String'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
  }

  /**
   * Meeting.actions
   */
  export type Meeting$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    cursor?: ActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model Action
   */

  export type AggregateAction = {
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  export type ActionAvgAggregateOutputType = {
    id: number | null
    legistarId: number | null
    matterId: number | null
    meetingId: number | null
  }

  export type ActionSumAggregateOutputType = {
    id: number | null
    legistarId: number | null
    matterId: number | null
    meetingId: number | null
  }

  export type ActionMinAggregateOutputType = {
    id: number | null
    legistarId: number | null
    legistarGuid: string | null
    date: Date | null
    actionText: string | null
    result: string | null
    bodyName: string | null
    matterId: number | null
    meetingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActionMaxAggregateOutputType = {
    id: number | null
    legistarId: number | null
    legistarGuid: string | null
    date: Date | null
    actionText: string | null
    result: string | null
    bodyName: string | null
    matterId: number | null
    meetingId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActionCountAggregateOutputType = {
    id: number
    legistarId: number
    legistarGuid: number
    date: number
    actionText: number
    result: number
    bodyName: number
    matterId: number
    meetingId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActionAvgAggregateInputType = {
    id?: true
    legistarId?: true
    matterId?: true
    meetingId?: true
  }

  export type ActionSumAggregateInputType = {
    id?: true
    legistarId?: true
    matterId?: true
    meetingId?: true
  }

  export type ActionMinAggregateInputType = {
    id?: true
    legistarId?: true
    legistarGuid?: true
    date?: true
    actionText?: true
    result?: true
    bodyName?: true
    matterId?: true
    meetingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActionMaxAggregateInputType = {
    id?: true
    legistarId?: true
    legistarGuid?: true
    date?: true
    actionText?: true
    result?: true
    bodyName?: true
    matterId?: true
    meetingId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActionCountAggregateInputType = {
    id?: true
    legistarId?: true
    legistarGuid?: true
    date?: true
    actionText?: true
    result?: true
    bodyName?: true
    matterId?: true
    meetingId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Action to aggregate.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actions
    **/
    _count?: true | ActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActionMaxAggregateInputType
  }

  export type GetActionAggregateType<T extends ActionAggregateArgs> = {
        [P in keyof T & keyof AggregateAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAction[P]>
      : GetScalarType<T[P], AggregateAction[P]>
  }




  export type ActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActionWhereInput
    orderBy?: ActionOrderByWithAggregationInput | ActionOrderByWithAggregationInput[]
    by: ActionScalarFieldEnum[] | ActionScalarFieldEnum
    having?: ActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActionCountAggregateInputType | true
    _avg?: ActionAvgAggregateInputType
    _sum?: ActionSumAggregateInputType
    _min?: ActionMinAggregateInputType
    _max?: ActionMaxAggregateInputType
  }

  export type ActionGroupByOutputType = {
    id: number
    legistarId: number
    legistarGuid: string | null
    date: Date | null
    actionText: string | null
    result: string | null
    bodyName: string | null
    matterId: number
    meetingId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ActionCountAggregateOutputType | null
    _avg: ActionAvgAggregateOutputType | null
    _sum: ActionSumAggregateOutputType | null
    _min: ActionMinAggregateOutputType | null
    _max: ActionMaxAggregateOutputType | null
  }

  type GetActionGroupByPayload<T extends ActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActionGroupByOutputType[P]>
            : GetScalarType<T[P], ActionGroupByOutputType[P]>
        }
      >
    >


  export type ActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legistarId?: boolean
    legistarGuid?: boolean
    date?: boolean
    actionText?: boolean
    result?: boolean
    bodyName?: boolean
    matterId?: boolean
    meetingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    meeting?: boolean | Action$meetingArgs<ExtArgs>
    votes?: boolean | Action$votesArgs<ExtArgs>
    _count?: boolean | ActionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    legistarId?: boolean
    legistarGuid?: boolean
    date?: boolean
    actionText?: boolean
    result?: boolean
    bodyName?: boolean
    matterId?: boolean
    meetingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    meeting?: boolean | Action$meetingArgs<ExtArgs>
  }, ExtArgs["result"]["action"]>

  export type ActionSelectScalar = {
    id?: boolean
    legistarId?: boolean
    legistarGuid?: boolean
    date?: boolean
    actionText?: boolean
    result?: boolean
    bodyName?: boolean
    matterId?: boolean
    meetingId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    meeting?: boolean | Action$meetingArgs<ExtArgs>
    votes?: boolean | Action$votesArgs<ExtArgs>
    _count?: boolean | ActionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    meeting?: boolean | Action$meetingArgs<ExtArgs>
  }

  export type $ActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Action"
    objects: {
      matter: Prisma.$MatterPayload<ExtArgs>
      meeting: Prisma.$MeetingPayload<ExtArgs> | null
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      legistarId: number
      legistarGuid: string | null
      date: Date | null
      actionText: string | null
      result: string | null
      bodyName: string | null
      matterId: number
      meetingId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["action"]>
    composites: {}
  }

  type ActionGetPayload<S extends boolean | null | undefined | ActionDefaultArgs> = $Result.GetResult<Prisma.$ActionPayload, S>

  type ActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActionCountAggregateInputType | true
    }

  export interface ActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Action'], meta: { name: 'Action' } }
    /**
     * Find zero or one Action that matches the filter.
     * @param {ActionFindUniqueArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActionFindUniqueArgs>(args: SelectSubset<T, ActionFindUniqueArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Action that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActionFindUniqueOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Action that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActionFindFirstArgs>(args?: SelectSubset<T, ActionFindFirstArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Action that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindFirstOrThrowArgs} args - Arguments to find a Action
     * @example
     * // Get one Action
     * const action = await prisma.action.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Actions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actions
     * const actions = await prisma.action.findMany()
     * 
     * // Get first 10 Actions
     * const actions = await prisma.action.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actionWithIdOnly = await prisma.action.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActionFindManyArgs>(args?: SelectSubset<T, ActionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Action.
     * @param {ActionCreateArgs} args - Arguments to create a Action.
     * @example
     * // Create one Action
     * const Action = await prisma.action.create({
     *   data: {
     *     // ... data to create a Action
     *   }
     * })
     * 
     */
    create<T extends ActionCreateArgs>(args: SelectSubset<T, ActionCreateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Actions.
     * @param {ActionCreateManyArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActionCreateManyArgs>(args?: SelectSubset<T, ActionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actions and returns the data saved in the database.
     * @param {ActionCreateManyAndReturnArgs} args - Arguments to create many Actions.
     * @example
     * // Create many Actions
     * const action = await prisma.action.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actions and only return the `id`
     * const actionWithIdOnly = await prisma.action.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Action.
     * @param {ActionDeleteArgs} args - Arguments to delete one Action.
     * @example
     * // Delete one Action
     * const Action = await prisma.action.delete({
     *   where: {
     *     // ... filter to delete one Action
     *   }
     * })
     * 
     */
    delete<T extends ActionDeleteArgs>(args: SelectSubset<T, ActionDeleteArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Action.
     * @param {ActionUpdateArgs} args - Arguments to update one Action.
     * @example
     * // Update one Action
     * const action = await prisma.action.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActionUpdateArgs>(args: SelectSubset<T, ActionUpdateArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Actions.
     * @param {ActionDeleteManyArgs} args - Arguments to filter Actions to delete.
     * @example
     * // Delete a few Actions
     * const { count } = await prisma.action.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActionDeleteManyArgs>(args?: SelectSubset<T, ActionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actions
     * const action = await prisma.action.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActionUpdateManyArgs>(args: SelectSubset<T, ActionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Action.
     * @param {ActionUpsertArgs} args - Arguments to update or create a Action.
     * @example
     * // Update or create a Action
     * const action = await prisma.action.upsert({
     *   create: {
     *     // ... data to create a Action
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Action we want to update
     *   }
     * })
     */
    upsert<T extends ActionUpsertArgs>(args: SelectSubset<T, ActionUpsertArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Actions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionCountArgs} args - Arguments to filter Actions to count.
     * @example
     * // Count the number of Actions
     * const count = await prisma.action.count({
     *   where: {
     *     // ... the filter for the Actions we want to count
     *   }
     * })
    **/
    count<T extends ActionCountArgs>(
      args?: Subset<T, ActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActionAggregateArgs>(args: Subset<T, ActionAggregateArgs>): Prisma.PrismaPromise<GetActionAggregateType<T>>

    /**
     * Group by Action.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActionGroupByArgs['orderBy'] }
        : { orderBy?: ActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Action model
   */
  readonly fields: ActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Action.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matter<T extends MatterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatterDefaultArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    meeting<T extends Action$meetingArgs<ExtArgs> = {}>(args?: Subset<T, Action$meetingArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    votes<T extends Action$votesArgs<ExtArgs> = {}>(args?: Subset<T, Action$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Action model
   */ 
  interface ActionFieldRefs {
    readonly id: FieldRef<"Action", 'Int'>
    readonly legistarId: FieldRef<"Action", 'Int'>
    readonly legistarGuid: FieldRef<"Action", 'String'>
    readonly date: FieldRef<"Action", 'DateTime'>
    readonly actionText: FieldRef<"Action", 'String'>
    readonly result: FieldRef<"Action", 'String'>
    readonly bodyName: FieldRef<"Action", 'String'>
    readonly matterId: FieldRef<"Action", 'Int'>
    readonly meetingId: FieldRef<"Action", 'Int'>
    readonly createdAt: FieldRef<"Action", 'DateTime'>
    readonly updatedAt: FieldRef<"Action", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Action findUnique
   */
  export type ActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findUniqueOrThrow
   */
  export type ActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action findFirst
   */
  export type ActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findFirstOrThrow
   */
  export type ActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Action to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actions.
     */
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action findMany
   */
  export type ActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter, which Actions to fetch.
     */
    where?: ActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actions to fetch.
     */
    orderBy?: ActionOrderByWithRelationInput | ActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actions.
     */
    cursor?: ActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actions.
     */
    skip?: number
    distinct?: ActionScalarFieldEnum | ActionScalarFieldEnum[]
  }

  /**
   * Action create
   */
  export type ActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to create a Action.
     */
    data: XOR<ActionCreateInput, ActionUncheckedCreateInput>
  }

  /**
   * Action createMany
   */
  export type ActionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
  }

  /**
   * Action createManyAndReturn
   */
  export type ActionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Actions.
     */
    data: ActionCreateManyInput | ActionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Action update
   */
  export type ActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The data needed to update a Action.
     */
    data: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
    /**
     * Choose, which Action to update.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action updateMany
   */
  export type ActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actions.
     */
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyInput>
    /**
     * Filter which Actions to update
     */
    where?: ActionWhereInput
  }

  /**
   * Action upsert
   */
  export type ActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * The filter to search for the Action to update in case it exists.
     */
    where: ActionWhereUniqueInput
    /**
     * In case the Action found by the `where` argument doesn't exist, create a new Action with this data.
     */
    create: XOR<ActionCreateInput, ActionUncheckedCreateInput>
    /**
     * In case the Action was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActionUpdateInput, ActionUncheckedUpdateInput>
  }

  /**
   * Action delete
   */
  export type ActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
    /**
     * Filter which Action to delete.
     */
    where: ActionWhereUniqueInput
  }

  /**
   * Action deleteMany
   */
  export type ActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actions to delete
     */
    where?: ActionWhereInput
  }

  /**
   * Action.meeting
   */
  export type Action$meetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
  }

  /**
   * Action.votes
   */
  export type Action$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Action without action
   */
  export type ActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Action
     */
    select?: ActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActionInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteAvgAggregateOutputType = {
    id: number | null
    actionId: number | null
    matterId: number | null
    supervisorId: number | null
  }

  export type VoteSumAggregateOutputType = {
    id: number | null
    actionId: number | null
    matterId: number | null
    supervisorId: number | null
  }

  export type VoteMinAggregateOutputType = {
    id: number | null
    value: string | null
    actionId: number | null
    matterId: number | null
    supervisorId: number | null
    createdAt: Date | null
  }

  export type VoteMaxAggregateOutputType = {
    id: number | null
    value: string | null
    actionId: number | null
    matterId: number | null
    supervisorId: number | null
    createdAt: Date | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    value: number
    actionId: number
    matterId: number
    supervisorId: number
    createdAt: number
    _all: number
  }


  export type VoteAvgAggregateInputType = {
    id?: true
    actionId?: true
    matterId?: true
    supervisorId?: true
  }

  export type VoteSumAggregateInputType = {
    id?: true
    actionId?: true
    matterId?: true
    supervisorId?: true
  }

  export type VoteMinAggregateInputType = {
    id?: true
    value?: true
    actionId?: true
    matterId?: true
    supervisorId?: true
    createdAt?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    value?: true
    actionId?: true
    matterId?: true
    supervisorId?: true
    createdAt?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    value?: true
    actionId?: true
    matterId?: true
    supervisorId?: true
    createdAt?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _avg?: VoteAvgAggregateInputType
    _sum?: VoteSumAggregateInputType
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: number
    value: string
    actionId: number
    matterId: number
    supervisorId: number
    createdAt: Date
    _count: VoteCountAggregateOutputType | null
    _avg: VoteAvgAggregateOutputType | null
    _sum: VoteSumAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    actionId?: boolean
    matterId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    actionId?: boolean
    matterId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
    action?: boolean | ActionDefaultArgs<ExtArgs>
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    value?: boolean
    actionId?: boolean
    matterId?: boolean
    supervisorId?: boolean
    createdAt?: boolean
  }

  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    action?: boolean | ActionDefaultArgs<ExtArgs>
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      action: Prisma.$ActionPayload<ExtArgs>
      matter: Prisma.$MatterPayload<ExtArgs>
      supervisor: Prisma.$SupervisorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: string
      actionId: number
      matterId: number
      supervisorId: number
      createdAt: Date
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    action<T extends ActionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActionDefaultArgs<ExtArgs>>): Prisma__ActionClient<$Result.GetResult<Prisma.$ActionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    matter<T extends MatterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatterDefaultArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    supervisor<T extends SupervisorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupervisorDefaultArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */ 
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'Int'>
    readonly value: FieldRef<"Vote", 'String'>
    readonly actionId: FieldRef<"Vote", 'Int'>
    readonly matterId: FieldRef<"Vote", 'Int'>
    readonly supervisorId: FieldRef<"Vote", 'Int'>
    readonly createdAt: FieldRef<"Vote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Model Sponsorship
   */

  export type AggregateSponsorship = {
    _count: SponsorshipCountAggregateOutputType | null
    _avg: SponsorshipAvgAggregateOutputType | null
    _sum: SponsorshipSumAggregateOutputType | null
    _min: SponsorshipMinAggregateOutputType | null
    _max: SponsorshipMaxAggregateOutputType | null
  }

  export type SponsorshipAvgAggregateOutputType = {
    id: number | null
    matterId: number | null
    supervisorId: number | null
  }

  export type SponsorshipSumAggregateOutputType = {
    id: number | null
    matterId: number | null
    supervisorId: number | null
  }

  export type SponsorshipMinAggregateOutputType = {
    id: number | null
    role: string | null
    matterId: number | null
    supervisorId: number | null
  }

  export type SponsorshipMaxAggregateOutputType = {
    id: number | null
    role: string | null
    matterId: number | null
    supervisorId: number | null
  }

  export type SponsorshipCountAggregateOutputType = {
    id: number
    role: number
    matterId: number
    supervisorId: number
    _all: number
  }


  export type SponsorshipAvgAggregateInputType = {
    id?: true
    matterId?: true
    supervisorId?: true
  }

  export type SponsorshipSumAggregateInputType = {
    id?: true
    matterId?: true
    supervisorId?: true
  }

  export type SponsorshipMinAggregateInputType = {
    id?: true
    role?: true
    matterId?: true
    supervisorId?: true
  }

  export type SponsorshipMaxAggregateInputType = {
    id?: true
    role?: true
    matterId?: true
    supervisorId?: true
  }

  export type SponsorshipCountAggregateInputType = {
    id?: true
    role?: true
    matterId?: true
    supervisorId?: true
    _all?: true
  }

  export type SponsorshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsorship to aggregate.
     */
    where?: SponsorshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsorships to fetch.
     */
    orderBy?: SponsorshipOrderByWithRelationInput | SponsorshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SponsorshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsorships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsorships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sponsorships
    **/
    _count?: true | SponsorshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SponsorshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SponsorshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SponsorshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SponsorshipMaxAggregateInputType
  }

  export type GetSponsorshipAggregateType<T extends SponsorshipAggregateArgs> = {
        [P in keyof T & keyof AggregateSponsorship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSponsorship[P]>
      : GetScalarType<T[P], AggregateSponsorship[P]>
  }




  export type SponsorshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorshipWhereInput
    orderBy?: SponsorshipOrderByWithAggregationInput | SponsorshipOrderByWithAggregationInput[]
    by: SponsorshipScalarFieldEnum[] | SponsorshipScalarFieldEnum
    having?: SponsorshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SponsorshipCountAggregateInputType | true
    _avg?: SponsorshipAvgAggregateInputType
    _sum?: SponsorshipSumAggregateInputType
    _min?: SponsorshipMinAggregateInputType
    _max?: SponsorshipMaxAggregateInputType
  }

  export type SponsorshipGroupByOutputType = {
    id: number
    role: string
    matterId: number
    supervisorId: number
    _count: SponsorshipCountAggregateOutputType | null
    _avg: SponsorshipAvgAggregateOutputType | null
    _sum: SponsorshipSumAggregateOutputType | null
    _min: SponsorshipMinAggregateOutputType | null
    _max: SponsorshipMaxAggregateOutputType | null
  }

  type GetSponsorshipGroupByPayload<T extends SponsorshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SponsorshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SponsorshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SponsorshipGroupByOutputType[P]>
            : GetScalarType<T[P], SponsorshipGroupByOutputType[P]>
        }
      >
    >


  export type SponsorshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    matterId?: boolean
    supervisorId?: boolean
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sponsorship"]>

  export type SponsorshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    matterId?: boolean
    supervisorId?: boolean
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sponsorship"]>

  export type SponsorshipSelectScalar = {
    id?: boolean
    role?: boolean
    matterId?: boolean
    supervisorId?: boolean
  }

  export type SponsorshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }
  export type SponsorshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }

  export type $SponsorshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sponsorship"
    objects: {
      matter: Prisma.$MatterPayload<ExtArgs>
      supervisor: Prisma.$SupervisorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string
      matterId: number
      supervisorId: number
    }, ExtArgs["result"]["sponsorship"]>
    composites: {}
  }

  type SponsorshipGetPayload<S extends boolean | null | undefined | SponsorshipDefaultArgs> = $Result.GetResult<Prisma.$SponsorshipPayload, S>

  type SponsorshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SponsorshipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SponsorshipCountAggregateInputType | true
    }

  export interface SponsorshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sponsorship'], meta: { name: 'Sponsorship' } }
    /**
     * Find zero or one Sponsorship that matches the filter.
     * @param {SponsorshipFindUniqueArgs} args - Arguments to find a Sponsorship
     * @example
     * // Get one Sponsorship
     * const sponsorship = await prisma.sponsorship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SponsorshipFindUniqueArgs>(args: SelectSubset<T, SponsorshipFindUniqueArgs<ExtArgs>>): Prisma__SponsorshipClient<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sponsorship that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SponsorshipFindUniqueOrThrowArgs} args - Arguments to find a Sponsorship
     * @example
     * // Get one Sponsorship
     * const sponsorship = await prisma.sponsorship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SponsorshipFindUniqueOrThrowArgs>(args: SelectSubset<T, SponsorshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SponsorshipClient<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sponsorship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorshipFindFirstArgs} args - Arguments to find a Sponsorship
     * @example
     * // Get one Sponsorship
     * const sponsorship = await prisma.sponsorship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SponsorshipFindFirstArgs>(args?: SelectSubset<T, SponsorshipFindFirstArgs<ExtArgs>>): Prisma__SponsorshipClient<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sponsorship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorshipFindFirstOrThrowArgs} args - Arguments to find a Sponsorship
     * @example
     * // Get one Sponsorship
     * const sponsorship = await prisma.sponsorship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SponsorshipFindFirstOrThrowArgs>(args?: SelectSubset<T, SponsorshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__SponsorshipClient<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sponsorships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sponsorships
     * const sponsorships = await prisma.sponsorship.findMany()
     * 
     * // Get first 10 Sponsorships
     * const sponsorships = await prisma.sponsorship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sponsorshipWithIdOnly = await prisma.sponsorship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SponsorshipFindManyArgs>(args?: SelectSubset<T, SponsorshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sponsorship.
     * @param {SponsorshipCreateArgs} args - Arguments to create a Sponsorship.
     * @example
     * // Create one Sponsorship
     * const Sponsorship = await prisma.sponsorship.create({
     *   data: {
     *     // ... data to create a Sponsorship
     *   }
     * })
     * 
     */
    create<T extends SponsorshipCreateArgs>(args: SelectSubset<T, SponsorshipCreateArgs<ExtArgs>>): Prisma__SponsorshipClient<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sponsorships.
     * @param {SponsorshipCreateManyArgs} args - Arguments to create many Sponsorships.
     * @example
     * // Create many Sponsorships
     * const sponsorship = await prisma.sponsorship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SponsorshipCreateManyArgs>(args?: SelectSubset<T, SponsorshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sponsorships and returns the data saved in the database.
     * @param {SponsorshipCreateManyAndReturnArgs} args - Arguments to create many Sponsorships.
     * @example
     * // Create many Sponsorships
     * const sponsorship = await prisma.sponsorship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sponsorships and only return the `id`
     * const sponsorshipWithIdOnly = await prisma.sponsorship.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SponsorshipCreateManyAndReturnArgs>(args?: SelectSubset<T, SponsorshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Sponsorship.
     * @param {SponsorshipDeleteArgs} args - Arguments to delete one Sponsorship.
     * @example
     * // Delete one Sponsorship
     * const Sponsorship = await prisma.sponsorship.delete({
     *   where: {
     *     // ... filter to delete one Sponsorship
     *   }
     * })
     * 
     */
    delete<T extends SponsorshipDeleteArgs>(args: SelectSubset<T, SponsorshipDeleteArgs<ExtArgs>>): Prisma__SponsorshipClient<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sponsorship.
     * @param {SponsorshipUpdateArgs} args - Arguments to update one Sponsorship.
     * @example
     * // Update one Sponsorship
     * const sponsorship = await prisma.sponsorship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SponsorshipUpdateArgs>(args: SelectSubset<T, SponsorshipUpdateArgs<ExtArgs>>): Prisma__SponsorshipClient<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sponsorships.
     * @param {SponsorshipDeleteManyArgs} args - Arguments to filter Sponsorships to delete.
     * @example
     * // Delete a few Sponsorships
     * const { count } = await prisma.sponsorship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SponsorshipDeleteManyArgs>(args?: SelectSubset<T, SponsorshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sponsorships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sponsorships
     * const sponsorship = await prisma.sponsorship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SponsorshipUpdateManyArgs>(args: SelectSubset<T, SponsorshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sponsorship.
     * @param {SponsorshipUpsertArgs} args - Arguments to update or create a Sponsorship.
     * @example
     * // Update or create a Sponsorship
     * const sponsorship = await prisma.sponsorship.upsert({
     *   create: {
     *     // ... data to create a Sponsorship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sponsorship we want to update
     *   }
     * })
     */
    upsert<T extends SponsorshipUpsertArgs>(args: SelectSubset<T, SponsorshipUpsertArgs<ExtArgs>>): Prisma__SponsorshipClient<$Result.GetResult<Prisma.$SponsorshipPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sponsorships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorshipCountArgs} args - Arguments to filter Sponsorships to count.
     * @example
     * // Count the number of Sponsorships
     * const count = await prisma.sponsorship.count({
     *   where: {
     *     // ... the filter for the Sponsorships we want to count
     *   }
     * })
    **/
    count<T extends SponsorshipCountArgs>(
      args?: Subset<T, SponsorshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SponsorshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sponsorship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SponsorshipAggregateArgs>(args: Subset<T, SponsorshipAggregateArgs>): Prisma.PrismaPromise<GetSponsorshipAggregateType<T>>

    /**
     * Group by Sponsorship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SponsorshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SponsorshipGroupByArgs['orderBy'] }
        : { orderBy?: SponsorshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SponsorshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sponsorship model
   */
  readonly fields: SponsorshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sponsorship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SponsorshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matter<T extends MatterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatterDefaultArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    supervisor<T extends SupervisorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupervisorDefaultArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sponsorship model
   */ 
  interface SponsorshipFieldRefs {
    readonly id: FieldRef<"Sponsorship", 'Int'>
    readonly role: FieldRef<"Sponsorship", 'String'>
    readonly matterId: FieldRef<"Sponsorship", 'Int'>
    readonly supervisorId: FieldRef<"Sponsorship", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sponsorship findUnique
   */
  export type SponsorshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which Sponsorship to fetch.
     */
    where: SponsorshipWhereUniqueInput
  }

  /**
   * Sponsorship findUniqueOrThrow
   */
  export type SponsorshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which Sponsorship to fetch.
     */
    where: SponsorshipWhereUniqueInput
  }

  /**
   * Sponsorship findFirst
   */
  export type SponsorshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which Sponsorship to fetch.
     */
    where?: SponsorshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsorships to fetch.
     */
    orderBy?: SponsorshipOrderByWithRelationInput | SponsorshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsorships.
     */
    cursor?: SponsorshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsorships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsorships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsorships.
     */
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * Sponsorship findFirstOrThrow
   */
  export type SponsorshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which Sponsorship to fetch.
     */
    where?: SponsorshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsorships to fetch.
     */
    orderBy?: SponsorshipOrderByWithRelationInput | SponsorshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsorships.
     */
    cursor?: SponsorshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsorships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsorships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsorships.
     */
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * Sponsorship findMany
   */
  export type SponsorshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    /**
     * Filter, which Sponsorships to fetch.
     */
    where?: SponsorshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsorships to fetch.
     */
    orderBy?: SponsorshipOrderByWithRelationInput | SponsorshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sponsorships.
     */
    cursor?: SponsorshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsorships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsorships.
     */
    skip?: number
    distinct?: SponsorshipScalarFieldEnum | SponsorshipScalarFieldEnum[]
  }

  /**
   * Sponsorship create
   */
  export type SponsorshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Sponsorship.
     */
    data: XOR<SponsorshipCreateInput, SponsorshipUncheckedCreateInput>
  }

  /**
   * Sponsorship createMany
   */
  export type SponsorshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sponsorships.
     */
    data: SponsorshipCreateManyInput | SponsorshipCreateManyInput[]
  }

  /**
   * Sponsorship createManyAndReturn
   */
  export type SponsorshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sponsorships.
     */
    data: SponsorshipCreateManyInput | SponsorshipCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sponsorship update
   */
  export type SponsorshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Sponsorship.
     */
    data: XOR<SponsorshipUpdateInput, SponsorshipUncheckedUpdateInput>
    /**
     * Choose, which Sponsorship to update.
     */
    where: SponsorshipWhereUniqueInput
  }

  /**
   * Sponsorship updateMany
   */
  export type SponsorshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sponsorships.
     */
    data: XOR<SponsorshipUpdateManyMutationInput, SponsorshipUncheckedUpdateManyInput>
    /**
     * Filter which Sponsorships to update
     */
    where?: SponsorshipWhereInput
  }

  /**
   * Sponsorship upsert
   */
  export type SponsorshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Sponsorship to update in case it exists.
     */
    where: SponsorshipWhereUniqueInput
    /**
     * In case the Sponsorship found by the `where` argument doesn't exist, create a new Sponsorship with this data.
     */
    create: XOR<SponsorshipCreateInput, SponsorshipUncheckedCreateInput>
    /**
     * In case the Sponsorship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SponsorshipUpdateInput, SponsorshipUncheckedUpdateInput>
  }

  /**
   * Sponsorship delete
   */
  export type SponsorshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
    /**
     * Filter which Sponsorship to delete.
     */
    where: SponsorshipWhereUniqueInput
  }

  /**
   * Sponsorship deleteMany
   */
  export type SponsorshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsorships to delete
     */
    where?: SponsorshipWhereInput
  }

  /**
   * Sponsorship without action
   */
  export type SponsorshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsorship
     */
    select?: SponsorshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SponsorshipInclude<ExtArgs> | null
  }


  /**
   * Model Topic
   */

  export type AggregateTopic = {
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  export type TopicAvgAggregateOutputType = {
    id: number | null
  }

  export type TopicSumAggregateOutputType = {
    id: number | null
  }

  export type TopicMinAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    emoji: string | null
    color: string | null
  }

  export type TopicMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    name: string | null
    emoji: string | null
    color: string | null
  }

  export type TopicCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    emoji: number
    color: number
    _all: number
  }


  export type TopicAvgAggregateInputType = {
    id?: true
  }

  export type TopicSumAggregateInputType = {
    id?: true
  }

  export type TopicMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    emoji?: true
    color?: true
  }

  export type TopicMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    emoji?: true
    color?: true
  }

  export type TopicCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    emoji?: true
    color?: true
    _all?: true
  }

  export type TopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topic to aggregate.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Topics
    **/
    _count?: true | TopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicMaxAggregateInputType
  }

  export type GetTopicAggregateType<T extends TopicAggregateArgs> = {
        [P in keyof T & keyof AggregateTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopic[P]>
      : GetScalarType<T[P], AggregateTopic[P]>
  }




  export type TopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicWhereInput
    orderBy?: TopicOrderByWithAggregationInput | TopicOrderByWithAggregationInput[]
    by: TopicScalarFieldEnum[] | TopicScalarFieldEnum
    having?: TopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicCountAggregateInputType | true
    _avg?: TopicAvgAggregateInputType
    _sum?: TopicSumAggregateInputType
    _min?: TopicMinAggregateInputType
    _max?: TopicMaxAggregateInputType
  }

  export type TopicGroupByOutputType = {
    id: number
    slug: string
    name: string
    emoji: string | null
    color: string | null
    _count: TopicCountAggregateOutputType | null
    _avg: TopicAvgAggregateOutputType | null
    _sum: TopicSumAggregateOutputType | null
    _min: TopicMinAggregateOutputType | null
    _max: TopicMaxAggregateOutputType | null
  }

  type GetTopicGroupByPayload<T extends TopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicGroupByOutputType[P]>
            : GetScalarType<T[P], TopicGroupByOutputType[P]>
        }
      >
    >


  export type TopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    emoji?: boolean
    color?: boolean
    matters?: boolean | Topic$mattersArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    emoji?: boolean
    color?: boolean
  }, ExtArgs["result"]["topic"]>

  export type TopicSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    emoji?: boolean
    color?: boolean
  }

  export type TopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matters?: boolean | Topic$mattersArgs<ExtArgs>
    _count?: boolean | TopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Topic"
    objects: {
      matters: Prisma.$MatterTopicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      name: string
      emoji: string | null
      color: string | null
    }, ExtArgs["result"]["topic"]>
    composites: {}
  }

  type TopicGetPayload<S extends boolean | null | undefined | TopicDefaultArgs> = $Result.GetResult<Prisma.$TopicPayload, S>

  type TopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TopicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TopicCountAggregateInputType | true
    }

  export interface TopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Topic'], meta: { name: 'Topic' } }
    /**
     * Find zero or one Topic that matches the filter.
     * @param {TopicFindUniqueArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicFindUniqueArgs>(args: SelectSubset<T, TopicFindUniqueArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Topic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TopicFindUniqueOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Topic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicFindFirstArgs>(args?: SelectSubset<T, TopicFindFirstArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Topic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindFirstOrThrowArgs} args - Arguments to find a Topic
     * @example
     * // Get one Topic
     * const topic = await prisma.topic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Topics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Topics
     * const topics = await prisma.topic.findMany()
     * 
     * // Get first 10 Topics
     * const topics = await prisma.topic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicWithIdOnly = await prisma.topic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicFindManyArgs>(args?: SelectSubset<T, TopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Topic.
     * @param {TopicCreateArgs} args - Arguments to create a Topic.
     * @example
     * // Create one Topic
     * const Topic = await prisma.topic.create({
     *   data: {
     *     // ... data to create a Topic
     *   }
     * })
     * 
     */
    create<T extends TopicCreateArgs>(args: SelectSubset<T, TopicCreateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Topics.
     * @param {TopicCreateManyArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicCreateManyArgs>(args?: SelectSubset<T, TopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Topics and returns the data saved in the database.
     * @param {TopicCreateManyAndReturnArgs} args - Arguments to create many Topics.
     * @example
     * // Create many Topics
     * const topic = await prisma.topic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Topics and only return the `id`
     * const topicWithIdOnly = await prisma.topic.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Topic.
     * @param {TopicDeleteArgs} args - Arguments to delete one Topic.
     * @example
     * // Delete one Topic
     * const Topic = await prisma.topic.delete({
     *   where: {
     *     // ... filter to delete one Topic
     *   }
     * })
     * 
     */
    delete<T extends TopicDeleteArgs>(args: SelectSubset<T, TopicDeleteArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Topic.
     * @param {TopicUpdateArgs} args - Arguments to update one Topic.
     * @example
     * // Update one Topic
     * const topic = await prisma.topic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicUpdateArgs>(args: SelectSubset<T, TopicUpdateArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Topics.
     * @param {TopicDeleteManyArgs} args - Arguments to filter Topics to delete.
     * @example
     * // Delete a few Topics
     * const { count } = await prisma.topic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicDeleteManyArgs>(args?: SelectSubset<T, TopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Topics
     * const topic = await prisma.topic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicUpdateManyArgs>(args: SelectSubset<T, TopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Topic.
     * @param {TopicUpsertArgs} args - Arguments to update or create a Topic.
     * @example
     * // Update or create a Topic
     * const topic = await prisma.topic.upsert({
     *   create: {
     *     // ... data to create a Topic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Topic we want to update
     *   }
     * })
     */
    upsert<T extends TopicUpsertArgs>(args: SelectSubset<T, TopicUpsertArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Topics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicCountArgs} args - Arguments to filter Topics to count.
     * @example
     * // Count the number of Topics
     * const count = await prisma.topic.count({
     *   where: {
     *     // ... the filter for the Topics we want to count
     *   }
     * })
    **/
    count<T extends TopicCountArgs>(
      args?: Subset<T, TopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicAggregateArgs>(args: Subset<T, TopicAggregateArgs>): Prisma.PrismaPromise<GetTopicAggregateType<T>>

    /**
     * Group by Topic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicGroupByArgs['orderBy'] }
        : { orderBy?: TopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Topic model
   */
  readonly fields: TopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Topic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matters<T extends Topic$mattersArgs<ExtArgs> = {}>(args?: Subset<T, Topic$mattersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Topic model
   */ 
  interface TopicFieldRefs {
    readonly id: FieldRef<"Topic", 'Int'>
    readonly slug: FieldRef<"Topic", 'String'>
    readonly name: FieldRef<"Topic", 'String'>
    readonly emoji: FieldRef<"Topic", 'String'>
    readonly color: FieldRef<"Topic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Topic findUnique
   */
  export type TopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findUniqueOrThrow
   */
  export type TopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic findFirst
   */
  export type TopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findFirstOrThrow
   */
  export type TopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topic to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Topics.
     */
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic findMany
   */
  export type TopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter, which Topics to fetch.
     */
    where?: TopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Topics to fetch.
     */
    orderBy?: TopicOrderByWithRelationInput | TopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Topics.
     */
    cursor?: TopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Topics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Topics.
     */
    skip?: number
    distinct?: TopicScalarFieldEnum | TopicScalarFieldEnum[]
  }

  /**
   * Topic create
   */
  export type TopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to create a Topic.
     */
    data: XOR<TopicCreateInput, TopicUncheckedCreateInput>
  }

  /**
   * Topic createMany
   */
  export type TopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
  }

  /**
   * Topic createManyAndReturn
   */
  export type TopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Topics.
     */
    data: TopicCreateManyInput | TopicCreateManyInput[]
  }

  /**
   * Topic update
   */
  export type TopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The data needed to update a Topic.
     */
    data: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
    /**
     * Choose, which Topic to update.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic updateMany
   */
  export type TopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Topics.
     */
    data: XOR<TopicUpdateManyMutationInput, TopicUncheckedUpdateManyInput>
    /**
     * Filter which Topics to update
     */
    where?: TopicWhereInput
  }

  /**
   * Topic upsert
   */
  export type TopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * The filter to search for the Topic to update in case it exists.
     */
    where: TopicWhereUniqueInput
    /**
     * In case the Topic found by the `where` argument doesn't exist, create a new Topic with this data.
     */
    create: XOR<TopicCreateInput, TopicUncheckedCreateInput>
    /**
     * In case the Topic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicUpdateInput, TopicUncheckedUpdateInput>
  }

  /**
   * Topic delete
   */
  export type TopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
    /**
     * Filter which Topic to delete.
     */
    where: TopicWhereUniqueInput
  }

  /**
   * Topic deleteMany
   */
  export type TopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Topics to delete
     */
    where?: TopicWhereInput
  }

  /**
   * Topic.matters
   */
  export type Topic$mattersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    where?: MatterTopicWhereInput
    orderBy?: MatterTopicOrderByWithRelationInput | MatterTopicOrderByWithRelationInput[]
    cursor?: MatterTopicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatterTopicScalarFieldEnum | MatterTopicScalarFieldEnum[]
  }

  /**
   * Topic without action
   */
  export type TopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Topic
     */
    select?: TopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicInclude<ExtArgs> | null
  }


  /**
   * Model MatterTopic
   */

  export type AggregateMatterTopic = {
    _count: MatterTopicCountAggregateOutputType | null
    _avg: MatterTopicAvgAggregateOutputType | null
    _sum: MatterTopicSumAggregateOutputType | null
    _min: MatterTopicMinAggregateOutputType | null
    _max: MatterTopicMaxAggregateOutputType | null
  }

  export type MatterTopicAvgAggregateOutputType = {
    matterId: number | null
    topicId: number | null
    weight: number | null
  }

  export type MatterTopicSumAggregateOutputType = {
    matterId: number | null
    topicId: number | null
    weight: number | null
  }

  export type MatterTopicMinAggregateOutputType = {
    matterId: number | null
    topicId: number | null
    weight: number | null
  }

  export type MatterTopicMaxAggregateOutputType = {
    matterId: number | null
    topicId: number | null
    weight: number | null
  }

  export type MatterTopicCountAggregateOutputType = {
    matterId: number
    topicId: number
    weight: number
    _all: number
  }


  export type MatterTopicAvgAggregateInputType = {
    matterId?: true
    topicId?: true
    weight?: true
  }

  export type MatterTopicSumAggregateInputType = {
    matterId?: true
    topicId?: true
    weight?: true
  }

  export type MatterTopicMinAggregateInputType = {
    matterId?: true
    topicId?: true
    weight?: true
  }

  export type MatterTopicMaxAggregateInputType = {
    matterId?: true
    topicId?: true
    weight?: true
  }

  export type MatterTopicCountAggregateInputType = {
    matterId?: true
    topicId?: true
    weight?: true
    _all?: true
  }

  export type MatterTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatterTopic to aggregate.
     */
    where?: MatterTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterTopics to fetch.
     */
    orderBy?: MatterTopicOrderByWithRelationInput | MatterTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatterTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatterTopics
    **/
    _count?: true | MatterTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatterTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatterTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatterTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatterTopicMaxAggregateInputType
  }

  export type GetMatterTopicAggregateType<T extends MatterTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateMatterTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatterTopic[P]>
      : GetScalarType<T[P], AggregateMatterTopic[P]>
  }




  export type MatterTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatterTopicWhereInput
    orderBy?: MatterTopicOrderByWithAggregationInput | MatterTopicOrderByWithAggregationInput[]
    by: MatterTopicScalarFieldEnum[] | MatterTopicScalarFieldEnum
    having?: MatterTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatterTopicCountAggregateInputType | true
    _avg?: MatterTopicAvgAggregateInputType
    _sum?: MatterTopicSumAggregateInputType
    _min?: MatterTopicMinAggregateInputType
    _max?: MatterTopicMaxAggregateInputType
  }

  export type MatterTopicGroupByOutputType = {
    matterId: number
    topicId: number
    weight: number
    _count: MatterTopicCountAggregateOutputType | null
    _avg: MatterTopicAvgAggregateOutputType | null
    _sum: MatterTopicSumAggregateOutputType | null
    _min: MatterTopicMinAggregateOutputType | null
    _max: MatterTopicMaxAggregateOutputType | null
  }

  type GetMatterTopicGroupByPayload<T extends MatterTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatterTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatterTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatterTopicGroupByOutputType[P]>
            : GetScalarType<T[P], MatterTopicGroupByOutputType[P]>
        }
      >
    >


  export type MatterTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matterId?: boolean
    topicId?: boolean
    weight?: boolean
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matterTopic"]>

  export type MatterTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matterId?: boolean
    topicId?: boolean
    weight?: boolean
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matterTopic"]>

  export type MatterTopicSelectScalar = {
    matterId?: boolean
    topicId?: boolean
    weight?: boolean
  }

  export type MatterTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }
  export type MatterTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matter?: boolean | MatterDefaultArgs<ExtArgs>
    topic?: boolean | TopicDefaultArgs<ExtArgs>
  }

  export type $MatterTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatterTopic"
    objects: {
      matter: Prisma.$MatterPayload<ExtArgs>
      topic: Prisma.$TopicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      matterId: number
      topicId: number
      weight: number
    }, ExtArgs["result"]["matterTopic"]>
    composites: {}
  }

  type MatterTopicGetPayload<S extends boolean | null | undefined | MatterTopicDefaultArgs> = $Result.GetResult<Prisma.$MatterTopicPayload, S>

  type MatterTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatterTopicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatterTopicCountAggregateInputType | true
    }

  export interface MatterTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatterTopic'], meta: { name: 'MatterTopic' } }
    /**
     * Find zero or one MatterTopic that matches the filter.
     * @param {MatterTopicFindUniqueArgs} args - Arguments to find a MatterTopic
     * @example
     * // Get one MatterTopic
     * const matterTopic = await prisma.matterTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatterTopicFindUniqueArgs>(args: SelectSubset<T, MatterTopicFindUniqueArgs<ExtArgs>>): Prisma__MatterTopicClient<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MatterTopic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatterTopicFindUniqueOrThrowArgs} args - Arguments to find a MatterTopic
     * @example
     * // Get one MatterTopic
     * const matterTopic = await prisma.matterTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatterTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, MatterTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatterTopicClient<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MatterTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterTopicFindFirstArgs} args - Arguments to find a MatterTopic
     * @example
     * // Get one MatterTopic
     * const matterTopic = await prisma.matterTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatterTopicFindFirstArgs>(args?: SelectSubset<T, MatterTopicFindFirstArgs<ExtArgs>>): Prisma__MatterTopicClient<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MatterTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterTopicFindFirstOrThrowArgs} args - Arguments to find a MatterTopic
     * @example
     * // Get one MatterTopic
     * const matterTopic = await prisma.matterTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatterTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, MatterTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatterTopicClient<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MatterTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatterTopics
     * const matterTopics = await prisma.matterTopic.findMany()
     * 
     * // Get first 10 MatterTopics
     * const matterTopics = await prisma.matterTopic.findMany({ take: 10 })
     * 
     * // Only select the `matterId`
     * const matterTopicWithMatterIdOnly = await prisma.matterTopic.findMany({ select: { matterId: true } })
     * 
     */
    findMany<T extends MatterTopicFindManyArgs>(args?: SelectSubset<T, MatterTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MatterTopic.
     * @param {MatterTopicCreateArgs} args - Arguments to create a MatterTopic.
     * @example
     * // Create one MatterTopic
     * const MatterTopic = await prisma.matterTopic.create({
     *   data: {
     *     // ... data to create a MatterTopic
     *   }
     * })
     * 
     */
    create<T extends MatterTopicCreateArgs>(args: SelectSubset<T, MatterTopicCreateArgs<ExtArgs>>): Prisma__MatterTopicClient<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MatterTopics.
     * @param {MatterTopicCreateManyArgs} args - Arguments to create many MatterTopics.
     * @example
     * // Create many MatterTopics
     * const matterTopic = await prisma.matterTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatterTopicCreateManyArgs>(args?: SelectSubset<T, MatterTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatterTopics and returns the data saved in the database.
     * @param {MatterTopicCreateManyAndReturnArgs} args - Arguments to create many MatterTopics.
     * @example
     * // Create many MatterTopics
     * const matterTopic = await prisma.matterTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatterTopics and only return the `matterId`
     * const matterTopicWithMatterIdOnly = await prisma.matterTopic.createManyAndReturn({ 
     *   select: { matterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatterTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, MatterTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MatterTopic.
     * @param {MatterTopicDeleteArgs} args - Arguments to delete one MatterTopic.
     * @example
     * // Delete one MatterTopic
     * const MatterTopic = await prisma.matterTopic.delete({
     *   where: {
     *     // ... filter to delete one MatterTopic
     *   }
     * })
     * 
     */
    delete<T extends MatterTopicDeleteArgs>(args: SelectSubset<T, MatterTopicDeleteArgs<ExtArgs>>): Prisma__MatterTopicClient<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MatterTopic.
     * @param {MatterTopicUpdateArgs} args - Arguments to update one MatterTopic.
     * @example
     * // Update one MatterTopic
     * const matterTopic = await prisma.matterTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatterTopicUpdateArgs>(args: SelectSubset<T, MatterTopicUpdateArgs<ExtArgs>>): Prisma__MatterTopicClient<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MatterTopics.
     * @param {MatterTopicDeleteManyArgs} args - Arguments to filter MatterTopics to delete.
     * @example
     * // Delete a few MatterTopics
     * const { count } = await prisma.matterTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatterTopicDeleteManyArgs>(args?: SelectSubset<T, MatterTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatterTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatterTopics
     * const matterTopic = await prisma.matterTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatterTopicUpdateManyArgs>(args: SelectSubset<T, MatterTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatterTopic.
     * @param {MatterTopicUpsertArgs} args - Arguments to update or create a MatterTopic.
     * @example
     * // Update or create a MatterTopic
     * const matterTopic = await prisma.matterTopic.upsert({
     *   create: {
     *     // ... data to create a MatterTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatterTopic we want to update
     *   }
     * })
     */
    upsert<T extends MatterTopicUpsertArgs>(args: SelectSubset<T, MatterTopicUpsertArgs<ExtArgs>>): Prisma__MatterTopicClient<$Result.GetResult<Prisma.$MatterTopicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MatterTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterTopicCountArgs} args - Arguments to filter MatterTopics to count.
     * @example
     * // Count the number of MatterTopics
     * const count = await prisma.matterTopic.count({
     *   where: {
     *     // ... the filter for the MatterTopics we want to count
     *   }
     * })
    **/
    count<T extends MatterTopicCountArgs>(
      args?: Subset<T, MatterTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatterTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatterTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatterTopicAggregateArgs>(args: Subset<T, MatterTopicAggregateArgs>): Prisma.PrismaPromise<GetMatterTopicAggregateType<T>>

    /**
     * Group by MatterTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatterTopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatterTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatterTopicGroupByArgs['orderBy'] }
        : { orderBy?: MatterTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatterTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatterTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatterTopic model
   */
  readonly fields: MatterTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatterTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatterTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matter<T extends MatterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatterDefaultArgs<ExtArgs>>): Prisma__MatterClient<$Result.GetResult<Prisma.$MatterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    topic<T extends TopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicDefaultArgs<ExtArgs>>): Prisma__TopicClient<$Result.GetResult<Prisma.$TopicPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatterTopic model
   */ 
  interface MatterTopicFieldRefs {
    readonly matterId: FieldRef<"MatterTopic", 'Int'>
    readonly topicId: FieldRef<"MatterTopic", 'Int'>
    readonly weight: FieldRef<"MatterTopic", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MatterTopic findUnique
   */
  export type MatterTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    /**
     * Filter, which MatterTopic to fetch.
     */
    where: MatterTopicWhereUniqueInput
  }

  /**
   * MatterTopic findUniqueOrThrow
   */
  export type MatterTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    /**
     * Filter, which MatterTopic to fetch.
     */
    where: MatterTopicWhereUniqueInput
  }

  /**
   * MatterTopic findFirst
   */
  export type MatterTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    /**
     * Filter, which MatterTopic to fetch.
     */
    where?: MatterTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterTopics to fetch.
     */
    orderBy?: MatterTopicOrderByWithRelationInput | MatterTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatterTopics.
     */
    cursor?: MatterTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatterTopics.
     */
    distinct?: MatterTopicScalarFieldEnum | MatterTopicScalarFieldEnum[]
  }

  /**
   * MatterTopic findFirstOrThrow
   */
  export type MatterTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    /**
     * Filter, which MatterTopic to fetch.
     */
    where?: MatterTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterTopics to fetch.
     */
    orderBy?: MatterTopicOrderByWithRelationInput | MatterTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatterTopics.
     */
    cursor?: MatterTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatterTopics.
     */
    distinct?: MatterTopicScalarFieldEnum | MatterTopicScalarFieldEnum[]
  }

  /**
   * MatterTopic findMany
   */
  export type MatterTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    /**
     * Filter, which MatterTopics to fetch.
     */
    where?: MatterTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatterTopics to fetch.
     */
    orderBy?: MatterTopicOrderByWithRelationInput | MatterTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatterTopics.
     */
    cursor?: MatterTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatterTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatterTopics.
     */
    skip?: number
    distinct?: MatterTopicScalarFieldEnum | MatterTopicScalarFieldEnum[]
  }

  /**
   * MatterTopic create
   */
  export type MatterTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a MatterTopic.
     */
    data: XOR<MatterTopicCreateInput, MatterTopicUncheckedCreateInput>
  }

  /**
   * MatterTopic createMany
   */
  export type MatterTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatterTopics.
     */
    data: MatterTopicCreateManyInput | MatterTopicCreateManyInput[]
  }

  /**
   * MatterTopic createManyAndReturn
   */
  export type MatterTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MatterTopics.
     */
    data: MatterTopicCreateManyInput | MatterTopicCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatterTopic update
   */
  export type MatterTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a MatterTopic.
     */
    data: XOR<MatterTopicUpdateInput, MatterTopicUncheckedUpdateInput>
    /**
     * Choose, which MatterTopic to update.
     */
    where: MatterTopicWhereUniqueInput
  }

  /**
   * MatterTopic updateMany
   */
  export type MatterTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatterTopics.
     */
    data: XOR<MatterTopicUpdateManyMutationInput, MatterTopicUncheckedUpdateManyInput>
    /**
     * Filter which MatterTopics to update
     */
    where?: MatterTopicWhereInput
  }

  /**
   * MatterTopic upsert
   */
  export type MatterTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the MatterTopic to update in case it exists.
     */
    where: MatterTopicWhereUniqueInput
    /**
     * In case the MatterTopic found by the `where` argument doesn't exist, create a new MatterTopic with this data.
     */
    create: XOR<MatterTopicCreateInput, MatterTopicUncheckedCreateInput>
    /**
     * In case the MatterTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatterTopicUpdateInput, MatterTopicUncheckedUpdateInput>
  }

  /**
   * MatterTopic delete
   */
  export type MatterTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
    /**
     * Filter which MatterTopic to delete.
     */
    where: MatterTopicWhereUniqueInput
  }

  /**
   * MatterTopic deleteMany
   */
  export type MatterTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatterTopics to delete
     */
    where?: MatterTopicWhereInput
  }

  /**
   * MatterTopic without action
   */
  export type MatterTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatterTopic
     */
    select?: MatterTopicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatterTopicInclude<ExtArgs> | null
  }


  /**
   * Model SupervisorStat
   */

  export type AggregateSupervisorStat = {
    _count: SupervisorStatCountAggregateOutputType | null
    _avg: SupervisorStatAvgAggregateOutputType | null
    _sum: SupervisorStatSumAggregateOutputType | null
    _min: SupervisorStatMinAggregateOutputType | null
    _max: SupervisorStatMaxAggregateOutputType | null
  }

  export type SupervisorStatAvgAggregateOutputType = {
    supervisorId: number | null
    totalVotes: number | null
    ayes: number | null
    noes: number | null
    absences: number | null
    attendanceRate: number | null
    dissentRate: number | null
    sponsored: number | null
    cosponsored: number | null
    passedSponsored: number | null
    impactScore: number | null
    activityScore: number | null
    independence: number | null
    overallScore: number | null
    rank: number | null
  }

  export type SupervisorStatSumAggregateOutputType = {
    supervisorId: number | null
    totalVotes: number | null
    ayes: number | null
    noes: number | null
    absences: number | null
    attendanceRate: number | null
    dissentRate: number | null
    sponsored: number | null
    cosponsored: number | null
    passedSponsored: number | null
    impactScore: number | null
    activityScore: number | null
    independence: number | null
    overallScore: number | null
    rank: number | null
  }

  export type SupervisorStatMinAggregateOutputType = {
    supervisorId: number | null
    totalVotes: number | null
    ayes: number | null
    noes: number | null
    absences: number | null
    attendanceRate: number | null
    dissentRate: number | null
    sponsored: number | null
    cosponsored: number | null
    passedSponsored: number | null
    impactScore: number | null
    activityScore: number | null
    independence: number | null
    overallScore: number | null
    rank: number | null
    grade: string | null
    topTopicsJson: string | null
    updatedAt: Date | null
  }

  export type SupervisorStatMaxAggregateOutputType = {
    supervisorId: number | null
    totalVotes: number | null
    ayes: number | null
    noes: number | null
    absences: number | null
    attendanceRate: number | null
    dissentRate: number | null
    sponsored: number | null
    cosponsored: number | null
    passedSponsored: number | null
    impactScore: number | null
    activityScore: number | null
    independence: number | null
    overallScore: number | null
    rank: number | null
    grade: string | null
    topTopicsJson: string | null
    updatedAt: Date | null
  }

  export type SupervisorStatCountAggregateOutputType = {
    supervisorId: number
    totalVotes: number
    ayes: number
    noes: number
    absences: number
    attendanceRate: number
    dissentRate: number
    sponsored: number
    cosponsored: number
    passedSponsored: number
    impactScore: number
    activityScore: number
    independence: number
    overallScore: number
    rank: number
    grade: number
    topTopicsJson: number
    updatedAt: number
    _all: number
  }


  export type SupervisorStatAvgAggregateInputType = {
    supervisorId?: true
    totalVotes?: true
    ayes?: true
    noes?: true
    absences?: true
    attendanceRate?: true
    dissentRate?: true
    sponsored?: true
    cosponsored?: true
    passedSponsored?: true
    impactScore?: true
    activityScore?: true
    independence?: true
    overallScore?: true
    rank?: true
  }

  export type SupervisorStatSumAggregateInputType = {
    supervisorId?: true
    totalVotes?: true
    ayes?: true
    noes?: true
    absences?: true
    attendanceRate?: true
    dissentRate?: true
    sponsored?: true
    cosponsored?: true
    passedSponsored?: true
    impactScore?: true
    activityScore?: true
    independence?: true
    overallScore?: true
    rank?: true
  }

  export type SupervisorStatMinAggregateInputType = {
    supervisorId?: true
    totalVotes?: true
    ayes?: true
    noes?: true
    absences?: true
    attendanceRate?: true
    dissentRate?: true
    sponsored?: true
    cosponsored?: true
    passedSponsored?: true
    impactScore?: true
    activityScore?: true
    independence?: true
    overallScore?: true
    rank?: true
    grade?: true
    topTopicsJson?: true
    updatedAt?: true
  }

  export type SupervisorStatMaxAggregateInputType = {
    supervisorId?: true
    totalVotes?: true
    ayes?: true
    noes?: true
    absences?: true
    attendanceRate?: true
    dissentRate?: true
    sponsored?: true
    cosponsored?: true
    passedSponsored?: true
    impactScore?: true
    activityScore?: true
    independence?: true
    overallScore?: true
    rank?: true
    grade?: true
    topTopicsJson?: true
    updatedAt?: true
  }

  export type SupervisorStatCountAggregateInputType = {
    supervisorId?: true
    totalVotes?: true
    ayes?: true
    noes?: true
    absences?: true
    attendanceRate?: true
    dissentRate?: true
    sponsored?: true
    cosponsored?: true
    passedSponsored?: true
    impactScore?: true
    activityScore?: true
    independence?: true
    overallScore?: true
    rank?: true
    grade?: true
    topTopicsJson?: true
    updatedAt?: true
    _all?: true
  }

  export type SupervisorStatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupervisorStat to aggregate.
     */
    where?: SupervisorStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisorStats to fetch.
     */
    orderBy?: SupervisorStatOrderByWithRelationInput | SupervisorStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupervisorStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisorStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisorStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupervisorStats
    **/
    _count?: true | SupervisorStatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupervisorStatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupervisorStatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupervisorStatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupervisorStatMaxAggregateInputType
  }

  export type GetSupervisorStatAggregateType<T extends SupervisorStatAggregateArgs> = {
        [P in keyof T & keyof AggregateSupervisorStat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupervisorStat[P]>
      : GetScalarType<T[P], AggregateSupervisorStat[P]>
  }




  export type SupervisorStatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupervisorStatWhereInput
    orderBy?: SupervisorStatOrderByWithAggregationInput | SupervisorStatOrderByWithAggregationInput[]
    by: SupervisorStatScalarFieldEnum[] | SupervisorStatScalarFieldEnum
    having?: SupervisorStatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupervisorStatCountAggregateInputType | true
    _avg?: SupervisorStatAvgAggregateInputType
    _sum?: SupervisorStatSumAggregateInputType
    _min?: SupervisorStatMinAggregateInputType
    _max?: SupervisorStatMaxAggregateInputType
  }

  export type SupervisorStatGroupByOutputType = {
    supervisorId: number
    totalVotes: number
    ayes: number
    noes: number
    absences: number
    attendanceRate: number
    dissentRate: number
    sponsored: number
    cosponsored: number
    passedSponsored: number
    impactScore: number
    activityScore: number
    independence: number
    overallScore: number
    rank: number | null
    grade: string | null
    topTopicsJson: string | null
    updatedAt: Date
    _count: SupervisorStatCountAggregateOutputType | null
    _avg: SupervisorStatAvgAggregateOutputType | null
    _sum: SupervisorStatSumAggregateOutputType | null
    _min: SupervisorStatMinAggregateOutputType | null
    _max: SupervisorStatMaxAggregateOutputType | null
  }

  type GetSupervisorStatGroupByPayload<T extends SupervisorStatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupervisorStatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupervisorStatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupervisorStatGroupByOutputType[P]>
            : GetScalarType<T[P], SupervisorStatGroupByOutputType[P]>
        }
      >
    >


  export type SupervisorStatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supervisorId?: boolean
    totalVotes?: boolean
    ayes?: boolean
    noes?: boolean
    absences?: boolean
    attendanceRate?: boolean
    dissentRate?: boolean
    sponsored?: boolean
    cosponsored?: boolean
    passedSponsored?: boolean
    impactScore?: boolean
    activityScore?: boolean
    independence?: boolean
    overallScore?: boolean
    rank?: boolean
    grade?: boolean
    topTopicsJson?: boolean
    updatedAt?: boolean
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisorStat"]>

  export type SupervisorStatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supervisorId?: boolean
    totalVotes?: boolean
    ayes?: boolean
    noes?: boolean
    absences?: boolean
    attendanceRate?: boolean
    dissentRate?: boolean
    sponsored?: boolean
    cosponsored?: boolean
    passedSponsored?: boolean
    impactScore?: boolean
    activityScore?: boolean
    independence?: boolean
    overallScore?: boolean
    rank?: boolean
    grade?: boolean
    topTopicsJson?: boolean
    updatedAt?: boolean
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisorStat"]>

  export type SupervisorStatSelectScalar = {
    supervisorId?: boolean
    totalVotes?: boolean
    ayes?: boolean
    noes?: boolean
    absences?: boolean
    attendanceRate?: boolean
    dissentRate?: boolean
    sponsored?: boolean
    cosponsored?: boolean
    passedSponsored?: boolean
    impactScore?: boolean
    activityScore?: boolean
    independence?: boolean
    overallScore?: boolean
    rank?: boolean
    grade?: boolean
    topTopicsJson?: boolean
    updatedAt?: boolean
  }

  export type SupervisorStatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }
  export type SupervisorStatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | SupervisorDefaultArgs<ExtArgs>
  }

  export type $SupervisorStatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupervisorStat"
    objects: {
      supervisor: Prisma.$SupervisorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      supervisorId: number
      totalVotes: number
      ayes: number
      noes: number
      absences: number
      attendanceRate: number
      dissentRate: number
      sponsored: number
      cosponsored: number
      passedSponsored: number
      impactScore: number
      activityScore: number
      independence: number
      overallScore: number
      rank: number | null
      grade: string | null
      topTopicsJson: string | null
      updatedAt: Date
    }, ExtArgs["result"]["supervisorStat"]>
    composites: {}
  }

  type SupervisorStatGetPayload<S extends boolean | null | undefined | SupervisorStatDefaultArgs> = $Result.GetResult<Prisma.$SupervisorStatPayload, S>

  type SupervisorStatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupervisorStatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupervisorStatCountAggregateInputType | true
    }

  export interface SupervisorStatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupervisorStat'], meta: { name: 'SupervisorStat' } }
    /**
     * Find zero or one SupervisorStat that matches the filter.
     * @param {SupervisorStatFindUniqueArgs} args - Arguments to find a SupervisorStat
     * @example
     * // Get one SupervisorStat
     * const supervisorStat = await prisma.supervisorStat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupervisorStatFindUniqueArgs>(args: SelectSubset<T, SupervisorStatFindUniqueArgs<ExtArgs>>): Prisma__SupervisorStatClient<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SupervisorStat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupervisorStatFindUniqueOrThrowArgs} args - Arguments to find a SupervisorStat
     * @example
     * // Get one SupervisorStat
     * const supervisorStat = await prisma.supervisorStat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupervisorStatFindUniqueOrThrowArgs>(args: SelectSubset<T, SupervisorStatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupervisorStatClient<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SupervisorStat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorStatFindFirstArgs} args - Arguments to find a SupervisorStat
     * @example
     * // Get one SupervisorStat
     * const supervisorStat = await prisma.supervisorStat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupervisorStatFindFirstArgs>(args?: SelectSubset<T, SupervisorStatFindFirstArgs<ExtArgs>>): Prisma__SupervisorStatClient<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SupervisorStat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorStatFindFirstOrThrowArgs} args - Arguments to find a SupervisorStat
     * @example
     * // Get one SupervisorStat
     * const supervisorStat = await prisma.supervisorStat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupervisorStatFindFirstOrThrowArgs>(args?: SelectSubset<T, SupervisorStatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupervisorStatClient<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SupervisorStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorStatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupervisorStats
     * const supervisorStats = await prisma.supervisorStat.findMany()
     * 
     * // Get first 10 SupervisorStats
     * const supervisorStats = await prisma.supervisorStat.findMany({ take: 10 })
     * 
     * // Only select the `supervisorId`
     * const supervisorStatWithSupervisorIdOnly = await prisma.supervisorStat.findMany({ select: { supervisorId: true } })
     * 
     */
    findMany<T extends SupervisorStatFindManyArgs>(args?: SelectSubset<T, SupervisorStatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SupervisorStat.
     * @param {SupervisorStatCreateArgs} args - Arguments to create a SupervisorStat.
     * @example
     * // Create one SupervisorStat
     * const SupervisorStat = await prisma.supervisorStat.create({
     *   data: {
     *     // ... data to create a SupervisorStat
     *   }
     * })
     * 
     */
    create<T extends SupervisorStatCreateArgs>(args: SelectSubset<T, SupervisorStatCreateArgs<ExtArgs>>): Prisma__SupervisorStatClient<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SupervisorStats.
     * @param {SupervisorStatCreateManyArgs} args - Arguments to create many SupervisorStats.
     * @example
     * // Create many SupervisorStats
     * const supervisorStat = await prisma.supervisorStat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupervisorStatCreateManyArgs>(args?: SelectSubset<T, SupervisorStatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupervisorStats and returns the data saved in the database.
     * @param {SupervisorStatCreateManyAndReturnArgs} args - Arguments to create many SupervisorStats.
     * @example
     * // Create many SupervisorStats
     * const supervisorStat = await prisma.supervisorStat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupervisorStats and only return the `supervisorId`
     * const supervisorStatWithSupervisorIdOnly = await prisma.supervisorStat.createManyAndReturn({ 
     *   select: { supervisorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupervisorStatCreateManyAndReturnArgs>(args?: SelectSubset<T, SupervisorStatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SupervisorStat.
     * @param {SupervisorStatDeleteArgs} args - Arguments to delete one SupervisorStat.
     * @example
     * // Delete one SupervisorStat
     * const SupervisorStat = await prisma.supervisorStat.delete({
     *   where: {
     *     // ... filter to delete one SupervisorStat
     *   }
     * })
     * 
     */
    delete<T extends SupervisorStatDeleteArgs>(args: SelectSubset<T, SupervisorStatDeleteArgs<ExtArgs>>): Prisma__SupervisorStatClient<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SupervisorStat.
     * @param {SupervisorStatUpdateArgs} args - Arguments to update one SupervisorStat.
     * @example
     * // Update one SupervisorStat
     * const supervisorStat = await prisma.supervisorStat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupervisorStatUpdateArgs>(args: SelectSubset<T, SupervisorStatUpdateArgs<ExtArgs>>): Prisma__SupervisorStatClient<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SupervisorStats.
     * @param {SupervisorStatDeleteManyArgs} args - Arguments to filter SupervisorStats to delete.
     * @example
     * // Delete a few SupervisorStats
     * const { count } = await prisma.supervisorStat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupervisorStatDeleteManyArgs>(args?: SelectSubset<T, SupervisorStatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupervisorStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorStatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupervisorStats
     * const supervisorStat = await prisma.supervisorStat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupervisorStatUpdateManyArgs>(args: SelectSubset<T, SupervisorStatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SupervisorStat.
     * @param {SupervisorStatUpsertArgs} args - Arguments to update or create a SupervisorStat.
     * @example
     * // Update or create a SupervisorStat
     * const supervisorStat = await prisma.supervisorStat.upsert({
     *   create: {
     *     // ... data to create a SupervisorStat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupervisorStat we want to update
     *   }
     * })
     */
    upsert<T extends SupervisorStatUpsertArgs>(args: SelectSubset<T, SupervisorStatUpsertArgs<ExtArgs>>): Prisma__SupervisorStatClient<$Result.GetResult<Prisma.$SupervisorStatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SupervisorStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorStatCountArgs} args - Arguments to filter SupervisorStats to count.
     * @example
     * // Count the number of SupervisorStats
     * const count = await prisma.supervisorStat.count({
     *   where: {
     *     // ... the filter for the SupervisorStats we want to count
     *   }
     * })
    **/
    count<T extends SupervisorStatCountArgs>(
      args?: Subset<T, SupervisorStatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupervisorStatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupervisorStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorStatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupervisorStatAggregateArgs>(args: Subset<T, SupervisorStatAggregateArgs>): Prisma.PrismaPromise<GetSupervisorStatAggregateType<T>>

    /**
     * Group by SupervisorStat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorStatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupervisorStatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupervisorStatGroupByArgs['orderBy'] }
        : { orderBy?: SupervisorStatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupervisorStatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisorStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupervisorStat model
   */
  readonly fields: SupervisorStatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupervisorStat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupervisorStatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supervisor<T extends SupervisorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupervisorDefaultArgs<ExtArgs>>): Prisma__SupervisorClient<$Result.GetResult<Prisma.$SupervisorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupervisorStat model
   */ 
  interface SupervisorStatFieldRefs {
    readonly supervisorId: FieldRef<"SupervisorStat", 'Int'>
    readonly totalVotes: FieldRef<"SupervisorStat", 'Int'>
    readonly ayes: FieldRef<"SupervisorStat", 'Int'>
    readonly noes: FieldRef<"SupervisorStat", 'Int'>
    readonly absences: FieldRef<"SupervisorStat", 'Int'>
    readonly attendanceRate: FieldRef<"SupervisorStat", 'Float'>
    readonly dissentRate: FieldRef<"SupervisorStat", 'Float'>
    readonly sponsored: FieldRef<"SupervisorStat", 'Int'>
    readonly cosponsored: FieldRef<"SupervisorStat", 'Int'>
    readonly passedSponsored: FieldRef<"SupervisorStat", 'Int'>
    readonly impactScore: FieldRef<"SupervisorStat", 'Float'>
    readonly activityScore: FieldRef<"SupervisorStat", 'Float'>
    readonly independence: FieldRef<"SupervisorStat", 'Float'>
    readonly overallScore: FieldRef<"SupervisorStat", 'Float'>
    readonly rank: FieldRef<"SupervisorStat", 'Int'>
    readonly grade: FieldRef<"SupervisorStat", 'String'>
    readonly topTopicsJson: FieldRef<"SupervisorStat", 'String'>
    readonly updatedAt: FieldRef<"SupervisorStat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupervisorStat findUnique
   */
  export type SupervisorStatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    /**
     * Filter, which SupervisorStat to fetch.
     */
    where: SupervisorStatWhereUniqueInput
  }

  /**
   * SupervisorStat findUniqueOrThrow
   */
  export type SupervisorStatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    /**
     * Filter, which SupervisorStat to fetch.
     */
    where: SupervisorStatWhereUniqueInput
  }

  /**
   * SupervisorStat findFirst
   */
  export type SupervisorStatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    /**
     * Filter, which SupervisorStat to fetch.
     */
    where?: SupervisorStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisorStats to fetch.
     */
    orderBy?: SupervisorStatOrderByWithRelationInput | SupervisorStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupervisorStats.
     */
    cursor?: SupervisorStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisorStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisorStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupervisorStats.
     */
    distinct?: SupervisorStatScalarFieldEnum | SupervisorStatScalarFieldEnum[]
  }

  /**
   * SupervisorStat findFirstOrThrow
   */
  export type SupervisorStatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    /**
     * Filter, which SupervisorStat to fetch.
     */
    where?: SupervisorStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisorStats to fetch.
     */
    orderBy?: SupervisorStatOrderByWithRelationInput | SupervisorStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupervisorStats.
     */
    cursor?: SupervisorStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisorStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisorStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupervisorStats.
     */
    distinct?: SupervisorStatScalarFieldEnum | SupervisorStatScalarFieldEnum[]
  }

  /**
   * SupervisorStat findMany
   */
  export type SupervisorStatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    /**
     * Filter, which SupervisorStats to fetch.
     */
    where?: SupervisorStatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupervisorStats to fetch.
     */
    orderBy?: SupervisorStatOrderByWithRelationInput | SupervisorStatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupervisorStats.
     */
    cursor?: SupervisorStatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupervisorStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupervisorStats.
     */
    skip?: number
    distinct?: SupervisorStatScalarFieldEnum | SupervisorStatScalarFieldEnum[]
  }

  /**
   * SupervisorStat create
   */
  export type SupervisorStatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    /**
     * The data needed to create a SupervisorStat.
     */
    data: XOR<SupervisorStatCreateInput, SupervisorStatUncheckedCreateInput>
  }

  /**
   * SupervisorStat createMany
   */
  export type SupervisorStatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupervisorStats.
     */
    data: SupervisorStatCreateManyInput | SupervisorStatCreateManyInput[]
  }

  /**
   * SupervisorStat createManyAndReturn
   */
  export type SupervisorStatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SupervisorStats.
     */
    data: SupervisorStatCreateManyInput | SupervisorStatCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupervisorStat update
   */
  export type SupervisorStatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    /**
     * The data needed to update a SupervisorStat.
     */
    data: XOR<SupervisorStatUpdateInput, SupervisorStatUncheckedUpdateInput>
    /**
     * Choose, which SupervisorStat to update.
     */
    where: SupervisorStatWhereUniqueInput
  }

  /**
   * SupervisorStat updateMany
   */
  export type SupervisorStatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupervisorStats.
     */
    data: XOR<SupervisorStatUpdateManyMutationInput, SupervisorStatUncheckedUpdateManyInput>
    /**
     * Filter which SupervisorStats to update
     */
    where?: SupervisorStatWhereInput
  }

  /**
   * SupervisorStat upsert
   */
  export type SupervisorStatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    /**
     * The filter to search for the SupervisorStat to update in case it exists.
     */
    where: SupervisorStatWhereUniqueInput
    /**
     * In case the SupervisorStat found by the `where` argument doesn't exist, create a new SupervisorStat with this data.
     */
    create: XOR<SupervisorStatCreateInput, SupervisorStatUncheckedCreateInput>
    /**
     * In case the SupervisorStat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupervisorStatUpdateInput, SupervisorStatUncheckedUpdateInput>
  }

  /**
   * SupervisorStat delete
   */
  export type SupervisorStatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
    /**
     * Filter which SupervisorStat to delete.
     */
    where: SupervisorStatWhereUniqueInput
  }

  /**
   * SupervisorStat deleteMany
   */
  export type SupervisorStatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupervisorStats to delete
     */
    where?: SupervisorStatWhereInput
  }

  /**
   * SupervisorStat without action
   */
  export type SupervisorStatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorStat
     */
    select?: SupervisorStatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupervisorStatInclude<ExtArgs> | null
  }


  /**
   * Model IngestLog
   */

  export type AggregateIngestLog = {
    _count: IngestLogCountAggregateOutputType | null
    _avg: IngestLogAvgAggregateOutputType | null
    _sum: IngestLogSumAggregateOutputType | null
    _min: IngestLogMinAggregateOutputType | null
    _max: IngestLogMaxAggregateOutputType | null
  }

  export type IngestLogAvgAggregateOutputType = {
    id: number | null
    meetings: number | null
    matters: number | null
    actions: number | null
    votes: number | null
  }

  export type IngestLogSumAggregateOutputType = {
    id: number | null
    meetings: number | null
    matters: number | null
    actions: number | null
    votes: number | null
  }

  export type IngestLogMinAggregateOutputType = {
    id: number | null
    startedAt: Date | null
    finishedAt: Date | null
    meetings: number | null
    matters: number | null
    actions: number | null
    votes: number | null
    note: string | null
  }

  export type IngestLogMaxAggregateOutputType = {
    id: number | null
    startedAt: Date | null
    finishedAt: Date | null
    meetings: number | null
    matters: number | null
    actions: number | null
    votes: number | null
    note: string | null
  }

  export type IngestLogCountAggregateOutputType = {
    id: number
    startedAt: number
    finishedAt: number
    meetings: number
    matters: number
    actions: number
    votes: number
    note: number
    _all: number
  }


  export type IngestLogAvgAggregateInputType = {
    id?: true
    meetings?: true
    matters?: true
    actions?: true
    votes?: true
  }

  export type IngestLogSumAggregateInputType = {
    id?: true
    meetings?: true
    matters?: true
    actions?: true
    votes?: true
  }

  export type IngestLogMinAggregateInputType = {
    id?: true
    startedAt?: true
    finishedAt?: true
    meetings?: true
    matters?: true
    actions?: true
    votes?: true
    note?: true
  }

  export type IngestLogMaxAggregateInputType = {
    id?: true
    startedAt?: true
    finishedAt?: true
    meetings?: true
    matters?: true
    actions?: true
    votes?: true
    note?: true
  }

  export type IngestLogCountAggregateInputType = {
    id?: true
    startedAt?: true
    finishedAt?: true
    meetings?: true
    matters?: true
    actions?: true
    votes?: true
    note?: true
    _all?: true
  }

  export type IngestLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestLog to aggregate.
     */
    where?: IngestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestLogs to fetch.
     */
    orderBy?: IngestLogOrderByWithRelationInput | IngestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IngestLogs
    **/
    _count?: true | IngestLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngestLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngestLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngestLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngestLogMaxAggregateInputType
  }

  export type GetIngestLogAggregateType<T extends IngestLogAggregateArgs> = {
        [P in keyof T & keyof AggregateIngestLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngestLog[P]>
      : GetScalarType<T[P], AggregateIngestLog[P]>
  }




  export type IngestLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngestLogWhereInput
    orderBy?: IngestLogOrderByWithAggregationInput | IngestLogOrderByWithAggregationInput[]
    by: IngestLogScalarFieldEnum[] | IngestLogScalarFieldEnum
    having?: IngestLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngestLogCountAggregateInputType | true
    _avg?: IngestLogAvgAggregateInputType
    _sum?: IngestLogSumAggregateInputType
    _min?: IngestLogMinAggregateInputType
    _max?: IngestLogMaxAggregateInputType
  }

  export type IngestLogGroupByOutputType = {
    id: number
    startedAt: Date
    finishedAt: Date | null
    meetings: number
    matters: number
    actions: number
    votes: number
    note: string | null
    _count: IngestLogCountAggregateOutputType | null
    _avg: IngestLogAvgAggregateOutputType | null
    _sum: IngestLogSumAggregateOutputType | null
    _min: IngestLogMinAggregateOutputType | null
    _max: IngestLogMaxAggregateOutputType | null
  }

  type GetIngestLogGroupByPayload<T extends IngestLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngestLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngestLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngestLogGroupByOutputType[P]>
            : GetScalarType<T[P], IngestLogGroupByOutputType[P]>
        }
      >
    >


  export type IngestLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    meetings?: boolean
    matters?: boolean
    actions?: boolean
    votes?: boolean
    note?: boolean
  }, ExtArgs["result"]["ingestLog"]>

  export type IngestLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    meetings?: boolean
    matters?: boolean
    actions?: boolean
    votes?: boolean
    note?: boolean
  }, ExtArgs["result"]["ingestLog"]>

  export type IngestLogSelectScalar = {
    id?: boolean
    startedAt?: boolean
    finishedAt?: boolean
    meetings?: boolean
    matters?: boolean
    actions?: boolean
    votes?: boolean
    note?: boolean
  }


  export type $IngestLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IngestLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startedAt: Date
      finishedAt: Date | null
      meetings: number
      matters: number
      actions: number
      votes: number
      note: string | null
    }, ExtArgs["result"]["ingestLog"]>
    composites: {}
  }

  type IngestLogGetPayload<S extends boolean | null | undefined | IngestLogDefaultArgs> = $Result.GetResult<Prisma.$IngestLogPayload, S>

  type IngestLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IngestLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IngestLogCountAggregateInputType | true
    }

  export interface IngestLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IngestLog'], meta: { name: 'IngestLog' } }
    /**
     * Find zero or one IngestLog that matches the filter.
     * @param {IngestLogFindUniqueArgs} args - Arguments to find a IngestLog
     * @example
     * // Get one IngestLog
     * const ingestLog = await prisma.ingestLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngestLogFindUniqueArgs>(args: SelectSubset<T, IngestLogFindUniqueArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one IngestLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IngestLogFindUniqueOrThrowArgs} args - Arguments to find a IngestLog
     * @example
     * // Get one IngestLog
     * const ingestLog = await prisma.ingestLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngestLogFindUniqueOrThrowArgs>(args: SelectSubset<T, IngestLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first IngestLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogFindFirstArgs} args - Arguments to find a IngestLog
     * @example
     * // Get one IngestLog
     * const ingestLog = await prisma.ingestLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngestLogFindFirstArgs>(args?: SelectSubset<T, IngestLogFindFirstArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first IngestLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogFindFirstOrThrowArgs} args - Arguments to find a IngestLog
     * @example
     * // Get one IngestLog
     * const ingestLog = await prisma.ingestLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngestLogFindFirstOrThrowArgs>(args?: SelectSubset<T, IngestLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more IngestLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IngestLogs
     * const ingestLogs = await prisma.ingestLog.findMany()
     * 
     * // Get first 10 IngestLogs
     * const ingestLogs = await prisma.ingestLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingestLogWithIdOnly = await prisma.ingestLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngestLogFindManyArgs>(args?: SelectSubset<T, IngestLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a IngestLog.
     * @param {IngestLogCreateArgs} args - Arguments to create a IngestLog.
     * @example
     * // Create one IngestLog
     * const IngestLog = await prisma.ingestLog.create({
     *   data: {
     *     // ... data to create a IngestLog
     *   }
     * })
     * 
     */
    create<T extends IngestLogCreateArgs>(args: SelectSubset<T, IngestLogCreateArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many IngestLogs.
     * @param {IngestLogCreateManyArgs} args - Arguments to create many IngestLogs.
     * @example
     * // Create many IngestLogs
     * const ingestLog = await prisma.ingestLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngestLogCreateManyArgs>(args?: SelectSubset<T, IngestLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IngestLogs and returns the data saved in the database.
     * @param {IngestLogCreateManyAndReturnArgs} args - Arguments to create many IngestLogs.
     * @example
     * // Create many IngestLogs
     * const ingestLog = await prisma.ingestLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IngestLogs and only return the `id`
     * const ingestLogWithIdOnly = await prisma.ingestLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngestLogCreateManyAndReturnArgs>(args?: SelectSubset<T, IngestLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a IngestLog.
     * @param {IngestLogDeleteArgs} args - Arguments to delete one IngestLog.
     * @example
     * // Delete one IngestLog
     * const IngestLog = await prisma.ingestLog.delete({
     *   where: {
     *     // ... filter to delete one IngestLog
     *   }
     * })
     * 
     */
    delete<T extends IngestLogDeleteArgs>(args: SelectSubset<T, IngestLogDeleteArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one IngestLog.
     * @param {IngestLogUpdateArgs} args - Arguments to update one IngestLog.
     * @example
     * // Update one IngestLog
     * const ingestLog = await prisma.ingestLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngestLogUpdateArgs>(args: SelectSubset<T, IngestLogUpdateArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more IngestLogs.
     * @param {IngestLogDeleteManyArgs} args - Arguments to filter IngestLogs to delete.
     * @example
     * // Delete a few IngestLogs
     * const { count } = await prisma.ingestLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngestLogDeleteManyArgs>(args?: SelectSubset<T, IngestLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IngestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IngestLogs
     * const ingestLog = await prisma.ingestLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngestLogUpdateManyArgs>(args: SelectSubset<T, IngestLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IngestLog.
     * @param {IngestLogUpsertArgs} args - Arguments to update or create a IngestLog.
     * @example
     * // Update or create a IngestLog
     * const ingestLog = await prisma.ingestLog.upsert({
     *   create: {
     *     // ... data to create a IngestLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IngestLog we want to update
     *   }
     * })
     */
    upsert<T extends IngestLogUpsertArgs>(args: SelectSubset<T, IngestLogUpsertArgs<ExtArgs>>): Prisma__IngestLogClient<$Result.GetResult<Prisma.$IngestLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of IngestLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogCountArgs} args - Arguments to filter IngestLogs to count.
     * @example
     * // Count the number of IngestLogs
     * const count = await prisma.ingestLog.count({
     *   where: {
     *     // ... the filter for the IngestLogs we want to count
     *   }
     * })
    **/
    count<T extends IngestLogCountArgs>(
      args?: Subset<T, IngestLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngestLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IngestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngestLogAggregateArgs>(args: Subset<T, IngestLogAggregateArgs>): Prisma.PrismaPromise<GetIngestLogAggregateType<T>>

    /**
     * Group by IngestLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngestLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngestLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngestLogGroupByArgs['orderBy'] }
        : { orderBy?: IngestLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngestLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngestLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IngestLog model
   */
  readonly fields: IngestLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IngestLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngestLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IngestLog model
   */ 
  interface IngestLogFieldRefs {
    readonly id: FieldRef<"IngestLog", 'Int'>
    readonly startedAt: FieldRef<"IngestLog", 'DateTime'>
    readonly finishedAt: FieldRef<"IngestLog", 'DateTime'>
    readonly meetings: FieldRef<"IngestLog", 'Int'>
    readonly matters: FieldRef<"IngestLog", 'Int'>
    readonly actions: FieldRef<"IngestLog", 'Int'>
    readonly votes: FieldRef<"IngestLog", 'Int'>
    readonly note: FieldRef<"IngestLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IngestLog findUnique
   */
  export type IngestLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Filter, which IngestLog to fetch.
     */
    where: IngestLogWhereUniqueInput
  }

  /**
   * IngestLog findUniqueOrThrow
   */
  export type IngestLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Filter, which IngestLog to fetch.
     */
    where: IngestLogWhereUniqueInput
  }

  /**
   * IngestLog findFirst
   */
  export type IngestLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Filter, which IngestLog to fetch.
     */
    where?: IngestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestLogs to fetch.
     */
    orderBy?: IngestLogOrderByWithRelationInput | IngestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestLogs.
     */
    cursor?: IngestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestLogs.
     */
    distinct?: IngestLogScalarFieldEnum | IngestLogScalarFieldEnum[]
  }

  /**
   * IngestLog findFirstOrThrow
   */
  export type IngestLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Filter, which IngestLog to fetch.
     */
    where?: IngestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestLogs to fetch.
     */
    orderBy?: IngestLogOrderByWithRelationInput | IngestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IngestLogs.
     */
    cursor?: IngestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IngestLogs.
     */
    distinct?: IngestLogScalarFieldEnum | IngestLogScalarFieldEnum[]
  }

  /**
   * IngestLog findMany
   */
  export type IngestLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Filter, which IngestLogs to fetch.
     */
    where?: IngestLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IngestLogs to fetch.
     */
    orderBy?: IngestLogOrderByWithRelationInput | IngestLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IngestLogs.
     */
    cursor?: IngestLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IngestLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IngestLogs.
     */
    skip?: number
    distinct?: IngestLogScalarFieldEnum | IngestLogScalarFieldEnum[]
  }

  /**
   * IngestLog create
   */
  export type IngestLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * The data needed to create a IngestLog.
     */
    data?: XOR<IngestLogCreateInput, IngestLogUncheckedCreateInput>
  }

  /**
   * IngestLog createMany
   */
  export type IngestLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IngestLogs.
     */
    data: IngestLogCreateManyInput | IngestLogCreateManyInput[]
  }

  /**
   * IngestLog createManyAndReturn
   */
  export type IngestLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many IngestLogs.
     */
    data: IngestLogCreateManyInput | IngestLogCreateManyInput[]
  }

  /**
   * IngestLog update
   */
  export type IngestLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * The data needed to update a IngestLog.
     */
    data: XOR<IngestLogUpdateInput, IngestLogUncheckedUpdateInput>
    /**
     * Choose, which IngestLog to update.
     */
    where: IngestLogWhereUniqueInput
  }

  /**
   * IngestLog updateMany
   */
  export type IngestLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IngestLogs.
     */
    data: XOR<IngestLogUpdateManyMutationInput, IngestLogUncheckedUpdateManyInput>
    /**
     * Filter which IngestLogs to update
     */
    where?: IngestLogWhereInput
  }

  /**
   * IngestLog upsert
   */
  export type IngestLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * The filter to search for the IngestLog to update in case it exists.
     */
    where: IngestLogWhereUniqueInput
    /**
     * In case the IngestLog found by the `where` argument doesn't exist, create a new IngestLog with this data.
     */
    create: XOR<IngestLogCreateInput, IngestLogUncheckedCreateInput>
    /**
     * In case the IngestLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngestLogUpdateInput, IngestLogUncheckedUpdateInput>
  }

  /**
   * IngestLog delete
   */
  export type IngestLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
    /**
     * Filter which IngestLog to delete.
     */
    where: IngestLogWhereUniqueInput
  }

  /**
   * IngestLog deleteMany
   */
  export type IngestLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IngestLogs to delete
     */
    where?: IngestLogWhereInput
  }

  /**
   * IngestLog without action
   */
  export type IngestLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngestLog
     */
    select?: IngestLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SupervisorScalarFieldEnum: {
    id: 'id',
    legistarId: 'legistarId',
    slug: 'slug',
    fullName: 'fullName',
    district: 'district',
    title: 'title',
    party: 'party',
    active: 'active',
    photoUrl: 'photoUrl',
    bio: 'bio',
    email: 'email',
    website: 'website',
    termStart: 'termStart',
    termEnd: 'termEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupervisorScalarFieldEnum = (typeof SupervisorScalarFieldEnum)[keyof typeof SupervisorScalarFieldEnum]


  export const MatterScalarFieldEnum: {
    id: 'id',
    legistarId: 'legistarId',
    legistarGuid: 'legistarGuid',
    file: 'file',
    type: 'type',
    status: 'status',
    title: 'title',
    summary: 'summary',
    summarySource: 'summarySource',
    fullText: 'fullText',
    introDate: 'introDate',
    finalDate: 'finalDate',
    sourceUrl: 'sourceUrl',
    inControl: 'inControl',
    originTimeline: 'originTimeline',
    originGeneratedAt: 'originGeneratedAt',
    importance: 'importance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatterScalarFieldEnum = (typeof MatterScalarFieldEnum)[keyof typeof MatterScalarFieldEnum]


  export const MatterAttachmentScalarFieldEnum: {
    id: 'id',
    matterId: 'matterId',
    name: 'name',
    url: 'url'
  };

  export type MatterAttachmentScalarFieldEnum = (typeof MatterAttachmentScalarFieldEnum)[keyof typeof MatterAttachmentScalarFieldEnum]


  export const MatterRelationScalarFieldEnum: {
    id: 'id',
    fromId: 'fromId',
    toFile: 'toFile',
    toLegistarId: 'toLegistarId'
  };

  export type MatterRelationScalarFieldEnum = (typeof MatterRelationScalarFieldEnum)[keyof typeof MatterRelationScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    legistarId: 'legistarId',
    legistarGuid: 'legistarGuid',
    bodyName: 'bodyName',
    date: 'date',
    location: 'location',
    sourceUrl: 'sourceUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const ActionScalarFieldEnum: {
    id: 'id',
    legistarId: 'legistarId',
    legistarGuid: 'legistarGuid',
    date: 'date',
    actionText: 'actionText',
    result: 'result',
    bodyName: 'bodyName',
    matterId: 'matterId',
    meetingId: 'meetingId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActionScalarFieldEnum = (typeof ActionScalarFieldEnum)[keyof typeof ActionScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    value: 'value',
    actionId: 'actionId',
    matterId: 'matterId',
    supervisorId: 'supervisorId',
    createdAt: 'createdAt'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const SponsorshipScalarFieldEnum: {
    id: 'id',
    role: 'role',
    matterId: 'matterId',
    supervisorId: 'supervisorId'
  };

  export type SponsorshipScalarFieldEnum = (typeof SponsorshipScalarFieldEnum)[keyof typeof SponsorshipScalarFieldEnum]


  export const TopicScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    emoji: 'emoji',
    color: 'color'
  };

  export type TopicScalarFieldEnum = (typeof TopicScalarFieldEnum)[keyof typeof TopicScalarFieldEnum]


  export const MatterTopicScalarFieldEnum: {
    matterId: 'matterId',
    topicId: 'topicId',
    weight: 'weight'
  };

  export type MatterTopicScalarFieldEnum = (typeof MatterTopicScalarFieldEnum)[keyof typeof MatterTopicScalarFieldEnum]


  export const SupervisorStatScalarFieldEnum: {
    supervisorId: 'supervisorId',
    totalVotes: 'totalVotes',
    ayes: 'ayes',
    noes: 'noes',
    absences: 'absences',
    attendanceRate: 'attendanceRate',
    dissentRate: 'dissentRate',
    sponsored: 'sponsored',
    cosponsored: 'cosponsored',
    passedSponsored: 'passedSponsored',
    impactScore: 'impactScore',
    activityScore: 'activityScore',
    independence: 'independence',
    overallScore: 'overallScore',
    rank: 'rank',
    grade: 'grade',
    topTopicsJson: 'topTopicsJson',
    updatedAt: 'updatedAt'
  };

  export type SupervisorStatScalarFieldEnum = (typeof SupervisorStatScalarFieldEnum)[keyof typeof SupervisorStatScalarFieldEnum]


  export const IngestLogScalarFieldEnum: {
    id: 'id',
    startedAt: 'startedAt',
    finishedAt: 'finishedAt',
    meetings: 'meetings',
    matters: 'matters',
    actions: 'actions',
    votes: 'votes',
    note: 'note'
  };

  export type IngestLogScalarFieldEnum = (typeof IngestLogScalarFieldEnum)[keyof typeof IngestLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SupervisorWhereInput = {
    AND?: SupervisorWhereInput | SupervisorWhereInput[]
    OR?: SupervisorWhereInput[]
    NOT?: SupervisorWhereInput | SupervisorWhereInput[]
    id?: IntFilter<"Supervisor"> | number
    legistarId?: IntNullableFilter<"Supervisor"> | number | null
    slug?: StringFilter<"Supervisor"> | string
    fullName?: StringFilter<"Supervisor"> | string
    district?: IntNullableFilter<"Supervisor"> | number | null
    title?: StringNullableFilter<"Supervisor"> | string | null
    party?: StringNullableFilter<"Supervisor"> | string | null
    active?: BoolFilter<"Supervisor"> | boolean
    photoUrl?: StringNullableFilter<"Supervisor"> | string | null
    bio?: StringNullableFilter<"Supervisor"> | string | null
    email?: StringNullableFilter<"Supervisor"> | string | null
    website?: StringNullableFilter<"Supervisor"> | string | null
    termStart?: DateTimeNullableFilter<"Supervisor"> | Date | string | null
    termEnd?: DateTimeNullableFilter<"Supervisor"> | Date | string | null
    createdAt?: DateTimeFilter<"Supervisor"> | Date | string
    updatedAt?: DateTimeFilter<"Supervisor"> | Date | string
    votes?: VoteListRelationFilter
    sponsorships?: SponsorshipListRelationFilter
    stats?: XOR<SupervisorStatNullableRelationFilter, SupervisorStatWhereInput> | null
  }

  export type SupervisorOrderByWithRelationInput = {
    id?: SortOrder
    legistarId?: SortOrderInput | SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    district?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    party?: SortOrderInput | SortOrder
    active?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    termStart?: SortOrderInput | SortOrder
    termEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    votes?: VoteOrderByRelationAggregateInput
    sponsorships?: SponsorshipOrderByRelationAggregateInput
    stats?: SupervisorStatOrderByWithRelationInput
  }

  export type SupervisorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    legistarId?: number
    slug?: string
    AND?: SupervisorWhereInput | SupervisorWhereInput[]
    OR?: SupervisorWhereInput[]
    NOT?: SupervisorWhereInput | SupervisorWhereInput[]
    fullName?: StringFilter<"Supervisor"> | string
    district?: IntNullableFilter<"Supervisor"> | number | null
    title?: StringNullableFilter<"Supervisor"> | string | null
    party?: StringNullableFilter<"Supervisor"> | string | null
    active?: BoolFilter<"Supervisor"> | boolean
    photoUrl?: StringNullableFilter<"Supervisor"> | string | null
    bio?: StringNullableFilter<"Supervisor"> | string | null
    email?: StringNullableFilter<"Supervisor"> | string | null
    website?: StringNullableFilter<"Supervisor"> | string | null
    termStart?: DateTimeNullableFilter<"Supervisor"> | Date | string | null
    termEnd?: DateTimeNullableFilter<"Supervisor"> | Date | string | null
    createdAt?: DateTimeFilter<"Supervisor"> | Date | string
    updatedAt?: DateTimeFilter<"Supervisor"> | Date | string
    votes?: VoteListRelationFilter
    sponsorships?: SponsorshipListRelationFilter
    stats?: XOR<SupervisorStatNullableRelationFilter, SupervisorStatWhereInput> | null
  }, "id" | "legistarId" | "slug">

  export type SupervisorOrderByWithAggregationInput = {
    id?: SortOrder
    legistarId?: SortOrderInput | SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    district?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    party?: SortOrderInput | SortOrder
    active?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    termStart?: SortOrderInput | SortOrder
    termEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupervisorCountOrderByAggregateInput
    _avg?: SupervisorAvgOrderByAggregateInput
    _max?: SupervisorMaxOrderByAggregateInput
    _min?: SupervisorMinOrderByAggregateInput
    _sum?: SupervisorSumOrderByAggregateInput
  }

  export type SupervisorScalarWhereWithAggregatesInput = {
    AND?: SupervisorScalarWhereWithAggregatesInput | SupervisorScalarWhereWithAggregatesInput[]
    OR?: SupervisorScalarWhereWithAggregatesInput[]
    NOT?: SupervisorScalarWhereWithAggregatesInput | SupervisorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supervisor"> | number
    legistarId?: IntNullableWithAggregatesFilter<"Supervisor"> | number | null
    slug?: StringWithAggregatesFilter<"Supervisor"> | string
    fullName?: StringWithAggregatesFilter<"Supervisor"> | string
    district?: IntNullableWithAggregatesFilter<"Supervisor"> | number | null
    title?: StringNullableWithAggregatesFilter<"Supervisor"> | string | null
    party?: StringNullableWithAggregatesFilter<"Supervisor"> | string | null
    active?: BoolWithAggregatesFilter<"Supervisor"> | boolean
    photoUrl?: StringNullableWithAggregatesFilter<"Supervisor"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Supervisor"> | string | null
    email?: StringNullableWithAggregatesFilter<"Supervisor"> | string | null
    website?: StringNullableWithAggregatesFilter<"Supervisor"> | string | null
    termStart?: DateTimeNullableWithAggregatesFilter<"Supervisor"> | Date | string | null
    termEnd?: DateTimeNullableWithAggregatesFilter<"Supervisor"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Supervisor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supervisor"> | Date | string
  }

  export type MatterWhereInput = {
    AND?: MatterWhereInput | MatterWhereInput[]
    OR?: MatterWhereInput[]
    NOT?: MatterWhereInput | MatterWhereInput[]
    id?: IntFilter<"Matter"> | number
    legistarId?: IntFilter<"Matter"> | number
    legistarGuid?: StringNullableFilter<"Matter"> | string | null
    file?: StringNullableFilter<"Matter"> | string | null
    type?: StringNullableFilter<"Matter"> | string | null
    status?: StringNullableFilter<"Matter"> | string | null
    title?: StringFilter<"Matter"> | string
    summary?: StringNullableFilter<"Matter"> | string | null
    summarySource?: StringNullableFilter<"Matter"> | string | null
    fullText?: StringNullableFilter<"Matter"> | string | null
    introDate?: DateTimeNullableFilter<"Matter"> | Date | string | null
    finalDate?: DateTimeNullableFilter<"Matter"> | Date | string | null
    sourceUrl?: StringNullableFilter<"Matter"> | string | null
    inControl?: StringNullableFilter<"Matter"> | string | null
    originTimeline?: StringNullableFilter<"Matter"> | string | null
    originGeneratedAt?: DateTimeNullableFilter<"Matter"> | Date | string | null
    importance?: FloatNullableFilter<"Matter"> | number | null
    createdAt?: DateTimeFilter<"Matter"> | Date | string
    updatedAt?: DateTimeFilter<"Matter"> | Date | string
    topics?: MatterTopicListRelationFilter
    votes?: VoteListRelationFilter
    actions?: ActionListRelationFilter
    sponsorships?: SponsorshipListRelationFilter
    attachments?: MatterAttachmentListRelationFilter
    relationsFrom?: MatterRelationListRelationFilter
    relationsTo?: MatterRelationListRelationFilter
  }

  export type MatterOrderByWithRelationInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    summarySource?: SortOrderInput | SortOrder
    fullText?: SortOrderInput | SortOrder
    introDate?: SortOrderInput | SortOrder
    finalDate?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    inControl?: SortOrderInput | SortOrder
    originTimeline?: SortOrderInput | SortOrder
    originGeneratedAt?: SortOrderInput | SortOrder
    importance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    topics?: MatterTopicOrderByRelationAggregateInput
    votes?: VoteOrderByRelationAggregateInput
    actions?: ActionOrderByRelationAggregateInput
    sponsorships?: SponsorshipOrderByRelationAggregateInput
    attachments?: MatterAttachmentOrderByRelationAggregateInput
    relationsFrom?: MatterRelationOrderByRelationAggregateInput
    relationsTo?: MatterRelationOrderByRelationAggregateInput
  }

  export type MatterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    legistarId?: number
    AND?: MatterWhereInput | MatterWhereInput[]
    OR?: MatterWhereInput[]
    NOT?: MatterWhereInput | MatterWhereInput[]
    legistarGuid?: StringNullableFilter<"Matter"> | string | null
    file?: StringNullableFilter<"Matter"> | string | null
    type?: StringNullableFilter<"Matter"> | string | null
    status?: StringNullableFilter<"Matter"> | string | null
    title?: StringFilter<"Matter"> | string
    summary?: StringNullableFilter<"Matter"> | string | null
    summarySource?: StringNullableFilter<"Matter"> | string | null
    fullText?: StringNullableFilter<"Matter"> | string | null
    introDate?: DateTimeNullableFilter<"Matter"> | Date | string | null
    finalDate?: DateTimeNullableFilter<"Matter"> | Date | string | null
    sourceUrl?: StringNullableFilter<"Matter"> | string | null
    inControl?: StringNullableFilter<"Matter"> | string | null
    originTimeline?: StringNullableFilter<"Matter"> | string | null
    originGeneratedAt?: DateTimeNullableFilter<"Matter"> | Date | string | null
    importance?: FloatNullableFilter<"Matter"> | number | null
    createdAt?: DateTimeFilter<"Matter"> | Date | string
    updatedAt?: DateTimeFilter<"Matter"> | Date | string
    topics?: MatterTopicListRelationFilter
    votes?: VoteListRelationFilter
    actions?: ActionListRelationFilter
    sponsorships?: SponsorshipListRelationFilter
    attachments?: MatterAttachmentListRelationFilter
    relationsFrom?: MatterRelationListRelationFilter
    relationsTo?: MatterRelationListRelationFilter
  }, "id" | "legistarId">

  export type MatterOrderByWithAggregationInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    title?: SortOrder
    summary?: SortOrderInput | SortOrder
    summarySource?: SortOrderInput | SortOrder
    fullText?: SortOrderInput | SortOrder
    introDate?: SortOrderInput | SortOrder
    finalDate?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    inControl?: SortOrderInput | SortOrder
    originTimeline?: SortOrderInput | SortOrder
    originGeneratedAt?: SortOrderInput | SortOrder
    importance?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatterCountOrderByAggregateInput
    _avg?: MatterAvgOrderByAggregateInput
    _max?: MatterMaxOrderByAggregateInput
    _min?: MatterMinOrderByAggregateInput
    _sum?: MatterSumOrderByAggregateInput
  }

  export type MatterScalarWhereWithAggregatesInput = {
    AND?: MatterScalarWhereWithAggregatesInput | MatterScalarWhereWithAggregatesInput[]
    OR?: MatterScalarWhereWithAggregatesInput[]
    NOT?: MatterScalarWhereWithAggregatesInput | MatterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Matter"> | number
    legistarId?: IntWithAggregatesFilter<"Matter"> | number
    legistarGuid?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    file?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    type?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    status?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    title?: StringWithAggregatesFilter<"Matter"> | string
    summary?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    summarySource?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    fullText?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    introDate?: DateTimeNullableWithAggregatesFilter<"Matter"> | Date | string | null
    finalDate?: DateTimeNullableWithAggregatesFilter<"Matter"> | Date | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    inControl?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    originTimeline?: StringNullableWithAggregatesFilter<"Matter"> | string | null
    originGeneratedAt?: DateTimeNullableWithAggregatesFilter<"Matter"> | Date | string | null
    importance?: FloatNullableWithAggregatesFilter<"Matter"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Matter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Matter"> | Date | string
  }

  export type MatterAttachmentWhereInput = {
    AND?: MatterAttachmentWhereInput | MatterAttachmentWhereInput[]
    OR?: MatterAttachmentWhereInput[]
    NOT?: MatterAttachmentWhereInput | MatterAttachmentWhereInput[]
    id?: IntFilter<"MatterAttachment"> | number
    matterId?: IntFilter<"MatterAttachment"> | number
    name?: StringFilter<"MatterAttachment"> | string
    url?: StringNullableFilter<"MatterAttachment"> | string | null
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
  }

  export type MatterAttachmentOrderByWithRelationInput = {
    id?: SortOrder
    matterId?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    matter?: MatterOrderByWithRelationInput
  }

  export type MatterAttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    matterId_name?: MatterAttachmentMatterIdNameCompoundUniqueInput
    AND?: MatterAttachmentWhereInput | MatterAttachmentWhereInput[]
    OR?: MatterAttachmentWhereInput[]
    NOT?: MatterAttachmentWhereInput | MatterAttachmentWhereInput[]
    matterId?: IntFilter<"MatterAttachment"> | number
    name?: StringFilter<"MatterAttachment"> | string
    url?: StringNullableFilter<"MatterAttachment"> | string | null
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
  }, "id" | "matterId_name">

  export type MatterAttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    matterId?: SortOrder
    name?: SortOrder
    url?: SortOrderInput | SortOrder
    _count?: MatterAttachmentCountOrderByAggregateInput
    _avg?: MatterAttachmentAvgOrderByAggregateInput
    _max?: MatterAttachmentMaxOrderByAggregateInput
    _min?: MatterAttachmentMinOrderByAggregateInput
    _sum?: MatterAttachmentSumOrderByAggregateInput
  }

  export type MatterAttachmentScalarWhereWithAggregatesInput = {
    AND?: MatterAttachmentScalarWhereWithAggregatesInput | MatterAttachmentScalarWhereWithAggregatesInput[]
    OR?: MatterAttachmentScalarWhereWithAggregatesInput[]
    NOT?: MatterAttachmentScalarWhereWithAggregatesInput | MatterAttachmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MatterAttachment"> | number
    matterId?: IntWithAggregatesFilter<"MatterAttachment"> | number
    name?: StringWithAggregatesFilter<"MatterAttachment"> | string
    url?: StringNullableWithAggregatesFilter<"MatterAttachment"> | string | null
  }

  export type MatterRelationWhereInput = {
    AND?: MatterRelationWhereInput | MatterRelationWhereInput[]
    OR?: MatterRelationWhereInput[]
    NOT?: MatterRelationWhereInput | MatterRelationWhereInput[]
    id?: IntFilter<"MatterRelation"> | number
    fromId?: IntFilter<"MatterRelation"> | number
    toFile?: StringFilter<"MatterRelation"> | string
    toLegistarId?: IntNullableFilter<"MatterRelation"> | number | null
    from?: XOR<MatterRelationFilter, MatterWhereInput>
    to?: XOR<MatterNullableRelationFilter, MatterWhereInput> | null
  }

  export type MatterRelationOrderByWithRelationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toFile?: SortOrder
    toLegistarId?: SortOrderInput | SortOrder
    from?: MatterOrderByWithRelationInput
    to?: MatterOrderByWithRelationInput
  }

  export type MatterRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fromId_toFile?: MatterRelationFromIdToFileCompoundUniqueInput
    AND?: MatterRelationWhereInput | MatterRelationWhereInput[]
    OR?: MatterRelationWhereInput[]
    NOT?: MatterRelationWhereInput | MatterRelationWhereInput[]
    fromId?: IntFilter<"MatterRelation"> | number
    toFile?: StringFilter<"MatterRelation"> | string
    toLegistarId?: IntNullableFilter<"MatterRelation"> | number | null
    from?: XOR<MatterRelationFilter, MatterWhereInput>
    to?: XOR<MatterNullableRelationFilter, MatterWhereInput> | null
  }, "id" | "fromId_toFile">

  export type MatterRelationOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toFile?: SortOrder
    toLegistarId?: SortOrderInput | SortOrder
    _count?: MatterRelationCountOrderByAggregateInput
    _avg?: MatterRelationAvgOrderByAggregateInput
    _max?: MatterRelationMaxOrderByAggregateInput
    _min?: MatterRelationMinOrderByAggregateInput
    _sum?: MatterRelationSumOrderByAggregateInput
  }

  export type MatterRelationScalarWhereWithAggregatesInput = {
    AND?: MatterRelationScalarWhereWithAggregatesInput | MatterRelationScalarWhereWithAggregatesInput[]
    OR?: MatterRelationScalarWhereWithAggregatesInput[]
    NOT?: MatterRelationScalarWhereWithAggregatesInput | MatterRelationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MatterRelation"> | number
    fromId?: IntWithAggregatesFilter<"MatterRelation"> | number
    toFile?: StringWithAggregatesFilter<"MatterRelation"> | string
    toLegistarId?: IntNullableWithAggregatesFilter<"MatterRelation"> | number | null
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: IntFilter<"Meeting"> | number
    legistarId?: IntFilter<"Meeting"> | number
    legistarGuid?: StringNullableFilter<"Meeting"> | string | null
    bodyName?: StringFilter<"Meeting"> | string
    date?: DateTimeNullableFilter<"Meeting"> | Date | string | null
    location?: StringNullableFilter<"Meeting"> | string | null
    sourceUrl?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    actions?: ActionListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrderInput | SortOrder
    bodyName?: SortOrder
    date?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    actions?: ActionOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    legistarId?: number
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    legistarGuid?: StringNullableFilter<"Meeting"> | string | null
    bodyName?: StringFilter<"Meeting"> | string
    date?: DateTimeNullableFilter<"Meeting"> | Date | string | null
    location?: StringNullableFilter<"Meeting"> | string | null
    sourceUrl?: StringNullableFilter<"Meeting"> | string | null
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    actions?: ActionListRelationFilter
  }, "id" | "legistarId">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrderInput | SortOrder
    bodyName?: SortOrder
    date?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _avg?: MeetingAvgOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
    _sum?: MeetingSumOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meeting"> | number
    legistarId?: IntWithAggregatesFilter<"Meeting"> | number
    legistarGuid?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    bodyName?: StringWithAggregatesFilter<"Meeting"> | string
    date?: DateTimeNullableWithAggregatesFilter<"Meeting"> | Date | string | null
    location?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    sourceUrl?: StringNullableWithAggregatesFilter<"Meeting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
  }

  export type ActionWhereInput = {
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    id?: IntFilter<"Action"> | number
    legistarId?: IntFilter<"Action"> | number
    legistarGuid?: StringNullableFilter<"Action"> | string | null
    date?: DateTimeNullableFilter<"Action"> | Date | string | null
    actionText?: StringNullableFilter<"Action"> | string | null
    result?: StringNullableFilter<"Action"> | string | null
    bodyName?: StringNullableFilter<"Action"> | string | null
    matterId?: IntFilter<"Action"> | number
    meetingId?: IntNullableFilter<"Action"> | number | null
    createdAt?: DateTimeFilter<"Action"> | Date | string
    updatedAt?: DateTimeFilter<"Action"> | Date | string
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
    meeting?: XOR<MeetingNullableRelationFilter, MeetingWhereInput> | null
    votes?: VoteListRelationFilter
  }

  export type ActionOrderByWithRelationInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    actionText?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    bodyName?: SortOrderInput | SortOrder
    matterId?: SortOrder
    meetingId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matter?: MatterOrderByWithRelationInput
    meeting?: MeetingOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type ActionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    legistarId?: number
    AND?: ActionWhereInput | ActionWhereInput[]
    OR?: ActionWhereInput[]
    NOT?: ActionWhereInput | ActionWhereInput[]
    legistarGuid?: StringNullableFilter<"Action"> | string | null
    date?: DateTimeNullableFilter<"Action"> | Date | string | null
    actionText?: StringNullableFilter<"Action"> | string | null
    result?: StringNullableFilter<"Action"> | string | null
    bodyName?: StringNullableFilter<"Action"> | string | null
    matterId?: IntFilter<"Action"> | number
    meetingId?: IntNullableFilter<"Action"> | number | null
    createdAt?: DateTimeFilter<"Action"> | Date | string
    updatedAt?: DateTimeFilter<"Action"> | Date | string
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
    meeting?: XOR<MeetingNullableRelationFilter, MeetingWhereInput> | null
    votes?: VoteListRelationFilter
  }, "id" | "legistarId">

  export type ActionOrderByWithAggregationInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    actionText?: SortOrderInput | SortOrder
    result?: SortOrderInput | SortOrder
    bodyName?: SortOrderInput | SortOrder
    matterId?: SortOrder
    meetingId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActionCountOrderByAggregateInput
    _avg?: ActionAvgOrderByAggregateInput
    _max?: ActionMaxOrderByAggregateInput
    _min?: ActionMinOrderByAggregateInput
    _sum?: ActionSumOrderByAggregateInput
  }

  export type ActionScalarWhereWithAggregatesInput = {
    AND?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    OR?: ActionScalarWhereWithAggregatesInput[]
    NOT?: ActionScalarWhereWithAggregatesInput | ActionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Action"> | number
    legistarId?: IntWithAggregatesFilter<"Action"> | number
    legistarGuid?: StringNullableWithAggregatesFilter<"Action"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"Action"> | Date | string | null
    actionText?: StringNullableWithAggregatesFilter<"Action"> | string | null
    result?: StringNullableWithAggregatesFilter<"Action"> | string | null
    bodyName?: StringNullableWithAggregatesFilter<"Action"> | string | null
    matterId?: IntWithAggregatesFilter<"Action"> | number
    meetingId?: IntNullableWithAggregatesFilter<"Action"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Action"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Action"> | Date | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: IntFilter<"Vote"> | number
    value?: StringFilter<"Vote"> | string
    actionId?: IntFilter<"Vote"> | number
    matterId?: IntFilter<"Vote"> | number
    supervisorId?: IntFilter<"Vote"> | number
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    action?: XOR<ActionRelationFilter, ActionWhereInput>
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
    supervisor?: XOR<SupervisorRelationFilter, SupervisorWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    actionId?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    action?: ActionOrderByWithRelationInput
    matter?: MatterOrderByWithRelationInput
    supervisor?: SupervisorOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    actionId_supervisorId?: VoteActionIdSupervisorIdCompoundUniqueInput
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    value?: StringFilter<"Vote"> | string
    actionId?: IntFilter<"Vote"> | number
    matterId?: IntFilter<"Vote"> | number
    supervisorId?: IntFilter<"Vote"> | number
    createdAt?: DateTimeFilter<"Vote"> | Date | string
    action?: XOR<ActionRelationFilter, ActionWhereInput>
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
    supervisor?: XOR<SupervisorRelationFilter, SupervisorWhereInput>
  }, "id" | "actionId_supervisorId">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    actionId?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _avg?: VoteAvgOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
    _sum?: VoteSumOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vote"> | number
    value?: StringWithAggregatesFilter<"Vote"> | string
    actionId?: IntWithAggregatesFilter<"Vote"> | number
    matterId?: IntWithAggregatesFilter<"Vote"> | number
    supervisorId?: IntWithAggregatesFilter<"Vote"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
  }

  export type SponsorshipWhereInput = {
    AND?: SponsorshipWhereInput | SponsorshipWhereInput[]
    OR?: SponsorshipWhereInput[]
    NOT?: SponsorshipWhereInput | SponsorshipWhereInput[]
    id?: IntFilter<"Sponsorship"> | number
    role?: StringFilter<"Sponsorship"> | string
    matterId?: IntFilter<"Sponsorship"> | number
    supervisorId?: IntFilter<"Sponsorship"> | number
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
    supervisor?: XOR<SupervisorRelationFilter, SupervisorWhereInput>
  }

  export type SponsorshipOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
    matter?: MatterOrderByWithRelationInput
    supervisor?: SupervisorOrderByWithRelationInput
  }

  export type SponsorshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    matterId_supervisorId?: SponsorshipMatterIdSupervisorIdCompoundUniqueInput
    AND?: SponsorshipWhereInput | SponsorshipWhereInput[]
    OR?: SponsorshipWhereInput[]
    NOT?: SponsorshipWhereInput | SponsorshipWhereInput[]
    role?: StringFilter<"Sponsorship"> | string
    matterId?: IntFilter<"Sponsorship"> | number
    supervisorId?: IntFilter<"Sponsorship"> | number
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
    supervisor?: XOR<SupervisorRelationFilter, SupervisorWhereInput>
  }, "id" | "matterId_supervisorId">

  export type SponsorshipOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
    _count?: SponsorshipCountOrderByAggregateInput
    _avg?: SponsorshipAvgOrderByAggregateInput
    _max?: SponsorshipMaxOrderByAggregateInput
    _min?: SponsorshipMinOrderByAggregateInput
    _sum?: SponsorshipSumOrderByAggregateInput
  }

  export type SponsorshipScalarWhereWithAggregatesInput = {
    AND?: SponsorshipScalarWhereWithAggregatesInput | SponsorshipScalarWhereWithAggregatesInput[]
    OR?: SponsorshipScalarWhereWithAggregatesInput[]
    NOT?: SponsorshipScalarWhereWithAggregatesInput | SponsorshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sponsorship"> | number
    role?: StringWithAggregatesFilter<"Sponsorship"> | string
    matterId?: IntWithAggregatesFilter<"Sponsorship"> | number
    supervisorId?: IntWithAggregatesFilter<"Sponsorship"> | number
  }

  export type TopicWhereInput = {
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    id?: IntFilter<"Topic"> | number
    slug?: StringFilter<"Topic"> | string
    name?: StringFilter<"Topic"> | string
    emoji?: StringNullableFilter<"Topic"> | string | null
    color?: StringNullableFilter<"Topic"> | string | null
    matters?: MatterTopicListRelationFilter
  }

  export type TopicOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    emoji?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    matters?: MatterTopicOrderByRelationAggregateInput
  }

  export type TopicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: TopicWhereInput | TopicWhereInput[]
    OR?: TopicWhereInput[]
    NOT?: TopicWhereInput | TopicWhereInput[]
    name?: StringFilter<"Topic"> | string
    emoji?: StringNullableFilter<"Topic"> | string | null
    color?: StringNullableFilter<"Topic"> | string | null
    matters?: MatterTopicListRelationFilter
  }, "id" | "slug">

  export type TopicOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    emoji?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    _count?: TopicCountOrderByAggregateInput
    _avg?: TopicAvgOrderByAggregateInput
    _max?: TopicMaxOrderByAggregateInput
    _min?: TopicMinOrderByAggregateInput
    _sum?: TopicSumOrderByAggregateInput
  }

  export type TopicScalarWhereWithAggregatesInput = {
    AND?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    OR?: TopicScalarWhereWithAggregatesInput[]
    NOT?: TopicScalarWhereWithAggregatesInput | TopicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Topic"> | number
    slug?: StringWithAggregatesFilter<"Topic"> | string
    name?: StringWithAggregatesFilter<"Topic"> | string
    emoji?: StringNullableWithAggregatesFilter<"Topic"> | string | null
    color?: StringNullableWithAggregatesFilter<"Topic"> | string | null
  }

  export type MatterTopicWhereInput = {
    AND?: MatterTopicWhereInput | MatterTopicWhereInput[]
    OR?: MatterTopicWhereInput[]
    NOT?: MatterTopicWhereInput | MatterTopicWhereInput[]
    matterId?: IntFilter<"MatterTopic"> | number
    topicId?: IntFilter<"MatterTopic"> | number
    weight?: FloatFilter<"MatterTopic"> | number
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }

  export type MatterTopicOrderByWithRelationInput = {
    matterId?: SortOrder
    topicId?: SortOrder
    weight?: SortOrder
    matter?: MatterOrderByWithRelationInput
    topic?: TopicOrderByWithRelationInput
  }

  export type MatterTopicWhereUniqueInput = Prisma.AtLeast<{
    matterId_topicId?: MatterTopicMatterIdTopicIdCompoundUniqueInput
    AND?: MatterTopicWhereInput | MatterTopicWhereInput[]
    OR?: MatterTopicWhereInput[]
    NOT?: MatterTopicWhereInput | MatterTopicWhereInput[]
    matterId?: IntFilter<"MatterTopic"> | number
    topicId?: IntFilter<"MatterTopic"> | number
    weight?: FloatFilter<"MatterTopic"> | number
    matter?: XOR<MatterRelationFilter, MatterWhereInput>
    topic?: XOR<TopicRelationFilter, TopicWhereInput>
  }, "matterId_topicId">

  export type MatterTopicOrderByWithAggregationInput = {
    matterId?: SortOrder
    topicId?: SortOrder
    weight?: SortOrder
    _count?: MatterTopicCountOrderByAggregateInput
    _avg?: MatterTopicAvgOrderByAggregateInput
    _max?: MatterTopicMaxOrderByAggregateInput
    _min?: MatterTopicMinOrderByAggregateInput
    _sum?: MatterTopicSumOrderByAggregateInput
  }

  export type MatterTopicScalarWhereWithAggregatesInput = {
    AND?: MatterTopicScalarWhereWithAggregatesInput | MatterTopicScalarWhereWithAggregatesInput[]
    OR?: MatterTopicScalarWhereWithAggregatesInput[]
    NOT?: MatterTopicScalarWhereWithAggregatesInput | MatterTopicScalarWhereWithAggregatesInput[]
    matterId?: IntWithAggregatesFilter<"MatterTopic"> | number
    topicId?: IntWithAggregatesFilter<"MatterTopic"> | number
    weight?: FloatWithAggregatesFilter<"MatterTopic"> | number
  }

  export type SupervisorStatWhereInput = {
    AND?: SupervisorStatWhereInput | SupervisorStatWhereInput[]
    OR?: SupervisorStatWhereInput[]
    NOT?: SupervisorStatWhereInput | SupervisorStatWhereInput[]
    supervisorId?: IntFilter<"SupervisorStat"> | number
    totalVotes?: IntFilter<"SupervisorStat"> | number
    ayes?: IntFilter<"SupervisorStat"> | number
    noes?: IntFilter<"SupervisorStat"> | number
    absences?: IntFilter<"SupervisorStat"> | number
    attendanceRate?: FloatFilter<"SupervisorStat"> | number
    dissentRate?: FloatFilter<"SupervisorStat"> | number
    sponsored?: IntFilter<"SupervisorStat"> | number
    cosponsored?: IntFilter<"SupervisorStat"> | number
    passedSponsored?: IntFilter<"SupervisorStat"> | number
    impactScore?: FloatFilter<"SupervisorStat"> | number
    activityScore?: FloatFilter<"SupervisorStat"> | number
    independence?: FloatFilter<"SupervisorStat"> | number
    overallScore?: FloatFilter<"SupervisorStat"> | number
    rank?: IntNullableFilter<"SupervisorStat"> | number | null
    grade?: StringNullableFilter<"SupervisorStat"> | string | null
    topTopicsJson?: StringNullableFilter<"SupervisorStat"> | string | null
    updatedAt?: DateTimeFilter<"SupervisorStat"> | Date | string
    supervisor?: XOR<SupervisorRelationFilter, SupervisorWhereInput>
  }

  export type SupervisorStatOrderByWithRelationInput = {
    supervisorId?: SortOrder
    totalVotes?: SortOrder
    ayes?: SortOrder
    noes?: SortOrder
    absences?: SortOrder
    attendanceRate?: SortOrder
    dissentRate?: SortOrder
    sponsored?: SortOrder
    cosponsored?: SortOrder
    passedSponsored?: SortOrder
    impactScore?: SortOrder
    activityScore?: SortOrder
    independence?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    topTopicsJson?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    supervisor?: SupervisorOrderByWithRelationInput
  }

  export type SupervisorStatWhereUniqueInput = Prisma.AtLeast<{
    supervisorId?: number
    AND?: SupervisorStatWhereInput | SupervisorStatWhereInput[]
    OR?: SupervisorStatWhereInput[]
    NOT?: SupervisorStatWhereInput | SupervisorStatWhereInput[]
    totalVotes?: IntFilter<"SupervisorStat"> | number
    ayes?: IntFilter<"SupervisorStat"> | number
    noes?: IntFilter<"SupervisorStat"> | number
    absences?: IntFilter<"SupervisorStat"> | number
    attendanceRate?: FloatFilter<"SupervisorStat"> | number
    dissentRate?: FloatFilter<"SupervisorStat"> | number
    sponsored?: IntFilter<"SupervisorStat"> | number
    cosponsored?: IntFilter<"SupervisorStat"> | number
    passedSponsored?: IntFilter<"SupervisorStat"> | number
    impactScore?: FloatFilter<"SupervisorStat"> | number
    activityScore?: FloatFilter<"SupervisorStat"> | number
    independence?: FloatFilter<"SupervisorStat"> | number
    overallScore?: FloatFilter<"SupervisorStat"> | number
    rank?: IntNullableFilter<"SupervisorStat"> | number | null
    grade?: StringNullableFilter<"SupervisorStat"> | string | null
    topTopicsJson?: StringNullableFilter<"SupervisorStat"> | string | null
    updatedAt?: DateTimeFilter<"SupervisorStat"> | Date | string
    supervisor?: XOR<SupervisorRelationFilter, SupervisorWhereInput>
  }, "supervisorId">

  export type SupervisorStatOrderByWithAggregationInput = {
    supervisorId?: SortOrder
    totalVotes?: SortOrder
    ayes?: SortOrder
    noes?: SortOrder
    absences?: SortOrder
    attendanceRate?: SortOrder
    dissentRate?: SortOrder
    sponsored?: SortOrder
    cosponsored?: SortOrder
    passedSponsored?: SortOrder
    impactScore?: SortOrder
    activityScore?: SortOrder
    independence?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    topTopicsJson?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: SupervisorStatCountOrderByAggregateInput
    _avg?: SupervisorStatAvgOrderByAggregateInput
    _max?: SupervisorStatMaxOrderByAggregateInput
    _min?: SupervisorStatMinOrderByAggregateInput
    _sum?: SupervisorStatSumOrderByAggregateInput
  }

  export type SupervisorStatScalarWhereWithAggregatesInput = {
    AND?: SupervisorStatScalarWhereWithAggregatesInput | SupervisorStatScalarWhereWithAggregatesInput[]
    OR?: SupervisorStatScalarWhereWithAggregatesInput[]
    NOT?: SupervisorStatScalarWhereWithAggregatesInput | SupervisorStatScalarWhereWithAggregatesInput[]
    supervisorId?: IntWithAggregatesFilter<"SupervisorStat"> | number
    totalVotes?: IntWithAggregatesFilter<"SupervisorStat"> | number
    ayes?: IntWithAggregatesFilter<"SupervisorStat"> | number
    noes?: IntWithAggregatesFilter<"SupervisorStat"> | number
    absences?: IntWithAggregatesFilter<"SupervisorStat"> | number
    attendanceRate?: FloatWithAggregatesFilter<"SupervisorStat"> | number
    dissentRate?: FloatWithAggregatesFilter<"SupervisorStat"> | number
    sponsored?: IntWithAggregatesFilter<"SupervisorStat"> | number
    cosponsored?: IntWithAggregatesFilter<"SupervisorStat"> | number
    passedSponsored?: IntWithAggregatesFilter<"SupervisorStat"> | number
    impactScore?: FloatWithAggregatesFilter<"SupervisorStat"> | number
    activityScore?: FloatWithAggregatesFilter<"SupervisorStat"> | number
    independence?: FloatWithAggregatesFilter<"SupervisorStat"> | number
    overallScore?: FloatWithAggregatesFilter<"SupervisorStat"> | number
    rank?: IntNullableWithAggregatesFilter<"SupervisorStat"> | number | null
    grade?: StringNullableWithAggregatesFilter<"SupervisorStat"> | string | null
    topTopicsJson?: StringNullableWithAggregatesFilter<"SupervisorStat"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"SupervisorStat"> | Date | string
  }

  export type IngestLogWhereInput = {
    AND?: IngestLogWhereInput | IngestLogWhereInput[]
    OR?: IngestLogWhereInput[]
    NOT?: IngestLogWhereInput | IngestLogWhereInput[]
    id?: IntFilter<"IngestLog"> | number
    startedAt?: DateTimeFilter<"IngestLog"> | Date | string
    finishedAt?: DateTimeNullableFilter<"IngestLog"> | Date | string | null
    meetings?: IntFilter<"IngestLog"> | number
    matters?: IntFilter<"IngestLog"> | number
    actions?: IntFilter<"IngestLog"> | number
    votes?: IntFilter<"IngestLog"> | number
    note?: StringNullableFilter<"IngestLog"> | string | null
  }

  export type IngestLogOrderByWithRelationInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    meetings?: SortOrder
    matters?: SortOrder
    actions?: SortOrder
    votes?: SortOrder
    note?: SortOrderInput | SortOrder
  }

  export type IngestLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngestLogWhereInput | IngestLogWhereInput[]
    OR?: IngestLogWhereInput[]
    NOT?: IngestLogWhereInput | IngestLogWhereInput[]
    startedAt?: DateTimeFilter<"IngestLog"> | Date | string
    finishedAt?: DateTimeNullableFilter<"IngestLog"> | Date | string | null
    meetings?: IntFilter<"IngestLog"> | number
    matters?: IntFilter<"IngestLog"> | number
    actions?: IntFilter<"IngestLog"> | number
    votes?: IntFilter<"IngestLog"> | number
    note?: StringNullableFilter<"IngestLog"> | string | null
  }, "id">

  export type IngestLogOrderByWithAggregationInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    meetings?: SortOrder
    matters?: SortOrder
    actions?: SortOrder
    votes?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: IngestLogCountOrderByAggregateInput
    _avg?: IngestLogAvgOrderByAggregateInput
    _max?: IngestLogMaxOrderByAggregateInput
    _min?: IngestLogMinOrderByAggregateInput
    _sum?: IngestLogSumOrderByAggregateInput
  }

  export type IngestLogScalarWhereWithAggregatesInput = {
    AND?: IngestLogScalarWhereWithAggregatesInput | IngestLogScalarWhereWithAggregatesInput[]
    OR?: IngestLogScalarWhereWithAggregatesInput[]
    NOT?: IngestLogScalarWhereWithAggregatesInput | IngestLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IngestLog"> | number
    startedAt?: DateTimeWithAggregatesFilter<"IngestLog"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"IngestLog"> | Date | string | null
    meetings?: IntWithAggregatesFilter<"IngestLog"> | number
    matters?: IntWithAggregatesFilter<"IngestLog"> | number
    actions?: IntWithAggregatesFilter<"IngestLog"> | number
    votes?: IntWithAggregatesFilter<"IngestLog"> | number
    note?: StringNullableWithAggregatesFilter<"IngestLog"> | string | null
  }

  export type SupervisorCreateInput = {
    legistarId?: number | null
    slug: string
    fullName: string
    district?: number | null
    title?: string | null
    party?: string | null
    active?: boolean
    photoUrl?: string | null
    bio?: string | null
    email?: string | null
    website?: string | null
    termStart?: Date | string | null
    termEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutSupervisorInput
    sponsorships?: SponsorshipCreateNestedManyWithoutSupervisorInput
    stats?: SupervisorStatCreateNestedOneWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateInput = {
    id?: number
    legistarId?: number | null
    slug: string
    fullName: string
    district?: number | null
    title?: string | null
    party?: string | null
    active?: boolean
    photoUrl?: string | null
    bio?: string | null
    email?: string | null
    website?: string | null
    termStart?: Date | string | null
    termEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutSupervisorInput
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutSupervisorInput
    stats?: SupervisorStatUncheckedCreateNestedOneWithoutSupervisorInput
  }

  export type SupervisorUpdateInput = {
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutSupervisorNestedInput
    sponsorships?: SponsorshipUpdateManyWithoutSupervisorNestedInput
    stats?: SupervisorStatUpdateOneWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutSupervisorNestedInput
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutSupervisorNestedInput
    stats?: SupervisorStatUncheckedUpdateOneWithoutSupervisorNestedInput
  }

  export type SupervisorCreateManyInput = {
    id?: number
    legistarId?: number | null
    slug: string
    fullName: string
    district?: number | null
    title?: string | null
    party?: string | null
    active?: boolean
    photoUrl?: string | null
    bio?: string | null
    email?: string | null
    website?: string | null
    termStart?: Date | string | null
    termEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupervisorUpdateManyMutationInput = {
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatterCreateInput = {
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicCreateNestedManyWithoutMatterInput
    votes?: VoteCreateNestedManyWithoutMatterInput
    actions?: ActionCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationCreateNestedManyWithoutToInput
  }

  export type MatterUncheckedCreateInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicUncheckedCreateNestedManyWithoutMatterInput
    votes?: VoteUncheckedCreateNestedManyWithoutMatterInput
    actions?: ActionUncheckedCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentUncheckedCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationUncheckedCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type MatterUpdateInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUpdateManyWithoutMatterNestedInput
    votes?: VoteUpdateManyWithoutMatterNestedInput
    actions?: ActionUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUpdateManyWithoutToNestedInput
  }

  export type MatterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUncheckedUpdateManyWithoutMatterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutMatterNestedInput
    actions?: ActionUncheckedUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUncheckedUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUncheckedUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type MatterCreateManyInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatterUpdateManyMutationInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatterAttachmentCreateInput = {
    name: string
    url?: string | null
    matter: MatterCreateNestedOneWithoutAttachmentsInput
  }

  export type MatterAttachmentUncheckedCreateInput = {
    id?: number
    matterId: number
    name: string
    url?: string | null
  }

  export type MatterAttachmentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    matter?: MatterUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type MatterAttachmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matterId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatterAttachmentCreateManyInput = {
    id?: number
    matterId: number
    name: string
    url?: string | null
  }

  export type MatterAttachmentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatterAttachmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matterId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatterRelationCreateInput = {
    toFile: string
    from: MatterCreateNestedOneWithoutRelationsFromInput
    to?: MatterCreateNestedOneWithoutRelationsToInput
  }

  export type MatterRelationUncheckedCreateInput = {
    id?: number
    fromId: number
    toFile: string
    toLegistarId?: number | null
  }

  export type MatterRelationUpdateInput = {
    toFile?: StringFieldUpdateOperationsInput | string
    from?: MatterUpdateOneRequiredWithoutRelationsFromNestedInput
    to?: MatterUpdateOneWithoutRelationsToNestedInput
  }

  export type MatterRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toFile?: StringFieldUpdateOperationsInput | string
    toLegistarId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatterRelationCreateManyInput = {
    id?: number
    fromId: number
    toFile: string
    toLegistarId?: number | null
  }

  export type MatterRelationUpdateManyMutationInput = {
    toFile?: StringFieldUpdateOperationsInput | string
  }

  export type MatterRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toFile?: StringFieldUpdateOperationsInput | string
    toLegistarId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MeetingCreateInput = {
    legistarId: number
    legistarGuid?: string | null
    bodyName: string
    date?: Date | string | null
    location?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    actions?: ActionCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    bodyName: string
    date?: Date | string | null
    location?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    actions?: ActionUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actions?: ActionUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actions?: ActionUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    bodyName: string
    date?: Date | string | null
    location?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUpdateManyMutationInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionCreateInput = {
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matter: MatterCreateNestedOneWithoutActionsInput
    meeting?: MeetingCreateNestedOneWithoutActionsInput
    votes?: VoteCreateNestedManyWithoutActionInput
  }

  export type ActionUncheckedCreateInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    matterId: number
    meetingId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionUpdateInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matter?: MatterUpdateOneRequiredWithoutActionsNestedInput
    meeting?: MeetingUpdateOneWithoutActionsNestedInput
    votes?: VoteUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    matterId?: IntFieldUpdateOperationsInput | number
    meetingId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ActionCreateManyInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    matterId: number
    meetingId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActionUpdateManyMutationInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    matterId?: IntFieldUpdateOperationsInput | number
    meetingId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateInput = {
    value: string
    createdAt?: Date | string
    action: ActionCreateNestedOneWithoutVotesInput
    matter: MatterCreateNestedOneWithoutVotesInput
    supervisor: SupervisorCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: number
    value: string
    actionId: number
    matterId: number
    supervisorId: number
    createdAt?: Date | string
  }

  export type VoteUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: ActionUpdateOneRequiredWithoutVotesNestedInput
    matter?: MatterUpdateOneRequiredWithoutVotesNestedInput
    supervisor?: SupervisorUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    actionId?: IntFieldUpdateOperationsInput | number
    matterId?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyInput = {
    id?: number
    value: string
    actionId: number
    matterId: number
    supervisorId: number
    createdAt?: Date | string
  }

  export type VoteUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    actionId?: IntFieldUpdateOperationsInput | number
    matterId?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorshipCreateInput = {
    role?: string
    matter: MatterCreateNestedOneWithoutSponsorshipsInput
    supervisor: SupervisorCreateNestedOneWithoutSponsorshipsInput
  }

  export type SponsorshipUncheckedCreateInput = {
    id?: number
    role?: string
    matterId: number
    supervisorId: number
  }

  export type SponsorshipUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    matter?: MatterUpdateOneRequiredWithoutSponsorshipsNestedInput
    supervisor?: SupervisorUpdateOneRequiredWithoutSponsorshipsNestedInput
  }

  export type SponsorshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    matterId?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
  }

  export type SponsorshipCreateManyInput = {
    id?: number
    role?: string
    matterId: number
    supervisorId: number
  }

  export type SponsorshipUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type SponsorshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    matterId?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
  }

  export type TopicCreateInput = {
    slug: string
    name: string
    emoji?: string | null
    color?: string | null
    matters?: MatterTopicCreateNestedManyWithoutTopicInput
  }

  export type TopicUncheckedCreateInput = {
    id?: number
    slug: string
    name: string
    emoji?: string | null
    color?: string | null
    matters?: MatterTopicUncheckedCreateNestedManyWithoutTopicInput
  }

  export type TopicUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    matters?: MatterTopicUpdateManyWithoutTopicNestedInput
  }

  export type TopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    matters?: MatterTopicUncheckedUpdateManyWithoutTopicNestedInput
  }

  export type TopicCreateManyInput = {
    id?: number
    slug: string
    name: string
    emoji?: string | null
    color?: string | null
  }

  export type TopicUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatterTopicCreateInput = {
    weight?: number
    matter: MatterCreateNestedOneWithoutTopicsInput
    topic: TopicCreateNestedOneWithoutMattersInput
  }

  export type MatterTopicUncheckedCreateInput = {
    matterId: number
    topicId: number
    weight?: number
  }

  export type MatterTopicUpdateInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    matter?: MatterUpdateOneRequiredWithoutTopicsNestedInput
    topic?: TopicUpdateOneRequiredWithoutMattersNestedInput
  }

  export type MatterTopicUncheckedUpdateInput = {
    matterId?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type MatterTopicCreateManyInput = {
    matterId: number
    topicId: number
    weight?: number
  }

  export type MatterTopicUpdateManyMutationInput = {
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type MatterTopicUncheckedUpdateManyInput = {
    matterId?: IntFieldUpdateOperationsInput | number
    topicId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type SupervisorStatCreateInput = {
    totalVotes?: number
    ayes?: number
    noes?: number
    absences?: number
    attendanceRate?: number
    dissentRate?: number
    sponsored?: number
    cosponsored?: number
    passedSponsored?: number
    impactScore?: number
    activityScore?: number
    independence?: number
    overallScore?: number
    rank?: number | null
    grade?: string | null
    topTopicsJson?: string | null
    updatedAt?: Date | string
    supervisor: SupervisorCreateNestedOneWithoutStatsInput
  }

  export type SupervisorStatUncheckedCreateInput = {
    supervisorId: number
    totalVotes?: number
    ayes?: number
    noes?: number
    absences?: number
    attendanceRate?: number
    dissentRate?: number
    sponsored?: number
    cosponsored?: number
    passedSponsored?: number
    impactScore?: number
    activityScore?: number
    independence?: number
    overallScore?: number
    rank?: number | null
    grade?: string | null
    topTopicsJson?: string | null
    updatedAt?: Date | string
  }

  export type SupervisorStatUpdateInput = {
    totalVotes?: IntFieldUpdateOperationsInput | number
    ayes?: IntFieldUpdateOperationsInput | number
    noes?: IntFieldUpdateOperationsInput | number
    absences?: IntFieldUpdateOperationsInput | number
    attendanceRate?: FloatFieldUpdateOperationsInput | number
    dissentRate?: FloatFieldUpdateOperationsInput | number
    sponsored?: IntFieldUpdateOperationsInput | number
    cosponsored?: IntFieldUpdateOperationsInput | number
    passedSponsored?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    activityScore?: FloatFieldUpdateOperationsInput | number
    independence?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    topTopicsJson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: SupervisorUpdateOneRequiredWithoutStatsNestedInput
  }

  export type SupervisorStatUncheckedUpdateInput = {
    supervisorId?: IntFieldUpdateOperationsInput | number
    totalVotes?: IntFieldUpdateOperationsInput | number
    ayes?: IntFieldUpdateOperationsInput | number
    noes?: IntFieldUpdateOperationsInput | number
    absences?: IntFieldUpdateOperationsInput | number
    attendanceRate?: FloatFieldUpdateOperationsInput | number
    dissentRate?: FloatFieldUpdateOperationsInput | number
    sponsored?: IntFieldUpdateOperationsInput | number
    cosponsored?: IntFieldUpdateOperationsInput | number
    passedSponsored?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    activityScore?: FloatFieldUpdateOperationsInput | number
    independence?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    topTopicsJson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisorStatCreateManyInput = {
    supervisorId: number
    totalVotes?: number
    ayes?: number
    noes?: number
    absences?: number
    attendanceRate?: number
    dissentRate?: number
    sponsored?: number
    cosponsored?: number
    passedSponsored?: number
    impactScore?: number
    activityScore?: number
    independence?: number
    overallScore?: number
    rank?: number | null
    grade?: string | null
    topTopicsJson?: string | null
    updatedAt?: Date | string
  }

  export type SupervisorStatUpdateManyMutationInput = {
    totalVotes?: IntFieldUpdateOperationsInput | number
    ayes?: IntFieldUpdateOperationsInput | number
    noes?: IntFieldUpdateOperationsInput | number
    absences?: IntFieldUpdateOperationsInput | number
    attendanceRate?: FloatFieldUpdateOperationsInput | number
    dissentRate?: FloatFieldUpdateOperationsInput | number
    sponsored?: IntFieldUpdateOperationsInput | number
    cosponsored?: IntFieldUpdateOperationsInput | number
    passedSponsored?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    activityScore?: FloatFieldUpdateOperationsInput | number
    independence?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    topTopicsJson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisorStatUncheckedUpdateManyInput = {
    supervisorId?: IntFieldUpdateOperationsInput | number
    totalVotes?: IntFieldUpdateOperationsInput | number
    ayes?: IntFieldUpdateOperationsInput | number
    noes?: IntFieldUpdateOperationsInput | number
    absences?: IntFieldUpdateOperationsInput | number
    attendanceRate?: FloatFieldUpdateOperationsInput | number
    dissentRate?: FloatFieldUpdateOperationsInput | number
    sponsored?: IntFieldUpdateOperationsInput | number
    cosponsored?: IntFieldUpdateOperationsInput | number
    passedSponsored?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    activityScore?: FloatFieldUpdateOperationsInput | number
    independence?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    topTopicsJson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngestLogCreateInput = {
    startedAt?: Date | string
    finishedAt?: Date | string | null
    meetings?: number
    matters?: number
    actions?: number
    votes?: number
    note?: string | null
  }

  export type IngestLogUncheckedCreateInput = {
    id?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    meetings?: number
    matters?: number
    actions?: number
    votes?: number
    note?: string | null
  }

  export type IngestLogUpdateInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: IntFieldUpdateOperationsInput | number
    matters?: IntFieldUpdateOperationsInput | number
    actions?: IntFieldUpdateOperationsInput | number
    votes?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngestLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: IntFieldUpdateOperationsInput | number
    matters?: IntFieldUpdateOperationsInput | number
    actions?: IntFieldUpdateOperationsInput | number
    votes?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngestLogCreateManyInput = {
    id?: number
    startedAt?: Date | string
    finishedAt?: Date | string | null
    meetings?: number
    matters?: number
    actions?: number
    votes?: number
    note?: string | null
  }

  export type IngestLogUpdateManyMutationInput = {
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: IntFieldUpdateOperationsInput | number
    matters?: IntFieldUpdateOperationsInput | number
    actions?: IntFieldUpdateOperationsInput | number
    votes?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IngestLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetings?: IntFieldUpdateOperationsInput | number
    matters?: IntFieldUpdateOperationsInput | number
    actions?: IntFieldUpdateOperationsInput | number
    votes?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type SponsorshipListRelationFilter = {
    every?: SponsorshipWhereInput
    some?: SponsorshipWhereInput
    none?: SponsorshipWhereInput
  }

  export type SupervisorStatNullableRelationFilter = {
    is?: SupervisorStatWhereInput | null
    isNot?: SupervisorStatWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SponsorshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupervisorCountOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    district?: SortOrder
    title?: SortOrder
    party?: SortOrder
    active?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    website?: SortOrder
    termStart?: SortOrder
    termEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorAvgOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    district?: SortOrder
  }

  export type SupervisorMaxOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    district?: SortOrder
    title?: SortOrder
    party?: SortOrder
    active?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    website?: SortOrder
    termStart?: SortOrder
    termEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorMinOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    slug?: SortOrder
    fullName?: SortOrder
    district?: SortOrder
    title?: SortOrder
    party?: SortOrder
    active?: SortOrder
    photoUrl?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    website?: SortOrder
    termStart?: SortOrder
    termEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorSumOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    district?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MatterTopicListRelationFilter = {
    every?: MatterTopicWhereInput
    some?: MatterTopicWhereInput
    none?: MatterTopicWhereInput
  }

  export type ActionListRelationFilter = {
    every?: ActionWhereInput
    some?: ActionWhereInput
    none?: ActionWhereInput
  }

  export type MatterAttachmentListRelationFilter = {
    every?: MatterAttachmentWhereInput
    some?: MatterAttachmentWhereInput
    none?: MatterAttachmentWhereInput
  }

  export type MatterRelationListRelationFilter = {
    every?: MatterRelationWhereInput
    some?: MatterRelationWhereInput
    none?: MatterRelationWhereInput
  }

  export type MatterTopicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatterAttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatterRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatterCountOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrder
    file?: SortOrder
    type?: SortOrder
    status?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    summarySource?: SortOrder
    fullText?: SortOrder
    introDate?: SortOrder
    finalDate?: SortOrder
    sourceUrl?: SortOrder
    inControl?: SortOrder
    originTimeline?: SortOrder
    originGeneratedAt?: SortOrder
    importance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatterAvgOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    importance?: SortOrder
  }

  export type MatterMaxOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrder
    file?: SortOrder
    type?: SortOrder
    status?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    summarySource?: SortOrder
    fullText?: SortOrder
    introDate?: SortOrder
    finalDate?: SortOrder
    sourceUrl?: SortOrder
    inControl?: SortOrder
    originTimeline?: SortOrder
    originGeneratedAt?: SortOrder
    importance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatterMinOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrder
    file?: SortOrder
    type?: SortOrder
    status?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    summarySource?: SortOrder
    fullText?: SortOrder
    introDate?: SortOrder
    finalDate?: SortOrder
    sourceUrl?: SortOrder
    inControl?: SortOrder
    originTimeline?: SortOrder
    originGeneratedAt?: SortOrder
    importance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatterSumOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    importance?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type MatterRelationFilter = {
    is?: MatterWhereInput
    isNot?: MatterWhereInput
  }

  export type MatterAttachmentMatterIdNameCompoundUniqueInput = {
    matterId: number
    name: string
  }

  export type MatterAttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    matterId?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type MatterAttachmentAvgOrderByAggregateInput = {
    id?: SortOrder
    matterId?: SortOrder
  }

  export type MatterAttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    matterId?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type MatterAttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    matterId?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type MatterAttachmentSumOrderByAggregateInput = {
    id?: SortOrder
    matterId?: SortOrder
  }

  export type MatterNullableRelationFilter = {
    is?: MatterWhereInput | null
    isNot?: MatterWhereInput | null
  }

  export type MatterRelationFromIdToFileCompoundUniqueInput = {
    fromId: number
    toFile: string
  }

  export type MatterRelationCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toFile?: SortOrder
    toLegistarId?: SortOrder
  }

  export type MatterRelationAvgOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toLegistarId?: SortOrder
  }

  export type MatterRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toFile?: SortOrder
    toLegistarId?: SortOrder
  }

  export type MatterRelationMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toFile?: SortOrder
    toLegistarId?: SortOrder
  }

  export type MatterRelationSumOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toLegistarId?: SortOrder
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrder
    bodyName?: SortOrder
    date?: SortOrder
    location?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingAvgOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrder
    bodyName?: SortOrder
    date?: SortOrder
    location?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrder
    bodyName?: SortOrder
    date?: SortOrder
    location?: SortOrder
    sourceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MeetingSumOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
  }

  export type MeetingNullableRelationFilter = {
    is?: MeetingWhereInput | null
    isNot?: MeetingWhereInput | null
  }

  export type ActionCountOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrder
    date?: SortOrder
    actionText?: SortOrder
    result?: SortOrder
    bodyName?: SortOrder
    matterId?: SortOrder
    meetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActionAvgOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    matterId?: SortOrder
    meetingId?: SortOrder
  }

  export type ActionMaxOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrder
    date?: SortOrder
    actionText?: SortOrder
    result?: SortOrder
    bodyName?: SortOrder
    matterId?: SortOrder
    meetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActionMinOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    legistarGuid?: SortOrder
    date?: SortOrder
    actionText?: SortOrder
    result?: SortOrder
    bodyName?: SortOrder
    matterId?: SortOrder
    meetingId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActionSumOrderByAggregateInput = {
    id?: SortOrder
    legistarId?: SortOrder
    matterId?: SortOrder
    meetingId?: SortOrder
  }

  export type ActionRelationFilter = {
    is?: ActionWhereInput
    isNot?: ActionWhereInput
  }

  export type SupervisorRelationFilter = {
    is?: SupervisorWhereInput
    isNot?: SupervisorWhereInput
  }

  export type VoteActionIdSupervisorIdCompoundUniqueInput = {
    actionId: number
    supervisorId: number
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    actionId?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteAvgOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    actionId?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    actionId?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
    createdAt?: SortOrder
  }

  export type VoteSumOrderByAggregateInput = {
    id?: SortOrder
    actionId?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
  }

  export type SponsorshipMatterIdSupervisorIdCompoundUniqueInput = {
    matterId: number
    supervisorId: number
  }

  export type SponsorshipCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
  }

  export type SponsorshipAvgOrderByAggregateInput = {
    id?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
  }

  export type SponsorshipMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
  }

  export type SponsorshipMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
  }

  export type SponsorshipSumOrderByAggregateInput = {
    id?: SortOrder
    matterId?: SortOrder
    supervisorId?: SortOrder
  }

  export type TopicCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    color?: SortOrder
  }

  export type TopicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TopicMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    color?: SortOrder
  }

  export type TopicMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    emoji?: SortOrder
    color?: SortOrder
  }

  export type TopicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TopicRelationFilter = {
    is?: TopicWhereInput
    isNot?: TopicWhereInput
  }

  export type MatterTopicMatterIdTopicIdCompoundUniqueInput = {
    matterId: number
    topicId: number
  }

  export type MatterTopicCountOrderByAggregateInput = {
    matterId?: SortOrder
    topicId?: SortOrder
    weight?: SortOrder
  }

  export type MatterTopicAvgOrderByAggregateInput = {
    matterId?: SortOrder
    topicId?: SortOrder
    weight?: SortOrder
  }

  export type MatterTopicMaxOrderByAggregateInput = {
    matterId?: SortOrder
    topicId?: SortOrder
    weight?: SortOrder
  }

  export type MatterTopicMinOrderByAggregateInput = {
    matterId?: SortOrder
    topicId?: SortOrder
    weight?: SortOrder
  }

  export type MatterTopicSumOrderByAggregateInput = {
    matterId?: SortOrder
    topicId?: SortOrder
    weight?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SupervisorStatCountOrderByAggregateInput = {
    supervisorId?: SortOrder
    totalVotes?: SortOrder
    ayes?: SortOrder
    noes?: SortOrder
    absences?: SortOrder
    attendanceRate?: SortOrder
    dissentRate?: SortOrder
    sponsored?: SortOrder
    cosponsored?: SortOrder
    passedSponsored?: SortOrder
    impactScore?: SortOrder
    activityScore?: SortOrder
    independence?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    grade?: SortOrder
    topTopicsJson?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorStatAvgOrderByAggregateInput = {
    supervisorId?: SortOrder
    totalVotes?: SortOrder
    ayes?: SortOrder
    noes?: SortOrder
    absences?: SortOrder
    attendanceRate?: SortOrder
    dissentRate?: SortOrder
    sponsored?: SortOrder
    cosponsored?: SortOrder
    passedSponsored?: SortOrder
    impactScore?: SortOrder
    activityScore?: SortOrder
    independence?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
  }

  export type SupervisorStatMaxOrderByAggregateInput = {
    supervisorId?: SortOrder
    totalVotes?: SortOrder
    ayes?: SortOrder
    noes?: SortOrder
    absences?: SortOrder
    attendanceRate?: SortOrder
    dissentRate?: SortOrder
    sponsored?: SortOrder
    cosponsored?: SortOrder
    passedSponsored?: SortOrder
    impactScore?: SortOrder
    activityScore?: SortOrder
    independence?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    grade?: SortOrder
    topTopicsJson?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorStatMinOrderByAggregateInput = {
    supervisorId?: SortOrder
    totalVotes?: SortOrder
    ayes?: SortOrder
    noes?: SortOrder
    absences?: SortOrder
    attendanceRate?: SortOrder
    dissentRate?: SortOrder
    sponsored?: SortOrder
    cosponsored?: SortOrder
    passedSponsored?: SortOrder
    impactScore?: SortOrder
    activityScore?: SortOrder
    independence?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
    grade?: SortOrder
    topTopicsJson?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupervisorStatSumOrderByAggregateInput = {
    supervisorId?: SortOrder
    totalVotes?: SortOrder
    ayes?: SortOrder
    noes?: SortOrder
    absences?: SortOrder
    attendanceRate?: SortOrder
    dissentRate?: SortOrder
    sponsored?: SortOrder
    cosponsored?: SortOrder
    passedSponsored?: SortOrder
    impactScore?: SortOrder
    activityScore?: SortOrder
    independence?: SortOrder
    overallScore?: SortOrder
    rank?: SortOrder
  }

  export type IngestLogCountOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    meetings?: SortOrder
    matters?: SortOrder
    actions?: SortOrder
    votes?: SortOrder
    note?: SortOrder
  }

  export type IngestLogAvgOrderByAggregateInput = {
    id?: SortOrder
    meetings?: SortOrder
    matters?: SortOrder
    actions?: SortOrder
    votes?: SortOrder
  }

  export type IngestLogMaxOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    meetings?: SortOrder
    matters?: SortOrder
    actions?: SortOrder
    votes?: SortOrder
    note?: SortOrder
  }

  export type IngestLogMinOrderByAggregateInput = {
    id?: SortOrder
    startedAt?: SortOrder
    finishedAt?: SortOrder
    meetings?: SortOrder
    matters?: SortOrder
    actions?: SortOrder
    votes?: SortOrder
    note?: SortOrder
  }

  export type IngestLogSumOrderByAggregateInput = {
    id?: SortOrder
    meetings?: SortOrder
    matters?: SortOrder
    actions?: SortOrder
    votes?: SortOrder
  }

  export type VoteCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<VoteCreateWithoutSupervisorInput, VoteUncheckedCreateWithoutSupervisorInput> | VoteCreateWithoutSupervisorInput[] | VoteUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSupervisorInput | VoteCreateOrConnectWithoutSupervisorInput[]
    createMany?: VoteCreateManySupervisorInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type SponsorshipCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<SponsorshipCreateWithoutSupervisorInput, SponsorshipUncheckedCreateWithoutSupervisorInput> | SponsorshipCreateWithoutSupervisorInput[] | SponsorshipUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: SponsorshipCreateOrConnectWithoutSupervisorInput | SponsorshipCreateOrConnectWithoutSupervisorInput[]
    createMany?: SponsorshipCreateManySupervisorInputEnvelope
    connect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
  }

  export type SupervisorStatCreateNestedOneWithoutSupervisorInput = {
    create?: XOR<SupervisorStatCreateWithoutSupervisorInput, SupervisorStatUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: SupervisorStatCreateOrConnectWithoutSupervisorInput
    connect?: SupervisorStatWhereUniqueInput
  }

  export type VoteUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<VoteCreateWithoutSupervisorInput, VoteUncheckedCreateWithoutSupervisorInput> | VoteCreateWithoutSupervisorInput[] | VoteUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSupervisorInput | VoteCreateOrConnectWithoutSupervisorInput[]
    createMany?: VoteCreateManySupervisorInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type SponsorshipUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<SponsorshipCreateWithoutSupervisorInput, SponsorshipUncheckedCreateWithoutSupervisorInput> | SponsorshipCreateWithoutSupervisorInput[] | SponsorshipUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: SponsorshipCreateOrConnectWithoutSupervisorInput | SponsorshipCreateOrConnectWithoutSupervisorInput[]
    createMany?: SponsorshipCreateManySupervisorInputEnvelope
    connect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
  }

  export type SupervisorStatUncheckedCreateNestedOneWithoutSupervisorInput = {
    create?: XOR<SupervisorStatCreateWithoutSupervisorInput, SupervisorStatUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: SupervisorStatCreateOrConnectWithoutSupervisorInput
    connect?: SupervisorStatWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VoteUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<VoteCreateWithoutSupervisorInput, VoteUncheckedCreateWithoutSupervisorInput> | VoteCreateWithoutSupervisorInput[] | VoteUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSupervisorInput | VoteCreateOrConnectWithoutSupervisorInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutSupervisorInput | VoteUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: VoteCreateManySupervisorInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutSupervisorInput | VoteUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutSupervisorInput | VoteUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type SponsorshipUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<SponsorshipCreateWithoutSupervisorInput, SponsorshipUncheckedCreateWithoutSupervisorInput> | SponsorshipCreateWithoutSupervisorInput[] | SponsorshipUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: SponsorshipCreateOrConnectWithoutSupervisorInput | SponsorshipCreateOrConnectWithoutSupervisorInput[]
    upsert?: SponsorshipUpsertWithWhereUniqueWithoutSupervisorInput | SponsorshipUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: SponsorshipCreateManySupervisorInputEnvelope
    set?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    disconnect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    delete?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    connect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    update?: SponsorshipUpdateWithWhereUniqueWithoutSupervisorInput | SponsorshipUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: SponsorshipUpdateManyWithWhereWithoutSupervisorInput | SponsorshipUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: SponsorshipScalarWhereInput | SponsorshipScalarWhereInput[]
  }

  export type SupervisorStatUpdateOneWithoutSupervisorNestedInput = {
    create?: XOR<SupervisorStatCreateWithoutSupervisorInput, SupervisorStatUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: SupervisorStatCreateOrConnectWithoutSupervisorInput
    upsert?: SupervisorStatUpsertWithoutSupervisorInput
    disconnect?: SupervisorStatWhereInput | boolean
    delete?: SupervisorStatWhereInput | boolean
    connect?: SupervisorStatWhereUniqueInput
    update?: XOR<XOR<SupervisorStatUpdateToOneWithWhereWithoutSupervisorInput, SupervisorStatUpdateWithoutSupervisorInput>, SupervisorStatUncheckedUpdateWithoutSupervisorInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VoteUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<VoteCreateWithoutSupervisorInput, VoteUncheckedCreateWithoutSupervisorInput> | VoteCreateWithoutSupervisorInput[] | VoteUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutSupervisorInput | VoteCreateOrConnectWithoutSupervisorInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutSupervisorInput | VoteUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: VoteCreateManySupervisorInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutSupervisorInput | VoteUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutSupervisorInput | VoteUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type SponsorshipUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<SponsorshipCreateWithoutSupervisorInput, SponsorshipUncheckedCreateWithoutSupervisorInput> | SponsorshipCreateWithoutSupervisorInput[] | SponsorshipUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: SponsorshipCreateOrConnectWithoutSupervisorInput | SponsorshipCreateOrConnectWithoutSupervisorInput[]
    upsert?: SponsorshipUpsertWithWhereUniqueWithoutSupervisorInput | SponsorshipUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: SponsorshipCreateManySupervisorInputEnvelope
    set?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    disconnect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    delete?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    connect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    update?: SponsorshipUpdateWithWhereUniqueWithoutSupervisorInput | SponsorshipUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: SponsorshipUpdateManyWithWhereWithoutSupervisorInput | SponsorshipUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: SponsorshipScalarWhereInput | SponsorshipScalarWhereInput[]
  }

  export type SupervisorStatUncheckedUpdateOneWithoutSupervisorNestedInput = {
    create?: XOR<SupervisorStatCreateWithoutSupervisorInput, SupervisorStatUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: SupervisorStatCreateOrConnectWithoutSupervisorInput
    upsert?: SupervisorStatUpsertWithoutSupervisorInput
    disconnect?: SupervisorStatWhereInput | boolean
    delete?: SupervisorStatWhereInput | boolean
    connect?: SupervisorStatWhereUniqueInput
    update?: XOR<XOR<SupervisorStatUpdateToOneWithWhereWithoutSupervisorInput, SupervisorStatUpdateWithoutSupervisorInput>, SupervisorStatUncheckedUpdateWithoutSupervisorInput>
  }

  export type MatterTopicCreateNestedManyWithoutMatterInput = {
    create?: XOR<MatterTopicCreateWithoutMatterInput, MatterTopicUncheckedCreateWithoutMatterInput> | MatterTopicCreateWithoutMatterInput[] | MatterTopicUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: MatterTopicCreateOrConnectWithoutMatterInput | MatterTopicCreateOrConnectWithoutMatterInput[]
    createMany?: MatterTopicCreateManyMatterInputEnvelope
    connect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
  }

  export type VoteCreateNestedManyWithoutMatterInput = {
    create?: XOR<VoteCreateWithoutMatterInput, VoteUncheckedCreateWithoutMatterInput> | VoteCreateWithoutMatterInput[] | VoteUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutMatterInput | VoteCreateOrConnectWithoutMatterInput[]
    createMany?: VoteCreateManyMatterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ActionCreateNestedManyWithoutMatterInput = {
    create?: XOR<ActionCreateWithoutMatterInput, ActionUncheckedCreateWithoutMatterInput> | ActionCreateWithoutMatterInput[] | ActionUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutMatterInput | ActionCreateOrConnectWithoutMatterInput[]
    createMany?: ActionCreateManyMatterInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type SponsorshipCreateNestedManyWithoutMatterInput = {
    create?: XOR<SponsorshipCreateWithoutMatterInput, SponsorshipUncheckedCreateWithoutMatterInput> | SponsorshipCreateWithoutMatterInput[] | SponsorshipUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: SponsorshipCreateOrConnectWithoutMatterInput | SponsorshipCreateOrConnectWithoutMatterInput[]
    createMany?: SponsorshipCreateManyMatterInputEnvelope
    connect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
  }

  export type MatterAttachmentCreateNestedManyWithoutMatterInput = {
    create?: XOR<MatterAttachmentCreateWithoutMatterInput, MatterAttachmentUncheckedCreateWithoutMatterInput> | MatterAttachmentCreateWithoutMatterInput[] | MatterAttachmentUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: MatterAttachmentCreateOrConnectWithoutMatterInput | MatterAttachmentCreateOrConnectWithoutMatterInput[]
    createMany?: MatterAttachmentCreateManyMatterInputEnvelope
    connect?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
  }

  export type MatterRelationCreateNestedManyWithoutFromInput = {
    create?: XOR<MatterRelationCreateWithoutFromInput, MatterRelationUncheckedCreateWithoutFromInput> | MatterRelationCreateWithoutFromInput[] | MatterRelationUncheckedCreateWithoutFromInput[]
    connectOrCreate?: MatterRelationCreateOrConnectWithoutFromInput | MatterRelationCreateOrConnectWithoutFromInput[]
    createMany?: MatterRelationCreateManyFromInputEnvelope
    connect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
  }

  export type MatterRelationCreateNestedManyWithoutToInput = {
    create?: XOR<MatterRelationCreateWithoutToInput, MatterRelationUncheckedCreateWithoutToInput> | MatterRelationCreateWithoutToInput[] | MatterRelationUncheckedCreateWithoutToInput[]
    connectOrCreate?: MatterRelationCreateOrConnectWithoutToInput | MatterRelationCreateOrConnectWithoutToInput[]
    createMany?: MatterRelationCreateManyToInputEnvelope
    connect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
  }

  export type MatterTopicUncheckedCreateNestedManyWithoutMatterInput = {
    create?: XOR<MatterTopicCreateWithoutMatterInput, MatterTopicUncheckedCreateWithoutMatterInput> | MatterTopicCreateWithoutMatterInput[] | MatterTopicUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: MatterTopicCreateOrConnectWithoutMatterInput | MatterTopicCreateOrConnectWithoutMatterInput[]
    createMany?: MatterTopicCreateManyMatterInputEnvelope
    connect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutMatterInput = {
    create?: XOR<VoteCreateWithoutMatterInput, VoteUncheckedCreateWithoutMatterInput> | VoteCreateWithoutMatterInput[] | VoteUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutMatterInput | VoteCreateOrConnectWithoutMatterInput[]
    createMany?: VoteCreateManyMatterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutMatterInput = {
    create?: XOR<ActionCreateWithoutMatterInput, ActionUncheckedCreateWithoutMatterInput> | ActionCreateWithoutMatterInput[] | ActionUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutMatterInput | ActionCreateOrConnectWithoutMatterInput[]
    createMany?: ActionCreateManyMatterInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type SponsorshipUncheckedCreateNestedManyWithoutMatterInput = {
    create?: XOR<SponsorshipCreateWithoutMatterInput, SponsorshipUncheckedCreateWithoutMatterInput> | SponsorshipCreateWithoutMatterInput[] | SponsorshipUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: SponsorshipCreateOrConnectWithoutMatterInput | SponsorshipCreateOrConnectWithoutMatterInput[]
    createMany?: SponsorshipCreateManyMatterInputEnvelope
    connect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
  }

  export type MatterAttachmentUncheckedCreateNestedManyWithoutMatterInput = {
    create?: XOR<MatterAttachmentCreateWithoutMatterInput, MatterAttachmentUncheckedCreateWithoutMatterInput> | MatterAttachmentCreateWithoutMatterInput[] | MatterAttachmentUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: MatterAttachmentCreateOrConnectWithoutMatterInput | MatterAttachmentCreateOrConnectWithoutMatterInput[]
    createMany?: MatterAttachmentCreateManyMatterInputEnvelope
    connect?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
  }

  export type MatterRelationUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<MatterRelationCreateWithoutFromInput, MatterRelationUncheckedCreateWithoutFromInput> | MatterRelationCreateWithoutFromInput[] | MatterRelationUncheckedCreateWithoutFromInput[]
    connectOrCreate?: MatterRelationCreateOrConnectWithoutFromInput | MatterRelationCreateOrConnectWithoutFromInput[]
    createMany?: MatterRelationCreateManyFromInputEnvelope
    connect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
  }

  export type MatterRelationUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<MatterRelationCreateWithoutToInput, MatterRelationUncheckedCreateWithoutToInput> | MatterRelationCreateWithoutToInput[] | MatterRelationUncheckedCreateWithoutToInput[]
    connectOrCreate?: MatterRelationCreateOrConnectWithoutToInput | MatterRelationCreateOrConnectWithoutToInput[]
    createMany?: MatterRelationCreateManyToInputEnvelope
    connect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatterTopicUpdateManyWithoutMatterNestedInput = {
    create?: XOR<MatterTopicCreateWithoutMatterInput, MatterTopicUncheckedCreateWithoutMatterInput> | MatterTopicCreateWithoutMatterInput[] | MatterTopicUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: MatterTopicCreateOrConnectWithoutMatterInput | MatterTopicCreateOrConnectWithoutMatterInput[]
    upsert?: MatterTopicUpsertWithWhereUniqueWithoutMatterInput | MatterTopicUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: MatterTopicCreateManyMatterInputEnvelope
    set?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    disconnect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    delete?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    connect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    update?: MatterTopicUpdateWithWhereUniqueWithoutMatterInput | MatterTopicUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: MatterTopicUpdateManyWithWhereWithoutMatterInput | MatterTopicUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: MatterTopicScalarWhereInput | MatterTopicScalarWhereInput[]
  }

  export type VoteUpdateManyWithoutMatterNestedInput = {
    create?: XOR<VoteCreateWithoutMatterInput, VoteUncheckedCreateWithoutMatterInput> | VoteCreateWithoutMatterInput[] | VoteUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutMatterInput | VoteCreateOrConnectWithoutMatterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutMatterInput | VoteUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: VoteCreateManyMatterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutMatterInput | VoteUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutMatterInput | VoteUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ActionUpdateManyWithoutMatterNestedInput = {
    create?: XOR<ActionCreateWithoutMatterInput, ActionUncheckedCreateWithoutMatterInput> | ActionCreateWithoutMatterInput[] | ActionUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutMatterInput | ActionCreateOrConnectWithoutMatterInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutMatterInput | ActionUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: ActionCreateManyMatterInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutMatterInput | ActionUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutMatterInput | ActionUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type SponsorshipUpdateManyWithoutMatterNestedInput = {
    create?: XOR<SponsorshipCreateWithoutMatterInput, SponsorshipUncheckedCreateWithoutMatterInput> | SponsorshipCreateWithoutMatterInput[] | SponsorshipUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: SponsorshipCreateOrConnectWithoutMatterInput | SponsorshipCreateOrConnectWithoutMatterInput[]
    upsert?: SponsorshipUpsertWithWhereUniqueWithoutMatterInput | SponsorshipUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: SponsorshipCreateManyMatterInputEnvelope
    set?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    disconnect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    delete?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    connect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    update?: SponsorshipUpdateWithWhereUniqueWithoutMatterInput | SponsorshipUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: SponsorshipUpdateManyWithWhereWithoutMatterInput | SponsorshipUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: SponsorshipScalarWhereInput | SponsorshipScalarWhereInput[]
  }

  export type MatterAttachmentUpdateManyWithoutMatterNestedInput = {
    create?: XOR<MatterAttachmentCreateWithoutMatterInput, MatterAttachmentUncheckedCreateWithoutMatterInput> | MatterAttachmentCreateWithoutMatterInput[] | MatterAttachmentUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: MatterAttachmentCreateOrConnectWithoutMatterInput | MatterAttachmentCreateOrConnectWithoutMatterInput[]
    upsert?: MatterAttachmentUpsertWithWhereUniqueWithoutMatterInput | MatterAttachmentUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: MatterAttachmentCreateManyMatterInputEnvelope
    set?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
    disconnect?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
    delete?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
    connect?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
    update?: MatterAttachmentUpdateWithWhereUniqueWithoutMatterInput | MatterAttachmentUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: MatterAttachmentUpdateManyWithWhereWithoutMatterInput | MatterAttachmentUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: MatterAttachmentScalarWhereInput | MatterAttachmentScalarWhereInput[]
  }

  export type MatterRelationUpdateManyWithoutFromNestedInput = {
    create?: XOR<MatterRelationCreateWithoutFromInput, MatterRelationUncheckedCreateWithoutFromInput> | MatterRelationCreateWithoutFromInput[] | MatterRelationUncheckedCreateWithoutFromInput[]
    connectOrCreate?: MatterRelationCreateOrConnectWithoutFromInput | MatterRelationCreateOrConnectWithoutFromInput[]
    upsert?: MatterRelationUpsertWithWhereUniqueWithoutFromInput | MatterRelationUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: MatterRelationCreateManyFromInputEnvelope
    set?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    disconnect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    delete?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    connect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    update?: MatterRelationUpdateWithWhereUniqueWithoutFromInput | MatterRelationUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: MatterRelationUpdateManyWithWhereWithoutFromInput | MatterRelationUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: MatterRelationScalarWhereInput | MatterRelationScalarWhereInput[]
  }

  export type MatterRelationUpdateManyWithoutToNestedInput = {
    create?: XOR<MatterRelationCreateWithoutToInput, MatterRelationUncheckedCreateWithoutToInput> | MatterRelationCreateWithoutToInput[] | MatterRelationUncheckedCreateWithoutToInput[]
    connectOrCreate?: MatterRelationCreateOrConnectWithoutToInput | MatterRelationCreateOrConnectWithoutToInput[]
    upsert?: MatterRelationUpsertWithWhereUniqueWithoutToInput | MatterRelationUpsertWithWhereUniqueWithoutToInput[]
    createMany?: MatterRelationCreateManyToInputEnvelope
    set?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    disconnect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    delete?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    connect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    update?: MatterRelationUpdateWithWhereUniqueWithoutToInput | MatterRelationUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: MatterRelationUpdateManyWithWhereWithoutToInput | MatterRelationUpdateManyWithWhereWithoutToInput[]
    deleteMany?: MatterRelationScalarWhereInput | MatterRelationScalarWhereInput[]
  }

  export type MatterTopicUncheckedUpdateManyWithoutMatterNestedInput = {
    create?: XOR<MatterTopicCreateWithoutMatterInput, MatterTopicUncheckedCreateWithoutMatterInput> | MatterTopicCreateWithoutMatterInput[] | MatterTopicUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: MatterTopicCreateOrConnectWithoutMatterInput | MatterTopicCreateOrConnectWithoutMatterInput[]
    upsert?: MatterTopicUpsertWithWhereUniqueWithoutMatterInput | MatterTopicUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: MatterTopicCreateManyMatterInputEnvelope
    set?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    disconnect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    delete?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    connect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    update?: MatterTopicUpdateWithWhereUniqueWithoutMatterInput | MatterTopicUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: MatterTopicUpdateManyWithWhereWithoutMatterInput | MatterTopicUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: MatterTopicScalarWhereInput | MatterTopicScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutMatterNestedInput = {
    create?: XOR<VoteCreateWithoutMatterInput, VoteUncheckedCreateWithoutMatterInput> | VoteCreateWithoutMatterInput[] | VoteUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutMatterInput | VoteCreateOrConnectWithoutMatterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutMatterInput | VoteUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: VoteCreateManyMatterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutMatterInput | VoteUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutMatterInput | VoteUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutMatterNestedInput = {
    create?: XOR<ActionCreateWithoutMatterInput, ActionUncheckedCreateWithoutMatterInput> | ActionCreateWithoutMatterInput[] | ActionUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutMatterInput | ActionCreateOrConnectWithoutMatterInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutMatterInput | ActionUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: ActionCreateManyMatterInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutMatterInput | ActionUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutMatterInput | ActionUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type SponsorshipUncheckedUpdateManyWithoutMatterNestedInput = {
    create?: XOR<SponsorshipCreateWithoutMatterInput, SponsorshipUncheckedCreateWithoutMatterInput> | SponsorshipCreateWithoutMatterInput[] | SponsorshipUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: SponsorshipCreateOrConnectWithoutMatterInput | SponsorshipCreateOrConnectWithoutMatterInput[]
    upsert?: SponsorshipUpsertWithWhereUniqueWithoutMatterInput | SponsorshipUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: SponsorshipCreateManyMatterInputEnvelope
    set?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    disconnect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    delete?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    connect?: SponsorshipWhereUniqueInput | SponsorshipWhereUniqueInput[]
    update?: SponsorshipUpdateWithWhereUniqueWithoutMatterInput | SponsorshipUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: SponsorshipUpdateManyWithWhereWithoutMatterInput | SponsorshipUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: SponsorshipScalarWhereInput | SponsorshipScalarWhereInput[]
  }

  export type MatterAttachmentUncheckedUpdateManyWithoutMatterNestedInput = {
    create?: XOR<MatterAttachmentCreateWithoutMatterInput, MatterAttachmentUncheckedCreateWithoutMatterInput> | MatterAttachmentCreateWithoutMatterInput[] | MatterAttachmentUncheckedCreateWithoutMatterInput[]
    connectOrCreate?: MatterAttachmentCreateOrConnectWithoutMatterInput | MatterAttachmentCreateOrConnectWithoutMatterInput[]
    upsert?: MatterAttachmentUpsertWithWhereUniqueWithoutMatterInput | MatterAttachmentUpsertWithWhereUniqueWithoutMatterInput[]
    createMany?: MatterAttachmentCreateManyMatterInputEnvelope
    set?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
    disconnect?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
    delete?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
    connect?: MatterAttachmentWhereUniqueInput | MatterAttachmentWhereUniqueInput[]
    update?: MatterAttachmentUpdateWithWhereUniqueWithoutMatterInput | MatterAttachmentUpdateWithWhereUniqueWithoutMatterInput[]
    updateMany?: MatterAttachmentUpdateManyWithWhereWithoutMatterInput | MatterAttachmentUpdateManyWithWhereWithoutMatterInput[]
    deleteMany?: MatterAttachmentScalarWhereInput | MatterAttachmentScalarWhereInput[]
  }

  export type MatterRelationUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<MatterRelationCreateWithoutFromInput, MatterRelationUncheckedCreateWithoutFromInput> | MatterRelationCreateWithoutFromInput[] | MatterRelationUncheckedCreateWithoutFromInput[]
    connectOrCreate?: MatterRelationCreateOrConnectWithoutFromInput | MatterRelationCreateOrConnectWithoutFromInput[]
    upsert?: MatterRelationUpsertWithWhereUniqueWithoutFromInput | MatterRelationUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: MatterRelationCreateManyFromInputEnvelope
    set?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    disconnect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    delete?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    connect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    update?: MatterRelationUpdateWithWhereUniqueWithoutFromInput | MatterRelationUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: MatterRelationUpdateManyWithWhereWithoutFromInput | MatterRelationUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: MatterRelationScalarWhereInput | MatterRelationScalarWhereInput[]
  }

  export type MatterRelationUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<MatterRelationCreateWithoutToInput, MatterRelationUncheckedCreateWithoutToInput> | MatterRelationCreateWithoutToInput[] | MatterRelationUncheckedCreateWithoutToInput[]
    connectOrCreate?: MatterRelationCreateOrConnectWithoutToInput | MatterRelationCreateOrConnectWithoutToInput[]
    upsert?: MatterRelationUpsertWithWhereUniqueWithoutToInput | MatterRelationUpsertWithWhereUniqueWithoutToInput[]
    createMany?: MatterRelationCreateManyToInputEnvelope
    set?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    disconnect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    delete?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    connect?: MatterRelationWhereUniqueInput | MatterRelationWhereUniqueInput[]
    update?: MatterRelationUpdateWithWhereUniqueWithoutToInput | MatterRelationUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: MatterRelationUpdateManyWithWhereWithoutToInput | MatterRelationUpdateManyWithWhereWithoutToInput[]
    deleteMany?: MatterRelationScalarWhereInput | MatterRelationScalarWhereInput[]
  }

  export type MatterCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<MatterCreateWithoutAttachmentsInput, MatterUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: MatterCreateOrConnectWithoutAttachmentsInput
    connect?: MatterWhereUniqueInput
  }

  export type MatterUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<MatterCreateWithoutAttachmentsInput, MatterUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: MatterCreateOrConnectWithoutAttachmentsInput
    upsert?: MatterUpsertWithoutAttachmentsInput
    connect?: MatterWhereUniqueInput
    update?: XOR<XOR<MatterUpdateToOneWithWhereWithoutAttachmentsInput, MatterUpdateWithoutAttachmentsInput>, MatterUncheckedUpdateWithoutAttachmentsInput>
  }

  export type MatterCreateNestedOneWithoutRelationsFromInput = {
    create?: XOR<MatterCreateWithoutRelationsFromInput, MatterUncheckedCreateWithoutRelationsFromInput>
    connectOrCreate?: MatterCreateOrConnectWithoutRelationsFromInput
    connect?: MatterWhereUniqueInput
  }

  export type MatterCreateNestedOneWithoutRelationsToInput = {
    create?: XOR<MatterCreateWithoutRelationsToInput, MatterUncheckedCreateWithoutRelationsToInput>
    connectOrCreate?: MatterCreateOrConnectWithoutRelationsToInput
    connect?: MatterWhereUniqueInput
  }

  export type MatterUpdateOneRequiredWithoutRelationsFromNestedInput = {
    create?: XOR<MatterCreateWithoutRelationsFromInput, MatterUncheckedCreateWithoutRelationsFromInput>
    connectOrCreate?: MatterCreateOrConnectWithoutRelationsFromInput
    upsert?: MatterUpsertWithoutRelationsFromInput
    connect?: MatterWhereUniqueInput
    update?: XOR<XOR<MatterUpdateToOneWithWhereWithoutRelationsFromInput, MatterUpdateWithoutRelationsFromInput>, MatterUncheckedUpdateWithoutRelationsFromInput>
  }

  export type MatterUpdateOneWithoutRelationsToNestedInput = {
    create?: XOR<MatterCreateWithoutRelationsToInput, MatterUncheckedCreateWithoutRelationsToInput>
    connectOrCreate?: MatterCreateOrConnectWithoutRelationsToInput
    upsert?: MatterUpsertWithoutRelationsToInput
    disconnect?: MatterWhereInput | boolean
    delete?: MatterWhereInput | boolean
    connect?: MatterWhereUniqueInput
    update?: XOR<XOR<MatterUpdateToOneWithWhereWithoutRelationsToInput, MatterUpdateWithoutRelationsToInput>, MatterUncheckedUpdateWithoutRelationsToInput>
  }

  export type ActionCreateNestedManyWithoutMeetingInput = {
    create?: XOR<ActionCreateWithoutMeetingInput, ActionUncheckedCreateWithoutMeetingInput> | ActionCreateWithoutMeetingInput[] | ActionUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutMeetingInput | ActionCreateOrConnectWithoutMeetingInput[]
    createMany?: ActionCreateManyMeetingInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<ActionCreateWithoutMeetingInput, ActionUncheckedCreateWithoutMeetingInput> | ActionCreateWithoutMeetingInput[] | ActionUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutMeetingInput | ActionCreateOrConnectWithoutMeetingInput[]
    createMany?: ActionCreateManyMeetingInputEnvelope
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
  }

  export type ActionUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<ActionCreateWithoutMeetingInput, ActionUncheckedCreateWithoutMeetingInput> | ActionCreateWithoutMeetingInput[] | ActionUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutMeetingInput | ActionCreateOrConnectWithoutMeetingInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutMeetingInput | ActionUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: ActionCreateManyMeetingInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutMeetingInput | ActionUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutMeetingInput | ActionUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type ActionUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<ActionCreateWithoutMeetingInput, ActionUncheckedCreateWithoutMeetingInput> | ActionCreateWithoutMeetingInput[] | ActionUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: ActionCreateOrConnectWithoutMeetingInput | ActionCreateOrConnectWithoutMeetingInput[]
    upsert?: ActionUpsertWithWhereUniqueWithoutMeetingInput | ActionUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: ActionCreateManyMeetingInputEnvelope
    set?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    disconnect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    delete?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    connect?: ActionWhereUniqueInput | ActionWhereUniqueInput[]
    update?: ActionUpdateWithWhereUniqueWithoutMeetingInput | ActionUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: ActionUpdateManyWithWhereWithoutMeetingInput | ActionUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: ActionScalarWhereInput | ActionScalarWhereInput[]
  }

  export type MatterCreateNestedOneWithoutActionsInput = {
    create?: XOR<MatterCreateWithoutActionsInput, MatterUncheckedCreateWithoutActionsInput>
    connectOrCreate?: MatterCreateOrConnectWithoutActionsInput
    connect?: MatterWhereUniqueInput
  }

  export type MeetingCreateNestedOneWithoutActionsInput = {
    create?: XOR<MeetingCreateWithoutActionsInput, MeetingUncheckedCreateWithoutActionsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutActionsInput
    connect?: MeetingWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutActionInput = {
    create?: XOR<VoteCreateWithoutActionInput, VoteUncheckedCreateWithoutActionInput> | VoteCreateWithoutActionInput[] | VoteUncheckedCreateWithoutActionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutActionInput | VoteCreateOrConnectWithoutActionInput[]
    createMany?: VoteCreateManyActionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type VoteUncheckedCreateNestedManyWithoutActionInput = {
    create?: XOR<VoteCreateWithoutActionInput, VoteUncheckedCreateWithoutActionInput> | VoteCreateWithoutActionInput[] | VoteUncheckedCreateWithoutActionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutActionInput | VoteCreateOrConnectWithoutActionInput[]
    createMany?: VoteCreateManyActionInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type MatterUpdateOneRequiredWithoutActionsNestedInput = {
    create?: XOR<MatterCreateWithoutActionsInput, MatterUncheckedCreateWithoutActionsInput>
    connectOrCreate?: MatterCreateOrConnectWithoutActionsInput
    upsert?: MatterUpsertWithoutActionsInput
    connect?: MatterWhereUniqueInput
    update?: XOR<XOR<MatterUpdateToOneWithWhereWithoutActionsInput, MatterUpdateWithoutActionsInput>, MatterUncheckedUpdateWithoutActionsInput>
  }

  export type MeetingUpdateOneWithoutActionsNestedInput = {
    create?: XOR<MeetingCreateWithoutActionsInput, MeetingUncheckedCreateWithoutActionsInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutActionsInput
    upsert?: MeetingUpsertWithoutActionsInput
    disconnect?: MeetingWhereInput | boolean
    delete?: MeetingWhereInput | boolean
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutActionsInput, MeetingUpdateWithoutActionsInput>, MeetingUncheckedUpdateWithoutActionsInput>
  }

  export type VoteUpdateManyWithoutActionNestedInput = {
    create?: XOR<VoteCreateWithoutActionInput, VoteUncheckedCreateWithoutActionInput> | VoteCreateWithoutActionInput[] | VoteUncheckedCreateWithoutActionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutActionInput | VoteCreateOrConnectWithoutActionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutActionInput | VoteUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: VoteCreateManyActionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutActionInput | VoteUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutActionInput | VoteUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoteUncheckedUpdateManyWithoutActionNestedInput = {
    create?: XOR<VoteCreateWithoutActionInput, VoteUncheckedCreateWithoutActionInput> | VoteCreateWithoutActionInput[] | VoteUncheckedCreateWithoutActionInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutActionInput | VoteCreateOrConnectWithoutActionInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutActionInput | VoteUpsertWithWhereUniqueWithoutActionInput[]
    createMany?: VoteCreateManyActionInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutActionInput | VoteUpdateWithWhereUniqueWithoutActionInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutActionInput | VoteUpdateManyWithWhereWithoutActionInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type ActionCreateNestedOneWithoutVotesInput = {
    create?: XOR<ActionCreateWithoutVotesInput, ActionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ActionCreateOrConnectWithoutVotesInput
    connect?: ActionWhereUniqueInput
  }

  export type MatterCreateNestedOneWithoutVotesInput = {
    create?: XOR<MatterCreateWithoutVotesInput, MatterUncheckedCreateWithoutVotesInput>
    connectOrCreate?: MatterCreateOrConnectWithoutVotesInput
    connect?: MatterWhereUniqueInput
  }

  export type SupervisorCreateNestedOneWithoutVotesInput = {
    create?: XOR<SupervisorCreateWithoutVotesInput, SupervisorUncheckedCreateWithoutVotesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutVotesInput
    connect?: SupervisorWhereUniqueInput
  }

  export type ActionUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<ActionCreateWithoutVotesInput, ActionUncheckedCreateWithoutVotesInput>
    connectOrCreate?: ActionCreateOrConnectWithoutVotesInput
    upsert?: ActionUpsertWithoutVotesInput
    connect?: ActionWhereUniqueInput
    update?: XOR<XOR<ActionUpdateToOneWithWhereWithoutVotesInput, ActionUpdateWithoutVotesInput>, ActionUncheckedUpdateWithoutVotesInput>
  }

  export type MatterUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<MatterCreateWithoutVotesInput, MatterUncheckedCreateWithoutVotesInput>
    connectOrCreate?: MatterCreateOrConnectWithoutVotesInput
    upsert?: MatterUpsertWithoutVotesInput
    connect?: MatterWhereUniqueInput
    update?: XOR<XOR<MatterUpdateToOneWithWhereWithoutVotesInput, MatterUpdateWithoutVotesInput>, MatterUncheckedUpdateWithoutVotesInput>
  }

  export type SupervisorUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<SupervisorCreateWithoutVotesInput, SupervisorUncheckedCreateWithoutVotesInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutVotesInput
    upsert?: SupervisorUpsertWithoutVotesInput
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutVotesInput, SupervisorUpdateWithoutVotesInput>, SupervisorUncheckedUpdateWithoutVotesInput>
  }

  export type MatterCreateNestedOneWithoutSponsorshipsInput = {
    create?: XOR<MatterCreateWithoutSponsorshipsInput, MatterUncheckedCreateWithoutSponsorshipsInput>
    connectOrCreate?: MatterCreateOrConnectWithoutSponsorshipsInput
    connect?: MatterWhereUniqueInput
  }

  export type SupervisorCreateNestedOneWithoutSponsorshipsInput = {
    create?: XOR<SupervisorCreateWithoutSponsorshipsInput, SupervisorUncheckedCreateWithoutSponsorshipsInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutSponsorshipsInput
    connect?: SupervisorWhereUniqueInput
  }

  export type MatterUpdateOneRequiredWithoutSponsorshipsNestedInput = {
    create?: XOR<MatterCreateWithoutSponsorshipsInput, MatterUncheckedCreateWithoutSponsorshipsInput>
    connectOrCreate?: MatterCreateOrConnectWithoutSponsorshipsInput
    upsert?: MatterUpsertWithoutSponsorshipsInput
    connect?: MatterWhereUniqueInput
    update?: XOR<XOR<MatterUpdateToOneWithWhereWithoutSponsorshipsInput, MatterUpdateWithoutSponsorshipsInput>, MatterUncheckedUpdateWithoutSponsorshipsInput>
  }

  export type SupervisorUpdateOneRequiredWithoutSponsorshipsNestedInput = {
    create?: XOR<SupervisorCreateWithoutSponsorshipsInput, SupervisorUncheckedCreateWithoutSponsorshipsInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutSponsorshipsInput
    upsert?: SupervisorUpsertWithoutSponsorshipsInput
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutSponsorshipsInput, SupervisorUpdateWithoutSponsorshipsInput>, SupervisorUncheckedUpdateWithoutSponsorshipsInput>
  }

  export type MatterTopicCreateNestedManyWithoutTopicInput = {
    create?: XOR<MatterTopicCreateWithoutTopicInput, MatterTopicUncheckedCreateWithoutTopicInput> | MatterTopicCreateWithoutTopicInput[] | MatterTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: MatterTopicCreateOrConnectWithoutTopicInput | MatterTopicCreateOrConnectWithoutTopicInput[]
    createMany?: MatterTopicCreateManyTopicInputEnvelope
    connect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
  }

  export type MatterTopicUncheckedCreateNestedManyWithoutTopicInput = {
    create?: XOR<MatterTopicCreateWithoutTopicInput, MatterTopicUncheckedCreateWithoutTopicInput> | MatterTopicCreateWithoutTopicInput[] | MatterTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: MatterTopicCreateOrConnectWithoutTopicInput | MatterTopicCreateOrConnectWithoutTopicInput[]
    createMany?: MatterTopicCreateManyTopicInputEnvelope
    connect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
  }

  export type MatterTopicUpdateManyWithoutTopicNestedInput = {
    create?: XOR<MatterTopicCreateWithoutTopicInput, MatterTopicUncheckedCreateWithoutTopicInput> | MatterTopicCreateWithoutTopicInput[] | MatterTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: MatterTopicCreateOrConnectWithoutTopicInput | MatterTopicCreateOrConnectWithoutTopicInput[]
    upsert?: MatterTopicUpsertWithWhereUniqueWithoutTopicInput | MatterTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: MatterTopicCreateManyTopicInputEnvelope
    set?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    disconnect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    delete?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    connect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    update?: MatterTopicUpdateWithWhereUniqueWithoutTopicInput | MatterTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: MatterTopicUpdateManyWithWhereWithoutTopicInput | MatterTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: MatterTopicScalarWhereInput | MatterTopicScalarWhereInput[]
  }

  export type MatterTopicUncheckedUpdateManyWithoutTopicNestedInput = {
    create?: XOR<MatterTopicCreateWithoutTopicInput, MatterTopicUncheckedCreateWithoutTopicInput> | MatterTopicCreateWithoutTopicInput[] | MatterTopicUncheckedCreateWithoutTopicInput[]
    connectOrCreate?: MatterTopicCreateOrConnectWithoutTopicInput | MatterTopicCreateOrConnectWithoutTopicInput[]
    upsert?: MatterTopicUpsertWithWhereUniqueWithoutTopicInput | MatterTopicUpsertWithWhereUniqueWithoutTopicInput[]
    createMany?: MatterTopicCreateManyTopicInputEnvelope
    set?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    disconnect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    delete?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    connect?: MatterTopicWhereUniqueInput | MatterTopicWhereUniqueInput[]
    update?: MatterTopicUpdateWithWhereUniqueWithoutTopicInput | MatterTopicUpdateWithWhereUniqueWithoutTopicInput[]
    updateMany?: MatterTopicUpdateManyWithWhereWithoutTopicInput | MatterTopicUpdateManyWithWhereWithoutTopicInput[]
    deleteMany?: MatterTopicScalarWhereInput | MatterTopicScalarWhereInput[]
  }

  export type MatterCreateNestedOneWithoutTopicsInput = {
    create?: XOR<MatterCreateWithoutTopicsInput, MatterUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: MatterCreateOrConnectWithoutTopicsInput
    connect?: MatterWhereUniqueInput
  }

  export type TopicCreateNestedOneWithoutMattersInput = {
    create?: XOR<TopicCreateWithoutMattersInput, TopicUncheckedCreateWithoutMattersInput>
    connectOrCreate?: TopicCreateOrConnectWithoutMattersInput
    connect?: TopicWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatterUpdateOneRequiredWithoutTopicsNestedInput = {
    create?: XOR<MatterCreateWithoutTopicsInput, MatterUncheckedCreateWithoutTopicsInput>
    connectOrCreate?: MatterCreateOrConnectWithoutTopicsInput
    upsert?: MatterUpsertWithoutTopicsInput
    connect?: MatterWhereUniqueInput
    update?: XOR<XOR<MatterUpdateToOneWithWhereWithoutTopicsInput, MatterUpdateWithoutTopicsInput>, MatterUncheckedUpdateWithoutTopicsInput>
  }

  export type TopicUpdateOneRequiredWithoutMattersNestedInput = {
    create?: XOR<TopicCreateWithoutMattersInput, TopicUncheckedCreateWithoutMattersInput>
    connectOrCreate?: TopicCreateOrConnectWithoutMattersInput
    upsert?: TopicUpsertWithoutMattersInput
    connect?: TopicWhereUniqueInput
    update?: XOR<XOR<TopicUpdateToOneWithWhereWithoutMattersInput, TopicUpdateWithoutMattersInput>, TopicUncheckedUpdateWithoutMattersInput>
  }

  export type SupervisorCreateNestedOneWithoutStatsInput = {
    create?: XOR<SupervisorCreateWithoutStatsInput, SupervisorUncheckedCreateWithoutStatsInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutStatsInput
    connect?: SupervisorWhereUniqueInput
  }

  export type SupervisorUpdateOneRequiredWithoutStatsNestedInput = {
    create?: XOR<SupervisorCreateWithoutStatsInput, SupervisorUncheckedCreateWithoutStatsInput>
    connectOrCreate?: SupervisorCreateOrConnectWithoutStatsInput
    upsert?: SupervisorUpsertWithoutStatsInput
    connect?: SupervisorWhereUniqueInput
    update?: XOR<XOR<SupervisorUpdateToOneWithWhereWithoutStatsInput, SupervisorUpdateWithoutStatsInput>, SupervisorUncheckedUpdateWithoutStatsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type VoteCreateWithoutSupervisorInput = {
    value: string
    createdAt?: Date | string
    action: ActionCreateNestedOneWithoutVotesInput
    matter: MatterCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutSupervisorInput = {
    id?: number
    value: string
    actionId: number
    matterId: number
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutSupervisorInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutSupervisorInput, VoteUncheckedCreateWithoutSupervisorInput>
  }

  export type VoteCreateManySupervisorInputEnvelope = {
    data: VoteCreateManySupervisorInput | VoteCreateManySupervisorInput[]
  }

  export type SponsorshipCreateWithoutSupervisorInput = {
    role?: string
    matter: MatterCreateNestedOneWithoutSponsorshipsInput
  }

  export type SponsorshipUncheckedCreateWithoutSupervisorInput = {
    id?: number
    role?: string
    matterId: number
  }

  export type SponsorshipCreateOrConnectWithoutSupervisorInput = {
    where: SponsorshipWhereUniqueInput
    create: XOR<SponsorshipCreateWithoutSupervisorInput, SponsorshipUncheckedCreateWithoutSupervisorInput>
  }

  export type SponsorshipCreateManySupervisorInputEnvelope = {
    data: SponsorshipCreateManySupervisorInput | SponsorshipCreateManySupervisorInput[]
  }

  export type SupervisorStatCreateWithoutSupervisorInput = {
    totalVotes?: number
    ayes?: number
    noes?: number
    absences?: number
    attendanceRate?: number
    dissentRate?: number
    sponsored?: number
    cosponsored?: number
    passedSponsored?: number
    impactScore?: number
    activityScore?: number
    independence?: number
    overallScore?: number
    rank?: number | null
    grade?: string | null
    topTopicsJson?: string | null
    updatedAt?: Date | string
  }

  export type SupervisorStatUncheckedCreateWithoutSupervisorInput = {
    totalVotes?: number
    ayes?: number
    noes?: number
    absences?: number
    attendanceRate?: number
    dissentRate?: number
    sponsored?: number
    cosponsored?: number
    passedSponsored?: number
    impactScore?: number
    activityScore?: number
    independence?: number
    overallScore?: number
    rank?: number | null
    grade?: string | null
    topTopicsJson?: string | null
    updatedAt?: Date | string
  }

  export type SupervisorStatCreateOrConnectWithoutSupervisorInput = {
    where: SupervisorStatWhereUniqueInput
    create: XOR<SupervisorStatCreateWithoutSupervisorInput, SupervisorStatUncheckedCreateWithoutSupervisorInput>
  }

  export type VoteUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutSupervisorInput, VoteUncheckedUpdateWithoutSupervisorInput>
    create: XOR<VoteCreateWithoutSupervisorInput, VoteUncheckedCreateWithoutSupervisorInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutSupervisorInput, VoteUncheckedUpdateWithoutSupervisorInput>
  }

  export type VoteUpdateManyWithWhereWithoutSupervisorInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: IntFilter<"Vote"> | number
    value?: StringFilter<"Vote"> | string
    actionId?: IntFilter<"Vote"> | number
    matterId?: IntFilter<"Vote"> | number
    supervisorId?: IntFilter<"Vote"> | number
    createdAt?: DateTimeFilter<"Vote"> | Date | string
  }

  export type SponsorshipUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: SponsorshipWhereUniqueInput
    update: XOR<SponsorshipUpdateWithoutSupervisorInput, SponsorshipUncheckedUpdateWithoutSupervisorInput>
    create: XOR<SponsorshipCreateWithoutSupervisorInput, SponsorshipUncheckedCreateWithoutSupervisorInput>
  }

  export type SponsorshipUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: SponsorshipWhereUniqueInput
    data: XOR<SponsorshipUpdateWithoutSupervisorInput, SponsorshipUncheckedUpdateWithoutSupervisorInput>
  }

  export type SponsorshipUpdateManyWithWhereWithoutSupervisorInput = {
    where: SponsorshipScalarWhereInput
    data: XOR<SponsorshipUpdateManyMutationInput, SponsorshipUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type SponsorshipScalarWhereInput = {
    AND?: SponsorshipScalarWhereInput | SponsorshipScalarWhereInput[]
    OR?: SponsorshipScalarWhereInput[]
    NOT?: SponsorshipScalarWhereInput | SponsorshipScalarWhereInput[]
    id?: IntFilter<"Sponsorship"> | number
    role?: StringFilter<"Sponsorship"> | string
    matterId?: IntFilter<"Sponsorship"> | number
    supervisorId?: IntFilter<"Sponsorship"> | number
  }

  export type SupervisorStatUpsertWithoutSupervisorInput = {
    update: XOR<SupervisorStatUpdateWithoutSupervisorInput, SupervisorStatUncheckedUpdateWithoutSupervisorInput>
    create: XOR<SupervisorStatCreateWithoutSupervisorInput, SupervisorStatUncheckedCreateWithoutSupervisorInput>
    where?: SupervisorStatWhereInput
  }

  export type SupervisorStatUpdateToOneWithWhereWithoutSupervisorInput = {
    where?: SupervisorStatWhereInput
    data: XOR<SupervisorStatUpdateWithoutSupervisorInput, SupervisorStatUncheckedUpdateWithoutSupervisorInput>
  }

  export type SupervisorStatUpdateWithoutSupervisorInput = {
    totalVotes?: IntFieldUpdateOperationsInput | number
    ayes?: IntFieldUpdateOperationsInput | number
    noes?: IntFieldUpdateOperationsInput | number
    absences?: IntFieldUpdateOperationsInput | number
    attendanceRate?: FloatFieldUpdateOperationsInput | number
    dissentRate?: FloatFieldUpdateOperationsInput | number
    sponsored?: IntFieldUpdateOperationsInput | number
    cosponsored?: IntFieldUpdateOperationsInput | number
    passedSponsored?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    activityScore?: FloatFieldUpdateOperationsInput | number
    independence?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    topTopicsJson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupervisorStatUncheckedUpdateWithoutSupervisorInput = {
    totalVotes?: IntFieldUpdateOperationsInput | number
    ayes?: IntFieldUpdateOperationsInput | number
    noes?: IntFieldUpdateOperationsInput | number
    absences?: IntFieldUpdateOperationsInput | number
    attendanceRate?: FloatFieldUpdateOperationsInput | number
    dissentRate?: FloatFieldUpdateOperationsInput | number
    sponsored?: IntFieldUpdateOperationsInput | number
    cosponsored?: IntFieldUpdateOperationsInput | number
    passedSponsored?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    activityScore?: FloatFieldUpdateOperationsInput | number
    independence?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    topTopicsJson?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatterTopicCreateWithoutMatterInput = {
    weight?: number
    topic: TopicCreateNestedOneWithoutMattersInput
  }

  export type MatterTopicUncheckedCreateWithoutMatterInput = {
    topicId: number
    weight?: number
  }

  export type MatterTopicCreateOrConnectWithoutMatterInput = {
    where: MatterTopicWhereUniqueInput
    create: XOR<MatterTopicCreateWithoutMatterInput, MatterTopicUncheckedCreateWithoutMatterInput>
  }

  export type MatterTopicCreateManyMatterInputEnvelope = {
    data: MatterTopicCreateManyMatterInput | MatterTopicCreateManyMatterInput[]
  }

  export type VoteCreateWithoutMatterInput = {
    value: string
    createdAt?: Date | string
    action: ActionCreateNestedOneWithoutVotesInput
    supervisor: SupervisorCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutMatterInput = {
    id?: number
    value: string
    actionId: number
    supervisorId: number
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutMatterInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutMatterInput, VoteUncheckedCreateWithoutMatterInput>
  }

  export type VoteCreateManyMatterInputEnvelope = {
    data: VoteCreateManyMatterInput | VoteCreateManyMatterInput[]
  }

  export type ActionCreateWithoutMatterInput = {
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meeting?: MeetingCreateNestedOneWithoutActionsInput
    votes?: VoteCreateNestedManyWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutMatterInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    meetingId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutMatterInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutMatterInput, ActionUncheckedCreateWithoutMatterInput>
  }

  export type ActionCreateManyMatterInputEnvelope = {
    data: ActionCreateManyMatterInput | ActionCreateManyMatterInput[]
  }

  export type SponsorshipCreateWithoutMatterInput = {
    role?: string
    supervisor: SupervisorCreateNestedOneWithoutSponsorshipsInput
  }

  export type SponsorshipUncheckedCreateWithoutMatterInput = {
    id?: number
    role?: string
    supervisorId: number
  }

  export type SponsorshipCreateOrConnectWithoutMatterInput = {
    where: SponsorshipWhereUniqueInput
    create: XOR<SponsorshipCreateWithoutMatterInput, SponsorshipUncheckedCreateWithoutMatterInput>
  }

  export type SponsorshipCreateManyMatterInputEnvelope = {
    data: SponsorshipCreateManyMatterInput | SponsorshipCreateManyMatterInput[]
  }

  export type MatterAttachmentCreateWithoutMatterInput = {
    name: string
    url?: string | null
  }

  export type MatterAttachmentUncheckedCreateWithoutMatterInput = {
    id?: number
    name: string
    url?: string | null
  }

  export type MatterAttachmentCreateOrConnectWithoutMatterInput = {
    where: MatterAttachmentWhereUniqueInput
    create: XOR<MatterAttachmentCreateWithoutMatterInput, MatterAttachmentUncheckedCreateWithoutMatterInput>
  }

  export type MatterAttachmentCreateManyMatterInputEnvelope = {
    data: MatterAttachmentCreateManyMatterInput | MatterAttachmentCreateManyMatterInput[]
  }

  export type MatterRelationCreateWithoutFromInput = {
    toFile: string
    to?: MatterCreateNestedOneWithoutRelationsToInput
  }

  export type MatterRelationUncheckedCreateWithoutFromInput = {
    id?: number
    toFile: string
    toLegistarId?: number | null
  }

  export type MatterRelationCreateOrConnectWithoutFromInput = {
    where: MatterRelationWhereUniqueInput
    create: XOR<MatterRelationCreateWithoutFromInput, MatterRelationUncheckedCreateWithoutFromInput>
  }

  export type MatterRelationCreateManyFromInputEnvelope = {
    data: MatterRelationCreateManyFromInput | MatterRelationCreateManyFromInput[]
  }

  export type MatterRelationCreateWithoutToInput = {
    toFile: string
    from: MatterCreateNestedOneWithoutRelationsFromInput
  }

  export type MatterRelationUncheckedCreateWithoutToInput = {
    id?: number
    fromId: number
    toFile: string
  }

  export type MatterRelationCreateOrConnectWithoutToInput = {
    where: MatterRelationWhereUniqueInput
    create: XOR<MatterRelationCreateWithoutToInput, MatterRelationUncheckedCreateWithoutToInput>
  }

  export type MatterRelationCreateManyToInputEnvelope = {
    data: MatterRelationCreateManyToInput | MatterRelationCreateManyToInput[]
  }

  export type MatterTopicUpsertWithWhereUniqueWithoutMatterInput = {
    where: MatterTopicWhereUniqueInput
    update: XOR<MatterTopicUpdateWithoutMatterInput, MatterTopicUncheckedUpdateWithoutMatterInput>
    create: XOR<MatterTopicCreateWithoutMatterInput, MatterTopicUncheckedCreateWithoutMatterInput>
  }

  export type MatterTopicUpdateWithWhereUniqueWithoutMatterInput = {
    where: MatterTopicWhereUniqueInput
    data: XOR<MatterTopicUpdateWithoutMatterInput, MatterTopicUncheckedUpdateWithoutMatterInput>
  }

  export type MatterTopicUpdateManyWithWhereWithoutMatterInput = {
    where: MatterTopicScalarWhereInput
    data: XOR<MatterTopicUpdateManyMutationInput, MatterTopicUncheckedUpdateManyWithoutMatterInput>
  }

  export type MatterTopicScalarWhereInput = {
    AND?: MatterTopicScalarWhereInput | MatterTopicScalarWhereInput[]
    OR?: MatterTopicScalarWhereInput[]
    NOT?: MatterTopicScalarWhereInput | MatterTopicScalarWhereInput[]
    matterId?: IntFilter<"MatterTopic"> | number
    topicId?: IntFilter<"MatterTopic"> | number
    weight?: FloatFilter<"MatterTopic"> | number
  }

  export type VoteUpsertWithWhereUniqueWithoutMatterInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutMatterInput, VoteUncheckedUpdateWithoutMatterInput>
    create: XOR<VoteCreateWithoutMatterInput, VoteUncheckedCreateWithoutMatterInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutMatterInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutMatterInput, VoteUncheckedUpdateWithoutMatterInput>
  }

  export type VoteUpdateManyWithWhereWithoutMatterInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutMatterInput>
  }

  export type ActionUpsertWithWhereUniqueWithoutMatterInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutMatterInput, ActionUncheckedUpdateWithoutMatterInput>
    create: XOR<ActionCreateWithoutMatterInput, ActionUncheckedCreateWithoutMatterInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutMatterInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutMatterInput, ActionUncheckedUpdateWithoutMatterInput>
  }

  export type ActionUpdateManyWithWhereWithoutMatterInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutMatterInput>
  }

  export type ActionScalarWhereInput = {
    AND?: ActionScalarWhereInput | ActionScalarWhereInput[]
    OR?: ActionScalarWhereInput[]
    NOT?: ActionScalarWhereInput | ActionScalarWhereInput[]
    id?: IntFilter<"Action"> | number
    legistarId?: IntFilter<"Action"> | number
    legistarGuid?: StringNullableFilter<"Action"> | string | null
    date?: DateTimeNullableFilter<"Action"> | Date | string | null
    actionText?: StringNullableFilter<"Action"> | string | null
    result?: StringNullableFilter<"Action"> | string | null
    bodyName?: StringNullableFilter<"Action"> | string | null
    matterId?: IntFilter<"Action"> | number
    meetingId?: IntNullableFilter<"Action"> | number | null
    createdAt?: DateTimeFilter<"Action"> | Date | string
    updatedAt?: DateTimeFilter<"Action"> | Date | string
  }

  export type SponsorshipUpsertWithWhereUniqueWithoutMatterInput = {
    where: SponsorshipWhereUniqueInput
    update: XOR<SponsorshipUpdateWithoutMatterInput, SponsorshipUncheckedUpdateWithoutMatterInput>
    create: XOR<SponsorshipCreateWithoutMatterInput, SponsorshipUncheckedCreateWithoutMatterInput>
  }

  export type SponsorshipUpdateWithWhereUniqueWithoutMatterInput = {
    where: SponsorshipWhereUniqueInput
    data: XOR<SponsorshipUpdateWithoutMatterInput, SponsorshipUncheckedUpdateWithoutMatterInput>
  }

  export type SponsorshipUpdateManyWithWhereWithoutMatterInput = {
    where: SponsorshipScalarWhereInput
    data: XOR<SponsorshipUpdateManyMutationInput, SponsorshipUncheckedUpdateManyWithoutMatterInput>
  }

  export type MatterAttachmentUpsertWithWhereUniqueWithoutMatterInput = {
    where: MatterAttachmentWhereUniqueInput
    update: XOR<MatterAttachmentUpdateWithoutMatterInput, MatterAttachmentUncheckedUpdateWithoutMatterInput>
    create: XOR<MatterAttachmentCreateWithoutMatterInput, MatterAttachmentUncheckedCreateWithoutMatterInput>
  }

  export type MatterAttachmentUpdateWithWhereUniqueWithoutMatterInput = {
    where: MatterAttachmentWhereUniqueInput
    data: XOR<MatterAttachmentUpdateWithoutMatterInput, MatterAttachmentUncheckedUpdateWithoutMatterInput>
  }

  export type MatterAttachmentUpdateManyWithWhereWithoutMatterInput = {
    where: MatterAttachmentScalarWhereInput
    data: XOR<MatterAttachmentUpdateManyMutationInput, MatterAttachmentUncheckedUpdateManyWithoutMatterInput>
  }

  export type MatterAttachmentScalarWhereInput = {
    AND?: MatterAttachmentScalarWhereInput | MatterAttachmentScalarWhereInput[]
    OR?: MatterAttachmentScalarWhereInput[]
    NOT?: MatterAttachmentScalarWhereInput | MatterAttachmentScalarWhereInput[]
    id?: IntFilter<"MatterAttachment"> | number
    matterId?: IntFilter<"MatterAttachment"> | number
    name?: StringFilter<"MatterAttachment"> | string
    url?: StringNullableFilter<"MatterAttachment"> | string | null
  }

  export type MatterRelationUpsertWithWhereUniqueWithoutFromInput = {
    where: MatterRelationWhereUniqueInput
    update: XOR<MatterRelationUpdateWithoutFromInput, MatterRelationUncheckedUpdateWithoutFromInput>
    create: XOR<MatterRelationCreateWithoutFromInput, MatterRelationUncheckedCreateWithoutFromInput>
  }

  export type MatterRelationUpdateWithWhereUniqueWithoutFromInput = {
    where: MatterRelationWhereUniqueInput
    data: XOR<MatterRelationUpdateWithoutFromInput, MatterRelationUncheckedUpdateWithoutFromInput>
  }

  export type MatterRelationUpdateManyWithWhereWithoutFromInput = {
    where: MatterRelationScalarWhereInput
    data: XOR<MatterRelationUpdateManyMutationInput, MatterRelationUncheckedUpdateManyWithoutFromInput>
  }

  export type MatterRelationScalarWhereInput = {
    AND?: MatterRelationScalarWhereInput | MatterRelationScalarWhereInput[]
    OR?: MatterRelationScalarWhereInput[]
    NOT?: MatterRelationScalarWhereInput | MatterRelationScalarWhereInput[]
    id?: IntFilter<"MatterRelation"> | number
    fromId?: IntFilter<"MatterRelation"> | number
    toFile?: StringFilter<"MatterRelation"> | string
    toLegistarId?: IntNullableFilter<"MatterRelation"> | number | null
  }

  export type MatterRelationUpsertWithWhereUniqueWithoutToInput = {
    where: MatterRelationWhereUniqueInput
    update: XOR<MatterRelationUpdateWithoutToInput, MatterRelationUncheckedUpdateWithoutToInput>
    create: XOR<MatterRelationCreateWithoutToInput, MatterRelationUncheckedCreateWithoutToInput>
  }

  export type MatterRelationUpdateWithWhereUniqueWithoutToInput = {
    where: MatterRelationWhereUniqueInput
    data: XOR<MatterRelationUpdateWithoutToInput, MatterRelationUncheckedUpdateWithoutToInput>
  }

  export type MatterRelationUpdateManyWithWhereWithoutToInput = {
    where: MatterRelationScalarWhereInput
    data: XOR<MatterRelationUpdateManyMutationInput, MatterRelationUncheckedUpdateManyWithoutToInput>
  }

  export type MatterCreateWithoutAttachmentsInput = {
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicCreateNestedManyWithoutMatterInput
    votes?: VoteCreateNestedManyWithoutMatterInput
    actions?: ActionCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationCreateNestedManyWithoutToInput
  }

  export type MatterUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicUncheckedCreateNestedManyWithoutMatterInput
    votes?: VoteUncheckedCreateNestedManyWithoutMatterInput
    actions?: ActionUncheckedCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationUncheckedCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type MatterCreateOrConnectWithoutAttachmentsInput = {
    where: MatterWhereUniqueInput
    create: XOR<MatterCreateWithoutAttachmentsInput, MatterUncheckedCreateWithoutAttachmentsInput>
  }

  export type MatterUpsertWithoutAttachmentsInput = {
    update: XOR<MatterUpdateWithoutAttachmentsInput, MatterUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<MatterCreateWithoutAttachmentsInput, MatterUncheckedCreateWithoutAttachmentsInput>
    where?: MatterWhereInput
  }

  export type MatterUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: MatterWhereInput
    data: XOR<MatterUpdateWithoutAttachmentsInput, MatterUncheckedUpdateWithoutAttachmentsInput>
  }

  export type MatterUpdateWithoutAttachmentsInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUpdateManyWithoutMatterNestedInput
    votes?: VoteUpdateManyWithoutMatterNestedInput
    actions?: ActionUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUpdateManyWithoutToNestedInput
  }

  export type MatterUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUncheckedUpdateManyWithoutMatterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutMatterNestedInput
    actions?: ActionUncheckedUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUncheckedUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type MatterCreateWithoutRelationsFromInput = {
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicCreateNestedManyWithoutMatterInput
    votes?: VoteCreateNestedManyWithoutMatterInput
    actions?: ActionCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentCreateNestedManyWithoutMatterInput
    relationsTo?: MatterRelationCreateNestedManyWithoutToInput
  }

  export type MatterUncheckedCreateWithoutRelationsFromInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicUncheckedCreateNestedManyWithoutMatterInput
    votes?: VoteUncheckedCreateNestedManyWithoutMatterInput
    actions?: ActionUncheckedCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentUncheckedCreateNestedManyWithoutMatterInput
    relationsTo?: MatterRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type MatterCreateOrConnectWithoutRelationsFromInput = {
    where: MatterWhereUniqueInput
    create: XOR<MatterCreateWithoutRelationsFromInput, MatterUncheckedCreateWithoutRelationsFromInput>
  }

  export type MatterCreateWithoutRelationsToInput = {
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicCreateNestedManyWithoutMatterInput
    votes?: VoteCreateNestedManyWithoutMatterInput
    actions?: ActionCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationCreateNestedManyWithoutFromInput
  }

  export type MatterUncheckedCreateWithoutRelationsToInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicUncheckedCreateNestedManyWithoutMatterInput
    votes?: VoteUncheckedCreateNestedManyWithoutMatterInput
    actions?: ActionUncheckedCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentUncheckedCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationUncheckedCreateNestedManyWithoutFromInput
  }

  export type MatterCreateOrConnectWithoutRelationsToInput = {
    where: MatterWhereUniqueInput
    create: XOR<MatterCreateWithoutRelationsToInput, MatterUncheckedCreateWithoutRelationsToInput>
  }

  export type MatterUpsertWithoutRelationsFromInput = {
    update: XOR<MatterUpdateWithoutRelationsFromInput, MatterUncheckedUpdateWithoutRelationsFromInput>
    create: XOR<MatterCreateWithoutRelationsFromInput, MatterUncheckedCreateWithoutRelationsFromInput>
    where?: MatterWhereInput
  }

  export type MatterUpdateToOneWithWhereWithoutRelationsFromInput = {
    where?: MatterWhereInput
    data: XOR<MatterUpdateWithoutRelationsFromInput, MatterUncheckedUpdateWithoutRelationsFromInput>
  }

  export type MatterUpdateWithoutRelationsFromInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUpdateManyWithoutMatterNestedInput
    votes?: VoteUpdateManyWithoutMatterNestedInput
    actions?: ActionUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUpdateManyWithoutMatterNestedInput
    relationsTo?: MatterRelationUpdateManyWithoutToNestedInput
  }

  export type MatterUncheckedUpdateWithoutRelationsFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUncheckedUpdateManyWithoutMatterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutMatterNestedInput
    actions?: ActionUncheckedUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUncheckedUpdateManyWithoutMatterNestedInput
    relationsTo?: MatterRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type MatterUpsertWithoutRelationsToInput = {
    update: XOR<MatterUpdateWithoutRelationsToInput, MatterUncheckedUpdateWithoutRelationsToInput>
    create: XOR<MatterCreateWithoutRelationsToInput, MatterUncheckedCreateWithoutRelationsToInput>
    where?: MatterWhereInput
  }

  export type MatterUpdateToOneWithWhereWithoutRelationsToInput = {
    where?: MatterWhereInput
    data: XOR<MatterUpdateWithoutRelationsToInput, MatterUncheckedUpdateWithoutRelationsToInput>
  }

  export type MatterUpdateWithoutRelationsToInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUpdateManyWithoutMatterNestedInput
    votes?: VoteUpdateManyWithoutMatterNestedInput
    actions?: ActionUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUpdateManyWithoutFromNestedInput
  }

  export type MatterUncheckedUpdateWithoutRelationsToInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUncheckedUpdateManyWithoutMatterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutMatterNestedInput
    actions?: ActionUncheckedUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUncheckedUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUncheckedUpdateManyWithoutFromNestedInput
  }

  export type ActionCreateWithoutMeetingInput = {
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matter: MatterCreateNestedOneWithoutActionsInput
    votes?: VoteCreateNestedManyWithoutActionInput
  }

  export type ActionUncheckedCreateWithoutMeetingInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    matterId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutActionInput
  }

  export type ActionCreateOrConnectWithoutMeetingInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutMeetingInput, ActionUncheckedCreateWithoutMeetingInput>
  }

  export type ActionCreateManyMeetingInputEnvelope = {
    data: ActionCreateManyMeetingInput | ActionCreateManyMeetingInput[]
  }

  export type ActionUpsertWithWhereUniqueWithoutMeetingInput = {
    where: ActionWhereUniqueInput
    update: XOR<ActionUpdateWithoutMeetingInput, ActionUncheckedUpdateWithoutMeetingInput>
    create: XOR<ActionCreateWithoutMeetingInput, ActionUncheckedCreateWithoutMeetingInput>
  }

  export type ActionUpdateWithWhereUniqueWithoutMeetingInput = {
    where: ActionWhereUniqueInput
    data: XOR<ActionUpdateWithoutMeetingInput, ActionUncheckedUpdateWithoutMeetingInput>
  }

  export type ActionUpdateManyWithWhereWithoutMeetingInput = {
    where: ActionScalarWhereInput
    data: XOR<ActionUpdateManyMutationInput, ActionUncheckedUpdateManyWithoutMeetingInput>
  }

  export type MatterCreateWithoutActionsInput = {
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicCreateNestedManyWithoutMatterInput
    votes?: VoteCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationCreateNestedManyWithoutToInput
  }

  export type MatterUncheckedCreateWithoutActionsInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicUncheckedCreateNestedManyWithoutMatterInput
    votes?: VoteUncheckedCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentUncheckedCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationUncheckedCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type MatterCreateOrConnectWithoutActionsInput = {
    where: MatterWhereUniqueInput
    create: XOR<MatterCreateWithoutActionsInput, MatterUncheckedCreateWithoutActionsInput>
  }

  export type MeetingCreateWithoutActionsInput = {
    legistarId: number
    legistarGuid?: string | null
    bodyName: string
    date?: Date | string | null
    location?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingUncheckedCreateWithoutActionsInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    bodyName: string
    date?: Date | string | null
    location?: string | null
    sourceUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MeetingCreateOrConnectWithoutActionsInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutActionsInput, MeetingUncheckedCreateWithoutActionsInput>
  }

  export type VoteCreateWithoutActionInput = {
    value: string
    createdAt?: Date | string
    matter: MatterCreateNestedOneWithoutVotesInput
    supervisor: SupervisorCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateWithoutActionInput = {
    id?: number
    value: string
    matterId: number
    supervisorId: number
    createdAt?: Date | string
  }

  export type VoteCreateOrConnectWithoutActionInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutActionInput, VoteUncheckedCreateWithoutActionInput>
  }

  export type VoteCreateManyActionInputEnvelope = {
    data: VoteCreateManyActionInput | VoteCreateManyActionInput[]
  }

  export type MatterUpsertWithoutActionsInput = {
    update: XOR<MatterUpdateWithoutActionsInput, MatterUncheckedUpdateWithoutActionsInput>
    create: XOR<MatterCreateWithoutActionsInput, MatterUncheckedCreateWithoutActionsInput>
    where?: MatterWhereInput
  }

  export type MatterUpdateToOneWithWhereWithoutActionsInput = {
    where?: MatterWhereInput
    data: XOR<MatterUpdateWithoutActionsInput, MatterUncheckedUpdateWithoutActionsInput>
  }

  export type MatterUpdateWithoutActionsInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUpdateManyWithoutMatterNestedInput
    votes?: VoteUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUpdateManyWithoutToNestedInput
  }

  export type MatterUncheckedUpdateWithoutActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUncheckedUpdateManyWithoutMatterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUncheckedUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUncheckedUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type MeetingUpsertWithoutActionsInput = {
    update: XOR<MeetingUpdateWithoutActionsInput, MeetingUncheckedUpdateWithoutActionsInput>
    create: XOR<MeetingCreateWithoutActionsInput, MeetingUncheckedCreateWithoutActionsInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutActionsInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutActionsInput, MeetingUncheckedUpdateWithoutActionsInput>
  }

  export type MeetingUpdateWithoutActionsInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetingUncheckedUpdateWithoutActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: StringFieldUpdateOperationsInput | string
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutActionInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutActionInput, VoteUncheckedUpdateWithoutActionInput>
    create: XOR<VoteCreateWithoutActionInput, VoteUncheckedCreateWithoutActionInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutActionInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutActionInput, VoteUncheckedUpdateWithoutActionInput>
  }

  export type VoteUpdateManyWithWhereWithoutActionInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutActionInput>
  }

  export type ActionCreateWithoutVotesInput = {
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matter: MatterCreateNestedOneWithoutActionsInput
    meeting?: MeetingCreateNestedOneWithoutActionsInput
  }

  export type ActionUncheckedCreateWithoutVotesInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    matterId: number
    meetingId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActionCreateOrConnectWithoutVotesInput = {
    where: ActionWhereUniqueInput
    create: XOR<ActionCreateWithoutVotesInput, ActionUncheckedCreateWithoutVotesInput>
  }

  export type MatterCreateWithoutVotesInput = {
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicCreateNestedManyWithoutMatterInput
    actions?: ActionCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationCreateNestedManyWithoutToInput
  }

  export type MatterUncheckedCreateWithoutVotesInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicUncheckedCreateNestedManyWithoutMatterInput
    actions?: ActionUncheckedCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentUncheckedCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationUncheckedCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type MatterCreateOrConnectWithoutVotesInput = {
    where: MatterWhereUniqueInput
    create: XOR<MatterCreateWithoutVotesInput, MatterUncheckedCreateWithoutVotesInput>
  }

  export type SupervisorCreateWithoutVotesInput = {
    legistarId?: number | null
    slug: string
    fullName: string
    district?: number | null
    title?: string | null
    party?: string | null
    active?: boolean
    photoUrl?: string | null
    bio?: string | null
    email?: string | null
    website?: string | null
    termStart?: Date | string | null
    termEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sponsorships?: SponsorshipCreateNestedManyWithoutSupervisorInput
    stats?: SupervisorStatCreateNestedOneWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutVotesInput = {
    id?: number
    legistarId?: number | null
    slug: string
    fullName: string
    district?: number | null
    title?: string | null
    party?: string | null
    active?: boolean
    photoUrl?: string | null
    bio?: string | null
    email?: string | null
    website?: string | null
    termStart?: Date | string | null
    termEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutSupervisorInput
    stats?: SupervisorStatUncheckedCreateNestedOneWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutVotesInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutVotesInput, SupervisorUncheckedCreateWithoutVotesInput>
  }

  export type ActionUpsertWithoutVotesInput = {
    update: XOR<ActionUpdateWithoutVotesInput, ActionUncheckedUpdateWithoutVotesInput>
    create: XOR<ActionCreateWithoutVotesInput, ActionUncheckedCreateWithoutVotesInput>
    where?: ActionWhereInput
  }

  export type ActionUpdateToOneWithWhereWithoutVotesInput = {
    where?: ActionWhereInput
    data: XOR<ActionUpdateWithoutVotesInput, ActionUncheckedUpdateWithoutVotesInput>
  }

  export type ActionUpdateWithoutVotesInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matter?: MatterUpdateOneRequiredWithoutActionsNestedInput
    meeting?: MeetingUpdateOneWithoutActionsNestedInput
  }

  export type ActionUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    matterId?: IntFieldUpdateOperationsInput | number
    meetingId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatterUpsertWithoutVotesInput = {
    update: XOR<MatterUpdateWithoutVotesInput, MatterUncheckedUpdateWithoutVotesInput>
    create: XOR<MatterCreateWithoutVotesInput, MatterUncheckedCreateWithoutVotesInput>
    where?: MatterWhereInput
  }

  export type MatterUpdateToOneWithWhereWithoutVotesInput = {
    where?: MatterWhereInput
    data: XOR<MatterUpdateWithoutVotesInput, MatterUncheckedUpdateWithoutVotesInput>
  }

  export type MatterUpdateWithoutVotesInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUpdateManyWithoutMatterNestedInput
    actions?: ActionUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUpdateManyWithoutToNestedInput
  }

  export type MatterUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUncheckedUpdateManyWithoutMatterNestedInput
    actions?: ActionUncheckedUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUncheckedUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUncheckedUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type SupervisorUpsertWithoutVotesInput = {
    update: XOR<SupervisorUpdateWithoutVotesInput, SupervisorUncheckedUpdateWithoutVotesInput>
    create: XOR<SupervisorCreateWithoutVotesInput, SupervisorUncheckedCreateWithoutVotesInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutVotesInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutVotesInput, SupervisorUncheckedUpdateWithoutVotesInput>
  }

  export type SupervisorUpdateWithoutVotesInput = {
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsorships?: SponsorshipUpdateManyWithoutSupervisorNestedInput
    stats?: SupervisorStatUpdateOneWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutVotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutSupervisorNestedInput
    stats?: SupervisorStatUncheckedUpdateOneWithoutSupervisorNestedInput
  }

  export type MatterCreateWithoutSponsorshipsInput = {
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicCreateNestedManyWithoutMatterInput
    votes?: VoteCreateNestedManyWithoutMatterInput
    actions?: ActionCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationCreateNestedManyWithoutToInput
  }

  export type MatterUncheckedCreateWithoutSponsorshipsInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    topics?: MatterTopicUncheckedCreateNestedManyWithoutMatterInput
    votes?: VoteUncheckedCreateNestedManyWithoutMatterInput
    actions?: ActionUncheckedCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentUncheckedCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationUncheckedCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type MatterCreateOrConnectWithoutSponsorshipsInput = {
    where: MatterWhereUniqueInput
    create: XOR<MatterCreateWithoutSponsorshipsInput, MatterUncheckedCreateWithoutSponsorshipsInput>
  }

  export type SupervisorCreateWithoutSponsorshipsInput = {
    legistarId?: number | null
    slug: string
    fullName: string
    district?: number | null
    title?: string | null
    party?: string | null
    active?: boolean
    photoUrl?: string | null
    bio?: string | null
    email?: string | null
    website?: string | null
    termStart?: Date | string | null
    termEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutSupervisorInput
    stats?: SupervisorStatCreateNestedOneWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutSponsorshipsInput = {
    id?: number
    legistarId?: number | null
    slug: string
    fullName: string
    district?: number | null
    title?: string | null
    party?: string | null
    active?: boolean
    photoUrl?: string | null
    bio?: string | null
    email?: string | null
    website?: string | null
    termStart?: Date | string | null
    termEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutSupervisorInput
    stats?: SupervisorStatUncheckedCreateNestedOneWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutSponsorshipsInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutSponsorshipsInput, SupervisorUncheckedCreateWithoutSponsorshipsInput>
  }

  export type MatterUpsertWithoutSponsorshipsInput = {
    update: XOR<MatterUpdateWithoutSponsorshipsInput, MatterUncheckedUpdateWithoutSponsorshipsInput>
    create: XOR<MatterCreateWithoutSponsorshipsInput, MatterUncheckedCreateWithoutSponsorshipsInput>
    where?: MatterWhereInput
  }

  export type MatterUpdateToOneWithWhereWithoutSponsorshipsInput = {
    where?: MatterWhereInput
    data: XOR<MatterUpdateWithoutSponsorshipsInput, MatterUncheckedUpdateWithoutSponsorshipsInput>
  }

  export type MatterUpdateWithoutSponsorshipsInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUpdateManyWithoutMatterNestedInput
    votes?: VoteUpdateManyWithoutMatterNestedInput
    actions?: ActionUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUpdateManyWithoutToNestedInput
  }

  export type MatterUncheckedUpdateWithoutSponsorshipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topics?: MatterTopicUncheckedUpdateManyWithoutMatterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutMatterNestedInput
    actions?: ActionUncheckedUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUncheckedUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUncheckedUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type SupervisorUpsertWithoutSponsorshipsInput = {
    update: XOR<SupervisorUpdateWithoutSponsorshipsInput, SupervisorUncheckedUpdateWithoutSponsorshipsInput>
    create: XOR<SupervisorCreateWithoutSponsorshipsInput, SupervisorUncheckedCreateWithoutSponsorshipsInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutSponsorshipsInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutSponsorshipsInput, SupervisorUncheckedUpdateWithoutSponsorshipsInput>
  }

  export type SupervisorUpdateWithoutSponsorshipsInput = {
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutSupervisorNestedInput
    stats?: SupervisorStatUpdateOneWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutSponsorshipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutSupervisorNestedInput
    stats?: SupervisorStatUncheckedUpdateOneWithoutSupervisorNestedInput
  }

  export type MatterTopicCreateWithoutTopicInput = {
    weight?: number
    matter: MatterCreateNestedOneWithoutTopicsInput
  }

  export type MatterTopicUncheckedCreateWithoutTopicInput = {
    matterId: number
    weight?: number
  }

  export type MatterTopicCreateOrConnectWithoutTopicInput = {
    where: MatterTopicWhereUniqueInput
    create: XOR<MatterTopicCreateWithoutTopicInput, MatterTopicUncheckedCreateWithoutTopicInput>
  }

  export type MatterTopicCreateManyTopicInputEnvelope = {
    data: MatterTopicCreateManyTopicInput | MatterTopicCreateManyTopicInput[]
  }

  export type MatterTopicUpsertWithWhereUniqueWithoutTopicInput = {
    where: MatterTopicWhereUniqueInput
    update: XOR<MatterTopicUpdateWithoutTopicInput, MatterTopicUncheckedUpdateWithoutTopicInput>
    create: XOR<MatterTopicCreateWithoutTopicInput, MatterTopicUncheckedCreateWithoutTopicInput>
  }

  export type MatterTopicUpdateWithWhereUniqueWithoutTopicInput = {
    where: MatterTopicWhereUniqueInput
    data: XOR<MatterTopicUpdateWithoutTopicInput, MatterTopicUncheckedUpdateWithoutTopicInput>
  }

  export type MatterTopicUpdateManyWithWhereWithoutTopicInput = {
    where: MatterTopicScalarWhereInput
    data: XOR<MatterTopicUpdateManyMutationInput, MatterTopicUncheckedUpdateManyWithoutTopicInput>
  }

  export type MatterCreateWithoutTopicsInput = {
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutMatterInput
    actions?: ActionCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationCreateNestedManyWithoutToInput
  }

  export type MatterUncheckedCreateWithoutTopicsInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    file?: string | null
    type?: string | null
    status?: string | null
    title: string
    summary?: string | null
    summarySource?: string | null
    fullText?: string | null
    introDate?: Date | string | null
    finalDate?: Date | string | null
    sourceUrl?: string | null
    inControl?: string | null
    originTimeline?: string | null
    originGeneratedAt?: Date | string | null
    importance?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutMatterInput
    actions?: ActionUncheckedCreateNestedManyWithoutMatterInput
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutMatterInput
    attachments?: MatterAttachmentUncheckedCreateNestedManyWithoutMatterInput
    relationsFrom?: MatterRelationUncheckedCreateNestedManyWithoutFromInput
    relationsTo?: MatterRelationUncheckedCreateNestedManyWithoutToInput
  }

  export type MatterCreateOrConnectWithoutTopicsInput = {
    where: MatterWhereUniqueInput
    create: XOR<MatterCreateWithoutTopicsInput, MatterUncheckedCreateWithoutTopicsInput>
  }

  export type TopicCreateWithoutMattersInput = {
    slug: string
    name: string
    emoji?: string | null
    color?: string | null
  }

  export type TopicUncheckedCreateWithoutMattersInput = {
    id?: number
    slug: string
    name: string
    emoji?: string | null
    color?: string | null
  }

  export type TopicCreateOrConnectWithoutMattersInput = {
    where: TopicWhereUniqueInput
    create: XOR<TopicCreateWithoutMattersInput, TopicUncheckedCreateWithoutMattersInput>
  }

  export type MatterUpsertWithoutTopicsInput = {
    update: XOR<MatterUpdateWithoutTopicsInput, MatterUncheckedUpdateWithoutTopicsInput>
    create: XOR<MatterCreateWithoutTopicsInput, MatterUncheckedCreateWithoutTopicsInput>
    where?: MatterWhereInput
  }

  export type MatterUpdateToOneWithWhereWithoutTopicsInput = {
    where?: MatterWhereInput
    data: XOR<MatterUpdateWithoutTopicsInput, MatterUncheckedUpdateWithoutTopicsInput>
  }

  export type MatterUpdateWithoutTopicsInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutMatterNestedInput
    actions?: ActionUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUpdateManyWithoutToNestedInput
  }

  export type MatterUncheckedUpdateWithoutTopicsInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    summarySource?: NullableStringFieldUpdateOperationsInput | string | null
    fullText?: NullableStringFieldUpdateOperationsInput | string | null
    introDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inControl?: NullableStringFieldUpdateOperationsInput | string | null
    originTimeline?: NullableStringFieldUpdateOperationsInput | string | null
    originGeneratedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    importance?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutMatterNestedInput
    actions?: ActionUncheckedUpdateManyWithoutMatterNestedInput
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutMatterNestedInput
    attachments?: MatterAttachmentUncheckedUpdateManyWithoutMatterNestedInput
    relationsFrom?: MatterRelationUncheckedUpdateManyWithoutFromNestedInput
    relationsTo?: MatterRelationUncheckedUpdateManyWithoutToNestedInput
  }

  export type TopicUpsertWithoutMattersInput = {
    update: XOR<TopicUpdateWithoutMattersInput, TopicUncheckedUpdateWithoutMattersInput>
    create: XOR<TopicCreateWithoutMattersInput, TopicUncheckedCreateWithoutMattersInput>
    where?: TopicWhereInput
  }

  export type TopicUpdateToOneWithWhereWithoutMattersInput = {
    where?: TopicWhereInput
    data: XOR<TopicUpdateWithoutMattersInput, TopicUncheckedUpdateWithoutMattersInput>
  }

  export type TopicUpdateWithoutMattersInput = {
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicUncheckedUpdateWithoutMattersInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    emoji?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupervisorCreateWithoutStatsInput = {
    legistarId?: number | null
    slug: string
    fullName: string
    district?: number | null
    title?: string | null
    party?: string | null
    active?: boolean
    photoUrl?: string | null
    bio?: string | null
    email?: string | null
    website?: string | null
    termStart?: Date | string | null
    termEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteCreateNestedManyWithoutSupervisorInput
    sponsorships?: SponsorshipCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorUncheckedCreateWithoutStatsInput = {
    id?: number
    legistarId?: number | null
    slug: string
    fullName: string
    district?: number | null
    title?: string | null
    party?: string | null
    active?: boolean
    photoUrl?: string | null
    bio?: string | null
    email?: string | null
    website?: string | null
    termStart?: Date | string | null
    termEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    votes?: VoteUncheckedCreateNestedManyWithoutSupervisorInput
    sponsorships?: SponsorshipUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type SupervisorCreateOrConnectWithoutStatsInput = {
    where: SupervisorWhereUniqueInput
    create: XOR<SupervisorCreateWithoutStatsInput, SupervisorUncheckedCreateWithoutStatsInput>
  }

  export type SupervisorUpsertWithoutStatsInput = {
    update: XOR<SupervisorUpdateWithoutStatsInput, SupervisorUncheckedUpdateWithoutStatsInput>
    create: XOR<SupervisorCreateWithoutStatsInput, SupervisorUncheckedCreateWithoutStatsInput>
    where?: SupervisorWhereInput
  }

  export type SupervisorUpdateToOneWithWhereWithoutStatsInput = {
    where?: SupervisorWhereInput
    data: XOR<SupervisorUpdateWithoutStatsInput, SupervisorUncheckedUpdateWithoutStatsInput>
  }

  export type SupervisorUpdateWithoutStatsInput = {
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUpdateManyWithoutSupervisorNestedInput
    sponsorships?: SponsorshipUpdateManyWithoutSupervisorNestedInput
  }

  export type SupervisorUncheckedUpdateWithoutStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: NullableIntFieldUpdateOperationsInput | number | null
    slug?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    district?: NullableIntFieldUpdateOperationsInput | number | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    party?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    termStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    termEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutSupervisorNestedInput
    sponsorships?: SponsorshipUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type VoteCreateManySupervisorInput = {
    id?: number
    value: string
    actionId: number
    matterId: number
    createdAt?: Date | string
  }

  export type SponsorshipCreateManySupervisorInput = {
    id?: number
    role?: string
    matterId: number
  }

  export type VoteUpdateWithoutSupervisorInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: ActionUpdateOneRequiredWithoutVotesNestedInput
    matter?: MatterUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    actionId?: IntFieldUpdateOperationsInput | number
    matterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    actionId?: IntFieldUpdateOperationsInput | number
    matterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorshipUpdateWithoutSupervisorInput = {
    role?: StringFieldUpdateOperationsInput | string
    matter?: MatterUpdateOneRequiredWithoutSponsorshipsNestedInput
  }

  export type SponsorshipUncheckedUpdateWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    matterId?: IntFieldUpdateOperationsInput | number
  }

  export type SponsorshipUncheckedUpdateManyWithoutSupervisorInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    matterId?: IntFieldUpdateOperationsInput | number
  }

  export type MatterTopicCreateManyMatterInput = {
    topicId: number
    weight?: number
  }

  export type VoteCreateManyMatterInput = {
    id?: number
    value: string
    actionId: number
    supervisorId: number
    createdAt?: Date | string
  }

  export type ActionCreateManyMatterInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    meetingId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorshipCreateManyMatterInput = {
    id?: number
    role?: string
    supervisorId: number
  }

  export type MatterAttachmentCreateManyMatterInput = {
    id?: number
    name: string
    url?: string | null
  }

  export type MatterRelationCreateManyFromInput = {
    id?: number
    toFile: string
    toLegistarId?: number | null
  }

  export type MatterRelationCreateManyToInput = {
    id?: number
    fromId: number
    toFile: string
  }

  export type MatterTopicUpdateWithoutMatterInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    topic?: TopicUpdateOneRequiredWithoutMattersNestedInput
  }

  export type MatterTopicUncheckedUpdateWithoutMatterInput = {
    topicId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type MatterTopicUncheckedUpdateManyWithoutMatterInput = {
    topicId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type VoteUpdateWithoutMatterInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    action?: ActionUpdateOneRequiredWithoutVotesNestedInput
    supervisor?: SupervisorUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutMatterInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    actionId?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutMatterInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    actionId?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActionUpdateWithoutMatterInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: MeetingUpdateOneWithoutActionsNestedInput
    votes?: VoteUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutMatterInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    meetingId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateManyWithoutMatterInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    meetingId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorshipUpdateWithoutMatterInput = {
    role?: StringFieldUpdateOperationsInput | string
    supervisor?: SupervisorUpdateOneRequiredWithoutSponsorshipsNestedInput
  }

  export type SponsorshipUncheckedUpdateWithoutMatterInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    supervisorId?: IntFieldUpdateOperationsInput | number
  }

  export type SponsorshipUncheckedUpdateManyWithoutMatterInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    supervisorId?: IntFieldUpdateOperationsInput | number
  }

  export type MatterAttachmentUpdateWithoutMatterInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatterAttachmentUncheckedUpdateWithoutMatterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatterAttachmentUncheckedUpdateManyWithoutMatterInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatterRelationUpdateWithoutFromInput = {
    toFile?: StringFieldUpdateOperationsInput | string
    to?: MatterUpdateOneWithoutRelationsToNestedInput
  }

  export type MatterRelationUncheckedUpdateWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toFile?: StringFieldUpdateOperationsInput | string
    toLegistarId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatterRelationUncheckedUpdateManyWithoutFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    toFile?: StringFieldUpdateOperationsInput | string
    toLegistarId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatterRelationUpdateWithoutToInput = {
    toFile?: StringFieldUpdateOperationsInput | string
    from?: MatterUpdateOneRequiredWithoutRelationsFromNestedInput
  }

  export type MatterRelationUncheckedUpdateWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toFile?: StringFieldUpdateOperationsInput | string
  }

  export type MatterRelationUncheckedUpdateManyWithoutToInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toFile?: StringFieldUpdateOperationsInput | string
  }

  export type ActionCreateManyMeetingInput = {
    id?: number
    legistarId: number
    legistarGuid?: string | null
    date?: Date | string | null
    actionText?: string | null
    result?: string | null
    bodyName?: string | null
    matterId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActionUpdateWithoutMeetingInput = {
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matter?: MatterUpdateOneRequiredWithoutActionsNestedInput
    votes?: VoteUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    matterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    votes?: VoteUncheckedUpdateManyWithoutActionNestedInput
  }

  export type ActionUncheckedUpdateManyWithoutMeetingInput = {
    id?: IntFieldUpdateOperationsInput | number
    legistarId?: IntFieldUpdateOperationsInput | number
    legistarGuid?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actionText?: NullableStringFieldUpdateOperationsInput | string | null
    result?: NullableStringFieldUpdateOperationsInput | string | null
    bodyName?: NullableStringFieldUpdateOperationsInput | string | null
    matterId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyActionInput = {
    id?: number
    value: string
    matterId: number
    supervisorId: number
    createdAt?: Date | string
  }

  export type VoteUpdateWithoutActionInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matter?: MatterUpdateOneRequiredWithoutVotesNestedInput
    supervisor?: SupervisorUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateWithoutActionInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    matterId?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutActionInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    matterId?: IntFieldUpdateOperationsInput | number
    supervisorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatterTopicCreateManyTopicInput = {
    matterId: number
    weight?: number
  }

  export type MatterTopicUpdateWithoutTopicInput = {
    weight?: FloatFieldUpdateOperationsInput | number
    matter?: MatterUpdateOneRequiredWithoutTopicsNestedInput
  }

  export type MatterTopicUncheckedUpdateWithoutTopicInput = {
    matterId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }

  export type MatterTopicUncheckedUpdateManyWithoutTopicInput = {
    matterId?: IntFieldUpdateOperationsInput | number
    weight?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use SupervisorCountOutputTypeDefaultArgs instead
     */
    export type SupervisorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupervisorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatterCountOutputTypeDefaultArgs instead
     */
    export type MatterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeetingCountOutputTypeDefaultArgs instead
     */
    export type MeetingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeetingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActionCountOutputTypeDefaultArgs instead
     */
    export type ActionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TopicCountOutputTypeDefaultArgs instead
     */
    export type TopicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TopicCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupervisorDefaultArgs instead
     */
    export type SupervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupervisorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatterDefaultArgs instead
     */
    export type MatterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatterAttachmentDefaultArgs instead
     */
    export type MatterAttachmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatterAttachmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatterRelationDefaultArgs instead
     */
    export type MatterRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatterRelationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MeetingDefaultArgs instead
     */
    export type MeetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MeetingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActionDefaultArgs instead
     */
    export type ActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VoteDefaultArgs instead
     */
    export type VoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SponsorshipDefaultArgs instead
     */
    export type SponsorshipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SponsorshipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TopicDefaultArgs instead
     */
    export type TopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TopicDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatterTopicDefaultArgs instead
     */
    export type MatterTopicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatterTopicDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupervisorStatDefaultArgs instead
     */
    export type SupervisorStatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupervisorStatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IngestLogDefaultArgs instead
     */
    export type IngestLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IngestLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}