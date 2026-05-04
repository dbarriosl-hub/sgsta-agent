param(
  [string]$DatabaseUrl = $env:DATABASE_URL
)

if (-not $DatabaseUrl) {
  Write-Error "Falta DatabaseUrl. Usa -DatabaseUrl `"postgres://usuario:clave@localhost:5432/sgsta_agent`" o define `$env:DATABASE_URL."
  exit 1
}

$psql = Get-Command psql -ErrorAction SilentlyContinue
if (-not $psql) {
  Write-Error "No encontre psql en PATH. Instala PostgreSQL o agrega la carpeta bin de PostgreSQL al PATH."
  exit 1
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$files = Get-ChildItem -LiteralPath $root -Filter "*.sql" | Sort-Object Name

if (-not $files.Count) {
  Write-Error "No encontre migraciones SQL en $root."
  exit 1
}

foreach ($file in $files) {
  Write-Host "Aplicando $($file.Name)..." -ForegroundColor Cyan
  & psql $DatabaseUrl -v ON_ERROR_STOP=1 -f $file.FullName
  if ($LASTEXITCODE -ne 0) {
    Write-Error "Fallo la migracion $($file.Name). Se detuvo la ejecucion."
    exit $LASTEXITCODE
  }
}

Write-Host "Migraciones aplicadas correctamente." -ForegroundColor Green
