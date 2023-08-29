import {computeCosineSimilarity} from './cosineSimilarity';

type CategoryString = string & { __categoryTag: unique symbol };
type UUIDString = string & { __uuidTag: unique symbol };

function createCategoryString(value: string): CategoryString {
  return value as CategoryString;
}

function createUUIDString(value: string): UUIDString {
  return value as UUIDString;
}

function isCategoryString(value: string): value is CategoryString {
  return value.hasOwnProperty('__categoryTag');
}

function isUUIDString(value: string): value is UUIDString {
  return value.hasOwnProperty('__uuidTag');
}

function categorizeString(input: string): CategoryString | UUIDString {
  // Simulated vectors representing categories and UUIDs
  const categoryVector: number[] = [1, 0];
  const uuidVector: number[] = [0, 1];

  // Simulated vector generation based on input
  const inputVector = input.includes('uuid') ? uuidVector : categoryVector;

  const categoryVectorCosineSim = computeCosineSimilarity(inputVector, categoryVector);
  const uuidVectorCosineSim = computeCosineSimilarity(inputVector, uuidVector);

  if (categoryVectorCosineSim > uuidVectorCosineSim) {
    return createCategoryString(input);
  } else {
    return createUUIDString(input);
  }
}

// Usage
const result1 = categorizeString('apple'); // CategoryString
const result2 = categorizeString('banana'); // CategoryString
const result3 = categorizeString('uuid123'); // UUIDString

if (isCategoryString(result1)) {
  // You can safely use result1 as a CategoryString here
} else if (isUUIDString(result1)) {
  // Handle error: result1 is not a UUIDString
}

if (isCategoryString(result3)) {
  // Handle error: result3 is not a CategoryString
} else if (isUUIDString(result3)) {
  // You can safely use result3 as a UUIDString here
}
