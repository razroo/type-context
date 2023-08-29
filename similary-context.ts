// i wonder what damage can do with this alone

type Vector = number[];

function cosineSimilarity(vector1: Vector, vector2: Vector): number {
  const dotProduct = vector1.reduce((acc, val, index) => acc + val * vector2[index], 0);
  const magnitude1 = Math.sqrt(vector1.reduce((acc, val) => acc + val * val, 0));
  const magnitude2 = Math.sqrt(vector2.reduce((acc, val) => acc + val * val, 0));

  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0; // Handle zero vectors
  }

  return dotProduct / (magnitude1 * magnitude2);
}

// Example usage
const vector1: Vector = [1, 2, 3];
const vector2: Vector = [2, 3, 4];

const similarity = cosineSimilarity(vector1, vector2);
console.log('Cosine Similarity:', similarity);
