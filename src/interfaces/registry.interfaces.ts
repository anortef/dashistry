interface RepositoriesList {
  repositories: Array<string|[]>
};

interface TagsList {
  name: string,
  tags: Array<string|[]>
};

interface FsLayers {
  blobSum: string
};

interface History {
  v1Compatibility: string
};

interface Signatures {
  header: {
    jwk: {
      crv: string,
      kid: string,
      kty: string,
      x: string,
      y: string
    },
    alg: string
  },
  signature: string,
  protected: string
};

interface Manifests {
  schemaVersion: number,
  name: string,
  tag: string,
  architecture: string,
  fsLayers: Array<FsLayers>,
  history: Array<History>,
  signatures: Array<Signatures>
};

export {RepositoriesList, TagsList, Manifests};
