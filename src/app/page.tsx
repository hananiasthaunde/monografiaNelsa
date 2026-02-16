'use client'

export default function Home() {
  const arquivos = [
    { nome: 'Monografia WORD', arquivo: 'Monografia_Nelsa_Atualizada.docx', tamanho: '451 KB', cor: '#2563eb', icon: '📄' },
    { nome: 'Monografia PDF', arquivo: 'Monografia_Nelsa_Atualizada.pdf', tamanho: '893 KB', cor: '#dc2626', icon: '📕' },
    { nome: 'Monografia (ZIP)', arquivo: 'Monografia_Completa.zip', tamanho: '911 KB', cor: '#059669', icon: '📦' },
    { nome: 'Projeto Completo', arquivo: 'Projeto_Completo.zip', tamanho: '11 MB', cor: '#7c3aed', icon: '🗂️' },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '2rem',
        maxWidth: '700px',
        width: '100%',
        boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📄</div>
          <h1 style={{ fontSize: '1.6rem', color: '#1e3a5f', marginBottom: '0.3rem' }}>
            Monografia Atualizada
          </h1>
          <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
            A INFLUÊNCIA DA LÍNGUA MATERNA NO APRENDIZADO DO PORTUGUÊS
          </p>
          <p style={{ color: '#374151', fontSize: '0.85rem', fontWeight: '500' }}>
            Escola Primaria de Canjanda - Nelsa Querino Carlos Caetano
          </p>
        </div>

        {/* Arquivos para Download */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {arquivos.map((item, index) => (
            <a 
              key={index}
              href={`/${item.arquivo}`}
              download={item.arquivo}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: item.cor,
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'transform 0.2s'
              }}
            >
              <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{item.nome}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{item.arquivo} • {item.tamanho}</div>
              </div>
              <span style={{ fontSize: '1.2rem' }}>⬇️</span>
            </a>
          ))}
        </div>

        {/* Informações */}
        <div style={{
          background: '#f0fdf4',
          borderRadius: '12px',
          padding: '1rem',
          fontSize: '0.85rem',
          color: '#166534'
        }}>
          <strong>✅ Atualizações Aplicadas:</strong>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.3rem', marginTop: '0.5rem' }}>
            <span>✓ 40 alunos</span>
            <span>✓ 1 professor</span>
            <span>✓ Escola Primaria de Canjanda</span>
            <span>✓ Bairro Matundo, Unidade Nhaufa</span>
            <span>✓ Supervisor: Domingos Ailande</span>
            <span>✓ 62 páginas</span>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.75rem', color: '#9ca3af' }}>
          Clique nos botões acima para fazer o download
        </p>
      </div>
    </div>
  )
}
