import {
  BufferAttribute,
  BufferGeometry,
} from 'three'

/**
 * Port of Lusion's BufItem loader — parses their custom .buf geometry format.
 */
export async function loadBuf(url) {
  const res = await fetch(url)
  const e = await res.arrayBuffer()
  const t = new Uint32Array(e, 0, 1)[0]
  const r = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(e, 4, t)))
  const n = r.vertexCount
  const a = r.indexCount
  let l = 4 + t
  const c = new BufferGeometry()
  const u = r.attributes

  for (let _ = 0, T = u.length; _ < T; _++) {
    const M = u[_]
    const S = M.id
    const b = S === 'indices' ? a : n
    const C = M.componentSize
    const w = globalThis[M.storageType]
    const R = new w(e, l, b * C)
    const E = w.BYTES_PER_ELEMENT
    let I

    if (M.needsPack) {
      const F = M.packedComponents
      const k = F.length
      const L = M.storageType.indexOf('Int') === 0
      const D = 1 << (E * 8)
      const ne = L ? D * 0.5 : 0
      const re = 1 / D
      I = new Float32Array(b * C)
      for (let ce = 0, z = 0; ce < b; ce++) {
        for (let j = 0; j < k; j++) {
          const X = F[j]
          I[z] = (R[z] + ne) * re * X.delta + X.from
          z++
        }
      }
    } else {
      I = R
    }

    if (S === 'indices') c.setIndex(new BufferAttribute(I, 1))
    else c.setAttribute(S, new BufferAttribute(I, C))

    l += b * C * E
  }

  c.computeBoundingSphere()
  return c
}
