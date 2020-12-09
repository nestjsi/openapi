/**
 * @link https://swagger.io/specification/#data-type-format
 */
export enum ApiDataFormat {
  /**
   * @description Any sequence of octets
   * @type string
   */
  Binary = "binary",
  /**
   * @description Base64 encoded characters
   * @type string
   */
  Byte = "byte",
  /**
   * @description As defined by full-date - RFC3339
   * @type string
   */
  Date = "date",
  /**
   * @description As defined by date-time - RFC3339
   * @type string
   */
  DateTime = "date-time",
  /**
   * @description Double
   * @type number
   */
  Double = "double",
  /**
   * @description EMail
   * @type string
   */
  Email = "email",
  /**
   * @description Signed 32 bits
   * @type integer
   * @format int32
   */
  Integer32 = "int32",
  /**
   * @description Signed 64 bits (a.k.a long)
   * @type integer
   */
  Integer64 = "int64",
  /**
   * @description Float
   * @type number
   */
  Float = "float",
  /**
   * @description Hostname without ports
   * @type string
   */
  Hostname = "hostname",
  /**
   * @description Internet Protocol version 4
   * @type string
   */
  IPv4 = "ipv4",
  /**
   * @description Internet Protocol version 6
   * @type string
   */
  IPv6 = "ipv6",
  /**
   * @description A hint to UIs to obscure input.
   * @type string
   */
  Password = "password",
  /**
   * @description Uniform Resource Identifier
   * @type string
   */
  URI = "uri",
  /**
   * @description UUID
   * @type string
   */
  UUID = "uuid",
}

export enum ApiDataType {
  /**
   * @description Validates the value against all the subschemas
   */
  AllOf = "allOf",
  /**
   * @description Validates the value against any (one or more) of the sub-schemas
   */
  AnyOf = "anyOf",
  /**
   * @description Array
   */
  Array = "array",
  /**
   * @description Bollean
   */
  Boolean = "boolean",
  /**
   * @description Whole number
   */
  Integer = "integer",
  /**
   * @description Null
   */
  Null = "null",
  /**
   * @description Double-precision number
   */
  Number = "number",
  /**
   * @description Keyed collection
   */
  Object = "object",
  /**
   * @description Validates the value against exactly one of the sub-schemas
   */
  OneOf = "oneOf",
  /**
   * @description JSON Reference or JSON Pointer
   */
  Reference = "$ref",
  /**
   * @description String
   */
  String = "string",
}

export enum ApiBodySchemaType {
  /**
   * @description Binary data, used to describe files
   */
  Binary = "binary",
  /**
   * @description Keyed collection
   */
  Object = "object",
  /**
   * @description String
   */
  String = "string",
}

export const ApiPropertyId = {
  description: "Database record ID",
  format: "uuid",
  name: "id",
  title: "ID",
  type: "string",
} as const;

export const ApiPropertyExtra = {
  default: {},
  description: "Extra values",
  example: {},
  name: "extra",
  required: false,
  type: "object",
} as const;

export enum ApiUtilSortDirection {
  asc = "asc",
  desc = "desc",
}
