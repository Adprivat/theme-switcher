# Modern Theme Switcher

Ein moderner, leichtgewichtiger Theme Switcher für Webseiten mit Dark/Light Mode Unterstützung.

## Features

- 🌓 Automatische System-Theme-Erkennung
- 💾 Persistente Theme-Speicherung
- 🎨 CSS-Variablen basiertes Styling
- 🔄 Smooth Theme Transitions
- 📱 Responsive Design
- 🎯 Einfache Integration
- 🔌 Event-System für Theme-Änderungen

## Installation

1. Fügen Sie die JavaScript-Datei ein:
```html
<script src="theme.js"></script>
```

2. Fügen Sie den Toggle-Switch in Ihr HTML ein:
```html
<div class="theme-switch">
    <input type="checkbox" id="theme-toggle">
    <label for="theme-toggle" class="switch">
        <span class="sun">☀️</span>
        <span class="moon">🌙</span>
    </label>
</div>
```

3. Definieren Sie Ihre Theme-Variablen in CSS:
```css
:root {
    --background: #ffffff;
    --text: #000000;
    /* Weitere Variablen hier */
}

[data-theme="dark"] {
    --background: #0f172a;
    --text: #ffffff;
    /* Weitere Variablen hier */
}
```

## Verwendung

```javascript
// Initialisieren mit Standard-Optionen
const themeSwitcher = new ThemeSwitcher();

// Oder mit benutzerdefinierten Optionen
const themeSwitcher = new ThemeSwitcher({
    storageKey: 'my-theme',
    darkTheme: 'night',
    lightTheme: 'day'
});

// Theme programmatisch umschalten
themeSwitcher.toggleTheme();

// Aktuelles Theme abfragen
const currentTheme = themeSwitcher.getCurrentTheme();

// Auf Theme-Änderungen reagieren
document.addEventListener('themeChange', (e) => {
    console.log(`Theme changed to: ${e.detail.theme}`);
});
```

## Anpassung

Der Theme Switcher kann über CSS vollständig gestaltet werden. Beispiel:

```css
.theme-switch {
    position: relative;
    display: inline-block;
}

.switch {
    width: 60px;
    height: 30px;
    background: var(--card-bg);
    border-radius: 20px;
    cursor: pointer;
    padding: 4px;
    transition: all 0.3s ease;
}

/* Weitere Styling-Optionen... */
```

## Browser-Unterstützung

- Chrome 76+
- Firefox 67+
- Safari 12.1+
- Edge 79+

## Lizenz

MIT 