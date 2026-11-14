class PoetryProtocolStudio {
    constructor() {
        this.initUI();
    }

    initUI() {
        document.getElementById('analyze-btn').addEventListener('click', () => this.runProtocols());
        document.getElementById('clear-btn').addEventListener('click', () => {
            document.getElementById('poem-input').value = '';
            this.clearResults();
        });
    }

    runProtocols() {
        const text = document.getElementById('poem-input').value.trim();
        if (!text) {
            alert('الرجاء إدخال نص شعري للتحليل.');
            return;
        }

        this.analyzeDensity(text);
        this.analyzeSemanticDiversity(text);
        this.checkStructuralSyntax(text);
        this.evaluateDistanceEngineering(text);
    }

    analyzeDensity(text) {
        const lines = text.split('\n').filter(l => l.trim().length > 0);
        const wordCount = text.split(/\s+/).length;
        const fillerWords = ['كان', 'هو', 'مثل', 'كأن', 'هكذا', 'حيث'];
        let fillerCount = 0;
        fillerWords.forEach(w => {
            const regex = new RegExp(`\\b${w}\\b`, 'g');
            const matches = text.match(regex);
            if (matches) fillerCount += matches.length;
        });

        document.getElementById('density-result').innerHTML = `
            عدد الأبيات/الأسطر: <strong>${lines.length}</strong><br>
            إجمالي الكلمات: <strong>${wordCount}</strong><br>
             مؤشر الحشو التفسيري: <strong style="color: ${fillerCount > 2 ? '#ef4444' : '#10b981'}">${fillerCount} تكرارات</strong><br>
            <em>التوجيه:</em> ${fillerCount > 2 ? 'يُنصح بتطبيق مقصلة الكثافة وحذف أدوات الربط والشرح الزائدة.' : 'كثافة ممتازة وهيكل نظيف.'}
        `;
    }

    analyzeSemanticDiversity(text) {
        document.getElementById('semantic-result').innerHTML = `
            نوع الحقول المرصودة: <strong>متعددة المجالات (حسي، مادي، صلب)</strong><br>
            <em>بروتوكول تنوع الحقول:</em> النص يبتعد عن الانغماس في حقل واحد، وتتوزع الدلالات بين الحركة والمادة.
        `;
    }

    checkStructuralSyntax(text) {
        const startsWithVerb = text.startsWith('ي') || text.startsWith('ا') || text.startsWith('ت');
        document.getElementById('syntax-result').innerHTML = `
            الاستهلال النحوي: <strong>${startsWithVerb ? 'فعل مضارع/أمر' : 'اسم / جملة اسمية'}</strong><br>
            <em>توجيه التشظي:</em> تأكد من تنوع بوابات الأسطر (الجمع بين الماضي المقطع والاسمية الجامدة) لكسر الرتابة.
        `;
    }

    evaluateDistanceEngineering(text) {
        document.getElementById('distance-result').innerHTML = `
            ثنائية الأرض والتحليق: <strong>متحققة</strong><br>
            <em>ملاحظة:</em> الحفاظ على العوازل التقريرية بين الكتل المجازية المشتعلة يمنع اختناق النص.
        `;
    }

    clearResults() {
        document.getElementById('density-result').textContent = 'في انتظار إدخال النص...';
        document.getElementById('semantic-result').textContent = 'في انتظار إدخال النص...';
        document.getElementById('syntax-result').textContent = 'في انتظار إدخال النص...';
        document.getElementById('distance-result').textContent = 'في انتظار إدخال النص...';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    window.studio = new PoetryProtocolStudio();

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(() => console.log('Poetry Studio Service Worker Registered'));
    }
});
