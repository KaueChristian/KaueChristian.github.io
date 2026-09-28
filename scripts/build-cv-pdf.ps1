# Gera os PDFs do currículo (PT e EN) a partir de cv.html, usando o Edge ou Chrome em modo headless.
# Uso, a partir da raiz do projeto:  powershell -File scripts/build-cv-pdf.ps1
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root 'assets/cv'
New-Item -ItemType Directory -Force $outDir | Out-Null

$candidates = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"
)
$browser = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) { throw 'Edge ou Chrome nao encontrado.' }

$page = (Resolve-Path (Join-Path $root 'cv.html')).Path.Replace([string][char]92, '/')

foreach ($lang in 'pt', 'en') {
  $pdf = Join-Path $outDir ("Kaue-Christian-CV-{0}.pdf" -f $lang.ToUpper())
  & $browser --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 `
    "--print-to-pdf=$pdf" "file:///${page}?lang=$lang"
  Start-Sleep -Seconds 2
  if (-not (Test-Path $pdf)) { throw "Falha ao gerar $pdf" }
  Write-Host "OK  $pdf"
}
