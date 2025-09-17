// 印章数据
const stampsData = [
    { id: 1, name: "认真书写，所有作业、笔记，做到规范书写", category: "study", icon: "fa-book", description: "认真书写，所有作业、笔记，做到规范书写" },
    { id: 2, name: "能够按时完成老师所布置的作业、任务", category: "study", icon: "fa-comments", description: "能够按时完成老师所布置的作业、任务" },
    { id: 3, name: "铃响前进入到教室，并能提前准备好本堂课所需要科目的课本、练习册，习题本", category: "study", icon: "fa-book-open", description: "铃响前进入到教室，并能提前准备好本堂课所需要科目的课本、练习册，习题本" },
    { id: 4, name: "课上有意识的专注听讲，积极发言", category: "study", icon: "fa-graduation-cap", description: "课上有意识的专注听讲，积极发言" },
    { id: 4, name: "文明如厕不随地吐痰，不乱扔垃圾", category: "behavior", icon: "fa-handshake", description: "文明如厕不随地吐痰，不乱扔垃圾" },
    { id: 5, name: "不在桌椅、教室、图书上乱涂乱画", category: "behavior", icon: "fa-certificate", description: "不在桌椅、教室、图书上乱涂乱画" },
    { id: 6, name: "不破坏学校的公共设施、设备", category: "behavior", icon: "fa-heart", description: "不破坏学校的公共设施、设备" },
    { id: 7, name: "积进入校园后，按照路线行走，不推不挤，不跑", category: "teamwork", icon: "fa-users", description: "积进入校园后，按照路线行走，不推不挤，不跑" },
    { id: 8, name: "进入教学楼后靠右行走，不追逐打闹", category: "teamwork", icon: "fa-hands-helping", description: "进入教学楼后靠右行走，不追逐打闹" },
    { id: 9, name: "尽量不迟到，迟到要从前门喊报告", category: "teamwork", icon: "fa-people-arrows", description: "尽量不迟到，迟到要从前门喊报告" },
    { id: 10, name: "任何时间不和同学打闹，不欺负、欺凌同学", category: "teamwork", icon: "fa-comments", description: "任何时间不和同学打闹，不欺负、欺凌同学" },
    { id: 11, name: "作为值日生认真完成当天的值日活动，保持教室的干净整洁", category: "responsibility", icon: "fa-shield-alt", description: "作为值日生认真完成当天的值日活动，保持教室的干净整洁" },
    { id: 11, name: "能够及时清理自己的书包、书桌等，保持好个人卫生", category: "responsibility", icon: "fa-check-circle", description: "能够及时清理自己的书包、书桌等，保持好个人卫生" },
    { id: 13, name: "日常和同学友好相处，不排挤欺负同学", category: "unity", icon: "fa-people-arrows", description: "日常和同学友好相处，不排挤欺负同学" },
    { id: 14, name: "积极参与完成小组活动和任务", category: "unity", icon: "fa-flag", description: "积极参与完成小组活动和任务" },
    { id: 15, name: "未完成作业时勇敢承认，不找任何理由", category: "honesty", icon: "fa-certificate", description: "未完成作业时勇敢承认，不找任何理由" },
    { id: 16, name: "对待考试，自己独立完成，不要抄袭别人的", category: "honesty", icon: "fa-balance-scale", description: "对待考试，自己独立完成，不要抄袭别人的" },
    { id: 17, name: "出现问题时，思考自己的错误", category: "honesty", icon: "fa-hand-holding-usd", description: "出现问题时，思考自己的错误" },
    { id: 18, name: "养坚持好晨读、午练、晚阅读", category: "habit", icon: "fa-check-circle", description: "养坚持好晨读、午练、晚阅读" },
    { id: 19, name: "自己的事情自己做，例如自己整理书包、自己记作业", category: "habit", icon: "fa-star", description: "自己的事情自己做，例如自己整理书包、自己记作业" }
];

// 二年级学生印章数据
const grade2StampsData = [
    { id: 101, name: "认真书写，所有作业、笔记，做到规范书写", category: "study", icon: "fa-book", description: "认真书写，所有作业、笔记，做到规范书写" },
    { id: 102, name: "能够按时完成老师所布置的作业、任务", category: "study", icon: "fa-pencil-alt", description: "能够按时完成老师所布置的作业、任务" },
    { id: 103, name: "铃响前进入到教室，并能提前准备好本堂课所需要科目的课本、练习册，习题本", category: "study", icon: "fa-brain", description: "铃响前进入到教室，并能提前准备好本堂课所需要科目的课本、练习册，习题本" },
    { id: 104, name: "课堂上相对长时间专注听讲，积极发言", category: "study", icon: "fa-tasks", description: "课堂上相对长时间专注听讲，积极发言" },
    { id: 105, name: "遇到不会解决的问题，不放弃，反复思考，或请教他人", category: "study", icon: "fa-clock", description: "遇到不会解决的问题，不放弃，反复思考，或请教他人" },
    { id: 106, name: "文明如厕，不随地吐痰，不乱扔垃圾", category: "behavior", icon: "fa-leaf", description: "文明如厕，不随地吐痰，不乱扔垃圾" },
    { id: 107, name: "不在桌椅、教室、图书上乱涂乱画", category: "behavior", icon: "fa-hands-helping", description: "不在桌椅、教室、图书上乱涂乱画" },
    { id: 107, name: "不破坏学校的公共设施、设备", category: "behavior", icon: "fa-volume-down", description: "不破坏学校的公共设施、设备" },
    { id: 108, name: "不讲脏话，不做任何不文明的手势动作", category: "behavior", icon: "fa-shield-alt", description: "不讲脏话，不做任何不文明的手势动作" },
    { id: 109, name: "不给老师、同学起绰号", category: "behavior", icon: "fa-shield-alt", description: "不给老师、同学起绰号" },
    { id: 109, name: "进入校园后，按照路线行走，不推不挤，不跑", category: "teamwork", icon: "fa-users", description: "进入校园后，按照路线行走，不推不挤，不跑" },
    { id: 110, name: "进入教学楼后靠右行走，不追逐打闹", category: "teamwork", icon: "fa-flag", description: "进入教学楼后靠右行走，不追逐打闹" },
    { id: 111, name: "尽量不迟到，迟到要从前门喊报告", category: "teamwork", icon: "fa-gavel", description: "尽量不迟到，迟到要从前门喊报告" },
    { id: 112, name: "任何时间不和同学打闹，不欺负、欺凌同学", category: "teamwork", icon: "fa-sort-amount-up", description: "任何时间不和同学打闹，不欺负、欺凌同学" },
    { id: 113, name: "进入教室后，保持安静，快速进入读书、写字等学习状态", category: "teamwork", icon: "fa-clock", description: "进入教室后，保持安静，快速进入读书、写字等学习状态" },
    { id: 113, name: "作为值日生认真完成当天的值日活动，保持教室的干净整洁", category: "responsibility", icon: "fa-broom", description: "作为值日生认真完成当天的值日活动，保持教室的干净整洁" },
    { id: 114, name: "能够及时清理自己的书包、书桌等，保持好个人卫生", category: "responsibility", icon: "fa-lock", description: "能够及时清理自己的书包、书桌等，保持好个人卫生" },
    { id: 115, name: "在家能够帮助父母做一些力所能及的事", category: "responsibility", icon: "fa-clock", description: "在家能够帮助父母做一些力所能及的事" },
    { id: 117, name: "日常和同学友好相处，不排挤欺负同学", category: "unity", icon: "fa-handshake", description: "日常和同学友好相处，不排挤欺负同学" },
    { id: 118, name: "在团体小组活动中，能够积极参与、认真听取别人的意见，分工协作，共同完成", category: "unity", icon: "fa-share-alt", description: "在团体小组活动中，能够积极参与、认真听取别人的意见，分工协作，共同完成" },
    { id: 119, name: "未完成作业时勇敢承认，不找任何理由", category: "honesty", icon: "fa-certificate", description: "未完成作业时勇敢承认，不找任何理由" },
    { id: 120, name: "对待考试，自己独立完成，不要抄袭别人的", category: "honesty", icon: "fa-heart", description: "对待考试，自己独立完成，不要抄袭别人的" },
    { id: 121, name: "出现问题时，不逃避自己的责任，不把问题都推到别人身上，直视自己的错误", category: "honesty", icon: "fa-balance-scale", description: "出现问题时，不逃避自己的责任，不把问题都推到别人身上，直视自己的错误" },
    { id: 122, name: "坚持好晨读、午练、晚阅读", category: "habit", icon: "fa-bed", description: "坚持好晨读、午练、晚阅读" },
    { id: 123, name: "自己的事情自己做，例如自己整理书包、自己记作业", category: "habit", icon: "fa-running", description: "自己的事情自己做，例如自己整理书包、自己记作业" },
    { id: 124, name: "有规则意识，知道在学校要遵守学校的各项规则", category: "habit", icon: "fa-backpack", description: "有规则意识，知道在学校要遵守学校的各项规则" },
    { id: 125, name: "有主动学习的意识", category: "habit", icon: "fa-gavel", description: "有主动学习的意识" },
];

// 学生数据
const studentsData = {
    student1: { name: "张小明", grade: "grade1", class: "class1", earnedStamps: [1, 4, 7], stampDates: {}, monthlyHistory: {} },
    student2: { name: "李小红", grade: "grade1", class: "class1", earnedStamps: [2, 5, 8, 11], stampDates: {}, monthlyHistory: {} },
    student3: { name: "王小华", grade: "grade2", class: "class2", earnedStamps: [3, 6, 9, 10, 12], stampDates: {}, monthlyHistory: {} }
};

// 当前状态
let currentUserType = 'teacher'; // 'teacher' 或 'parent'
let currentStudentId = '';
let currentCategory = 'all';
let currentGrade = '';
let currentClass = '';
let batchMode = false; // 批量模式
let selectedStampForBatch = null; // 选中的印章用于批量操作

// DOM元素
const teacherBtn = document.getElementById('teacherBtn');
const parentBtn = document.getElementById('parentBtn');
const teacherControls = document.getElementById('teacherControls');
const gradeSelect = document.getElementById('gradeSelect');
const classSelect = document.getElementById('classSelect');
const excelUpload = document.getElementById('excelUpload');
const resetStampsBtn = document.getElementById('resetStampsBtn');
const studentSearch = document.getElementById('studentSearch');
const studentSelect = document.getElementById('studentSelect');
const viewHistoryBtn = document.getElementById('viewHistoryBtn');
const batchOperations = document.getElementById('batchOperations');
const batchStampName = document.getElementById('batchStampName');
const batchAwardBtn = document.getElementById('batchAwardBtn');
const cancelBatchBtn = document.getElementById('cancelBatchBtn');
const stampGrid = document.getElementById('stampGrid');
const progressFill = document.getElementById('progressFill');
const currentStampsEl = document.getElementById('currentStamps');
const totalStampsEl = document.getElementById('totalStamps');
const categoryProgress = document.getElementById('categoryProgress');
const currentMonth = document.getElementById('currentMonth');
const modal = document.getElementById('stampModal');
const modalTitle = document.getElementById('modalTitle');
const modalStampImage = document.getElementById('modalStampImage');
const modalDescription = document.getElementById('modalDescription');
const modalDate = document.getElementById('modalDate');
const modalTeacher = document.getElementById('modalTeacher');
const awardStampBtn = document.getElementById('awardStampBtn');
const closeModal = document.querySelector('.close');
const confirmResetModal = document.getElementById('confirmResetModal');
const confirmResetMessage = document.getElementById('confirmResetMessage');
const confirmResetBtn = document.getElementById('confirmResetBtn');
const cancelResetBtn = document.getElementById('cancelResetBtn');
const closeConfirmReset = document.getElementById('closeConfirmReset');
const batchAwardModal = document.getElementById('batchAwardModal');
const batchStampIcon = document.getElementById('batchStampIcon');
const batchStampTitle = document.getElementById('batchStampTitle');
const batchStampDesc = document.getElementById('batchStampDesc');
const batchStudentsList = document.getElementById('batchStudentsList');
const confirmBatchAwardBtn = document.getElementById('confirmBatchAwardBtn');
const cancelBatchAwardBtn = document.getElementById('cancelBatchAwardBtn');
const closeBatchAward = document.getElementById('closeBatchAward');
const historyModal = document.getElementById('historyModal');
const historyTitle = document.getElementById('historyTitle');
const historyContent = document.getElementById('historyContent');
const closeHistory = document.getElementById('closeHistory');
const categoryTabs = document.querySelectorAll('.category-tab');

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化界面
    updateUIForUserType();
    
    // 初始化班级选项
    updateClassOptions();
    
    // 渲染印章网格
    renderStamps();
    
    // 初始化进度显示
    updateProgress();
    
    // 更新月份显示
    updateCurrentMonth();
    
    // 事件监听器
    teacherBtn.addEventListener('click', () => switchUserType('teacher'));
    parentBtn.addEventListener('click', () => switchUserType('parent'));
    gradeSelect.addEventListener('change', handleGradeChange);
    classSelect.addEventListener('change', handleClassChange);
    excelUpload.addEventListener('change', handleExcelUpload);
    
    // 添加调试信息
    console.log('resetStampsBtn 元素:', resetStampsBtn);
    if (resetStampsBtn) {
        resetStampsBtn.addEventListener('click', function() {
            console.log('重新集章按钮被点击了！');
            handleResetStamps();
        });
        console.log('重新集章按钮事件监听器已添加');
    } else {
        console.error('找不到 resetStampsBtn 元素！');
    }
    studentSearch.addEventListener('input', handleStudentSearch);
    studentSelect.addEventListener('change', handleStudentChange);
    viewHistoryBtn.addEventListener('click', showStudentHistory);
    closeModal.addEventListener('click', closeModalHandler);
    closeHistory.addEventListener('click', closeHistoryModal);
    confirmResetBtn.addEventListener('click', confirmResetStamps);
    cancelResetBtn.addEventListener('click', closeConfirmResetModal);
    closeConfirmReset.addEventListener('click', closeConfirmResetModal);
    batchAwardBtn.addEventListener('click', showBatchAwardModal);
    cancelBatchBtn.addEventListener('click', exitBatchMode);
    confirmBatchAwardBtn.addEventListener('click', confirmBatchAward);
    cancelBatchAwardBtn.addEventListener('click', closeBatchAwardModal);
    closeBatchAward.addEventListener('click', closeBatchAwardModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModalHandler();
        if (e.target === historyModal) closeHistoryModal();
        if (e.target === confirmResetModal) closeConfirmResetModal();
        if (e.target === batchAwardModal) closeBatchAwardModal();
    });
    awardStampBtn.addEventListener('click', awardStamp);
    
    // 类别标签事件
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderStamps();
        });
    });
});

// 切换用户类型
function switchUserType(type) {
    currentUserType = type;
    
    if (type === 'teacher') {
        teacherBtn.classList.add('active');
        parentBtn.classList.remove('active');
    } else {
        parentBtn.classList.add('active');
        teacherBtn.classList.remove('active');
    }
    
    // 根据用户类型更新界面
    updateUIForUserType();
}

// 根据用户类型更新界面
function updateUIForUserType() {
    if (currentUserType === 'parent') {
        // 家长端只能查看，不能授予印章
        awardStampBtn.style.display = 'none';
        // 隐藏教师控制区域
        teacherControls.style.display = 'none';
    } else {
        // 教师端可以授予印章
        awardStampBtn.style.display = 'block';
        // 显示教师控制区域
        teacherControls.style.display = 'flex';
    }
    
    // 重新渲染印章以反映权限变化
    renderStamps();
}

// 处理学生选择变化
function handleStudentChange() {
    currentStudentId = studentSelect.value;
    
    // 显示或隐藏查看历史按钮
    if (currentStudentId && currentUserType === 'teacher') {
        viewHistoryBtn.style.display = 'flex';
    } else {
        viewHistoryBtn.style.display = 'none';
    }
    
    renderStamps();
    updateProgress();
}

// 渲染印章网格
function renderStamps() {
    stampGrid.innerHTML = '';
    
    // 如果没有选择学生，显示提示信息
    if (!currentStudentId) {
        stampGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px;">请先选择年级、班级和学生</p>';
        return;
    }
    
    // 获取当前学生的已获得印章
    const student = studentsData[currentStudentId];
    const earnedStamps = student ? student.earnedStamps : [];
    
    // 根据学生年级选择印章数据
    let currentStampsData;
    if (student && student.grade === 'grade2') {
        currentStampsData = grade2StampsData;
    } else {
        currentStampsData = stampsData;
    }
    
    // 根据类别筛选印章
    const filteredStamps = currentCategory === 'all' 
        ? currentStampsData 
        : currentStampsData.filter(stamp => stamp.category === currentCategory);
    
    // 如果没有印章数据，显示提示
    if (filteredStamps.length === 0) {
        stampGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999; padding: 40px;">该类别下暂无印章</p>';
        return;
    }
    
    // 渲染每个印章
    filteredStamps.forEach(stamp => {
        const isEarned = earnedStamps.includes(stamp.id);
        const stampEl = createStampElement(stamp, isEarned);
        stampGrid.appendChild(stampEl);
    });
}

// 创建印章元素
function createStampElement(stamp, isEarned) {
    const stampEl = document.createElement('div');
    stampEl.className = `stamp-item ${isEarned ? 'earned' : ''}`;
    stampEl.dataset.stampId = stamp.id;
    
    // 截取印章名称，如果太长则显示省略号
    const displayName = stamp.name.length > 25 ? stamp.name.substring(0, 25) + '...' : stamp.name;
    
    stampEl.innerHTML = `
        <div class="stamp-icon">
            <i class="fas ${stamp.icon}"></i>
        </div>
        <div class="stamp-name" title="${stamp.name}">${displayName}</div>
        <div class="stamp-category">${getCategoryName(stamp.category)}</div>
        ${currentUserType === 'teacher' ? `<div class="stamp-actions">
            <button class="batch-select-btn" data-stamp-id="${stamp.id}" title="选择进行批量操作">
                <i class="fas fa-check-square"></i>
            </button>
        </div>` : ''}
    `;
    
    // 添加点击事件
    stampEl.addEventListener('click', (e) => {
        // 如果点击的是批量选择按钮，阻止事件冒泡
        if (e.target.closest('.batch-select-btn')) {
            e.stopPropagation();
            handleBatchSelect(stamp);
            return;
        }
        
        // 如果是已获得的印章且是教师端，可以取消
        if (isEarned && currentUserType === 'teacher') {
            openCancelStampModal(stamp);
        } else {
            openStampModal(stamp, isEarned);
        }
    });
    
    return stampEl;
}

// 获取类别完成状态
function getCategoryCompletionStatus(category, studentId) {
    if (!studentId) return { completed: 0, total: 0, isComplete: false };
    
    const student = studentsData[studentId];
    const earnedStamps = student ? student.earnedStamps : [];
    
    // 根据学生年级选择印章数据
    let currentStampsData;
    if (student && student.grade === 'grade2') {
        currentStampsData = grade2StampsData;
    } else {
        currentStampsData = stampsData;
    }
    
    const categoryStamps = currentStampsData.filter(stamp => stamp.category === category);
    const earnedCategoryStamps = categoryStamps.filter(stamp => earnedStamps.includes(stamp.id));
    
    return {
        completed: earnedCategoryStamps.length,
        total: categoryStamps.length,
        isComplete: categoryStamps.length > 0 && earnedCategoryStamps.length === categoryStamps.length
    };
}

// 获取类别名称
function getCategoryName(category) {
    const categoryNames = {
        study: '学习',
        behavior: '文明',
        teamwork: '纪律',
        responsibility: '劳动',
        unity: '团结',
        honesty: '诚信',
        habit: '习惯'
    };
    return categoryNames[category] || category;
}

// 打开印章模态框
function openStampModal(stamp, isEarned) {
    modalTitle.textContent = stamp.name;
    modalStampImage.innerHTML = `<i class="fas ${stamp.icon}"></i>`;
    modalDescription.textContent = stamp.description;
    
    // 如果印章已获得，显示完成日期
    if (isEarned) {
        const student = studentsData[currentStudentId];
        if (student && student.stampDates && student.stampDates[stamp.id]) {
            modalDate.textContent = `完成日期: ${student.stampDates[stamp.id]}`;
        } else {
            // 如果没有记录日期（旧数据），显示默认日期
            modalDate.textContent = `完成日期: 较早完成`;
        }
        awardStampBtn.textContent = '已完成';
        awardStampBtn.disabled = true;
        awardStampBtn.style.backgroundColor = '#ccc';
    } else {
        modalDate.textContent = '';
        modalTeacher.textContent = '';
        awardStampBtn.textContent = '已完成';
        awardStampBtn.disabled = false;
        awardStampBtn.style.backgroundColor = '';
    }
    
    // 根据用户类型设置按钮可见性
    if (currentUserType === 'parent') {
        awardStampBtn.style.display = 'none';
    } else {
        awardStampBtn.style.display = isEarned ? 'none' : 'block';
    }
    
    // 存储当前印章ID和动作类型
    modal.dataset.stampId = stamp.id;
    modal.dataset.action = 'award'; // 重置为正常授予模式
    
    // 显示模态框
    modal.style.display = 'flex';
}

// 显示学生历史
function showStudentHistory() {
    if (!currentStudentId) {
        showNotification('请先选择学生！', 'error');
        return;
    }
    
    const student = studentsData[currentStudentId];
    if (!student) {
        showNotification('学生数据不存在！', 'error');
        return;
    }
    
    historyTitle.textContent = `${student.name}的集章历史`;
    
    // 渲染历史内容
    renderHistoryContent(student);
    
    // 显示模态框
    historyModal.style.display = 'flex';
}

// 渲染历史内容
function renderHistoryContent(student) {
    historyContent.innerHTML = '';
    
    // 获取所有历史记录
    const history = student.monthlyHistory || {};
    const months = Object.keys(history).sort().reverse(); // 按时间倒序
    
    if (months.length === 0) {
        historyContent.innerHTML = '<p style="text-align: center; color: #999; padding: 40px;">暂无历史记录</p>';
        return;
    }
    
    // 计算能否成为榜样之星
    const starMonths = months.filter(month => history[month].awards >= 5);
    const canBeModelStar = starMonths.length >= 3; // 假设需要3个月以上获得5枚奖章
    
    // 显示榜样之星状态
    if (canBeModelStar) {
        const starDiv = document.createElement('div');
        starDiv.className = 'star-status';
        starDiv.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px; border: 2px solid #ffd700;">
                <h3 style="color: #ff6f00; margin: 0;">⭐ 恭喜！该学生已符合“榜样之星”条件 ⭐</h3>
                <p style="margin: 5px 0 0 0; color: #856404;">已有${starMonths.length}个月份获得5枚或以上奖章</p>
            </div>
        `;
        historyContent.appendChild(starDiv);
    }
    
    // 显示每个月的详细记录
    months.forEach(month => {
        const monthData = history[month];
        const monthDiv = document.createElement('div');
        monthDiv.className = 'history-month-detail';
        
        const isStarMonth = monthData.awards >= 5;
        const [year, monthNum] = month.split('-');
        
        // 获取学生年级对应的印章数据
        const currentStampsData = student.grade === 'grade2' ? grade2StampsData : stampsData;
        
        // 创建月份标题
        const monthHeader = document.createElement('div');
        monthHeader.className = 'month-header';
        monthHeader.innerHTML = `
            <h3>${year}年${parseInt(monthNum)}月 ${isStarMonth ? '⭐' : ''}</h3>
            <div class="month-awards">
                <span class="award-count">${monthData.awards}</span>
                <span class="award-text">枚奖章</span>
                ${isStarMonth ? '<span class="star-badge">达标月份</span>' : ''}
            </div>
        `;
        monthDiv.appendChild(monthHeader);
        
        // 创建各个类别的详细内容
        const categories = [
            { key: 'study', name: '学习榜样' },
            { key: 'behavior', name: '文明榜样' },
            { key: 'teamwork', name: '协作榜样' },
            { key: 'responsibility', name: '责任榜样' },
            { key: 'unity', name: '团结榜样' },
            { key: 'honesty', name: '诚信榜样' },
            { key: 'habit', name: '习惯榜样' }
        ];
        
        categories.forEach(category => {
            const categoryStamps = currentStampsData.filter(stamp => stamp.category === category.key);
            if (categoryStamps.length === 0) return;
            
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'category-detail';
            
            // 检查该类别是否完成
            const completedStamps = categoryStamps.filter(stamp => 
                monthData.earnedStamps.includes(stamp.id)
            );
            const isCompleted = completedStamps.length === categoryStamps.length;
            
            // 计算奖章获得日期（最后一个细则完成的日期）
            let badgeDate = '';
            if (isCompleted && monthData.stampDates) {
                const dates = completedStamps
                    .map(stamp => monthData.stampDates[stamp.id])
                    .filter(date => date)
                    .sort();
                badgeDate = dates[dates.length - 1] || '';
            }
            
            // 创建类别标题
            let categoryHeader = `
                <div class="category-header ${isCompleted ? 'completed' : ''}">
                    <h4>
                        ${category.name}
                        ${isCompleted ? `<span class="badge-icon">🏆</span>` : ''}
                    </h4>
                    ${isCompleted ? `<span class="badge-date">奖章获得日期：${badgeDate}</span>` : ''}
                </div>
            `;
            
            // 创建细则列表
            let rulesHtml = '<div class="rules-list">';
            categoryStamps.forEach(stamp => {
                const isStampCompleted = monthData.earnedStamps.includes(stamp.id);
                const stampDate = isStampCompleted && monthData.stampDates ? 
                    monthData.stampDates[stamp.id] || '完成日期未记录' : '';
                
                rulesHtml += `
                    <div class="rule-item ${isStampCompleted ? 'completed' : 'not-completed'}">
                        <span class="rule-status">${isStampCompleted ? '✓' : '×'}</span>
                        <span class="rule-text">${stamp.description}</span>
                        ${isStampCompleted ? `<span class="rule-date">${stampDate}</span>` : ''}
                    </div>
                `;
            });
            rulesHtml += '</div>';
            
            categoryDiv.innerHTML = categoryHeader + rulesHtml;
            monthDiv.appendChild(categoryDiv);
        });
        
        historyContent.appendChild(monthDiv);
    });
}

// 关闭历史模态框
function closeHistoryModal() {
    historyModal.style.display = 'none';
}

// 处理批量选择
function handleBatchSelect(stamp) {
    if (!currentGrade || !currentClass) {
        showNotification('请先选择年级和班级！', 'error');
        return;
    }
    
    selectedStampForBatch = stamp;
    batchMode = true;
    
    // 显示批量操作栏
    batchStampName.textContent = `已选择：${stamp.name}`;
    batchOperations.style.display = 'block';
    
    showNotification(`已选择印章：${stamp.name}，可进行批量操作`);
}

// 退出批量模式
function exitBatchMode() {
    batchMode = false;
    selectedStampForBatch = null;
    if (batchOperations) {
        batchOperations.style.display = 'none';
    }
    // 清理模态框状态
    if (modal.dataset.action === 'cancel') {
        modal.dataset.action = '';
        modal.dataset.stampId = '';
    }
    showNotification('已退出批量模式');
}

// 显示批量授予模态框
function showBatchAwardModal() {
    if (!selectedStampForBatch) {
        showNotification('请先选择一个印章！', 'error');
        return;
    }
    
    if (!batchStampIcon || !batchStampTitle || !batchStampDesc) {
        showNotification('界面元素未正确加载！', 'error');
        return;
    }
    
    // 设置印章信息
    batchStampIcon.innerHTML = `<i class="fas ${selectedStampForBatch.icon}"></i>`;
    batchStampTitle.textContent = selectedStampForBatch.name;
    batchStampDesc.textContent = selectedStampForBatch.description;
    
    // 获取当前班级的所有学生
    const classStudents = getClassStudents();
    
    if (classStudents.length === 0) {
        showNotification('当前班级没有学生！', 'error');
        return;
    }
    
    // 渲染学生列表
    renderBatchStudentsList(classStudents);
    
    // 显示模态框
    if (batchAwardModal) {
        batchAwardModal.style.display = 'flex';
    }
}

// 获取当前班级的所有学生
function getClassStudents() {
    return Object.entries(studentsData)
        .map(([id, student]) => ({ id, ...student }))
        .filter(student => 
            student.grade === currentGrade && 
            student.class === currentClass
        );
}

// 渲染批量学生列表
function renderBatchStudentsList(students) {
    if (!batchStudentsList) {
        console.error('批量学生列表元素不存在');
        return;
    }
    
    if (!selectedStampForBatch) {
        console.error('没有选中的印章');
        return;
    }
    
    batchStudentsList.innerHTML = '';
    
    students.forEach(student => {
        const hasStamp = student.earnedStamps.includes(selectedStampForBatch.id);
        const studentEl = document.createElement('div');
        studentEl.className = `student-item ${hasStamp ? 'selected' : ''}`;
        studentEl.textContent = student.name;
        
        if (hasStamp) {
            studentEl.title = '已完成此项目';
        }
        
        batchStudentsList.appendChild(studentEl);
    });
}

// 确认批量授予
function confirmBatchAward() {
    if (!selectedStampForBatch) {
        showNotification('请先选择一个印章！', 'error');
        return;
    }
    
    const classStudents = getClassStudents();
    let awardedCount = 0;
    
    // 为所有没有该印章的学生授予印章
    classStudents.forEach(student => {
        if (!student.earnedStamps.includes(selectedStampForBatch.id)) {
            student.earnedStamps.push(selectedStampForBatch.id);
            
            // 记录获得印章的日期
            if (!student.stampDates) {
                student.stampDates = {};
            }
            student.stampDates[selectedStampForBatch.id] = getCurrentDate();
            
            awardedCount++;
        }
    });
    
    // 保存印章名称用于显示
    const stampName = selectedStampForBatch.name;
    
    // 关闭模态框
    closeBatchAwardModal();
    
    // 退出批量模式
    exitBatchMode();
    
    // 显示成功消息
    showNotification(`批量标记已完成成功！为${awardedCount}名学生标记了“${stampName}”为已完成`);
    
    // 更新界面
    renderStamps();
    updateProgress();
}

// 关闭批量授予模态框
function closeBatchAwardModal() {
    if (batchAwardModal) {
        batchAwardModal.style.display = 'none';
    }
}

// 打开取消印章模态框
function openCancelStampModal(stamp) {
    modalTitle.textContent = `取消印章：${stamp.name}`;
    modalStampImage.innerHTML = `<i class="fas ${stamp.icon}"></i>`;
    modalDescription.textContent = stamp.description;
    
    // 获取当前选中的学生，如果没有选中则显示所有获得该印章的学生
    if (currentStudentId) {
        const student = studentsData[currentStudentId];
        modalDate.textContent = `完成日期: ${student.stampDates[stamp.id] || '较早获得'}`;
        awardStampBtn.textContent = '取消已完成';
        awardStampBtn.style.backgroundColor = '#f44336';
    } else {
        modalDate.textContent = '点击取消按钮可以为所有获得该印章的学生取消';
        awardStampBtn.textContent = '批量取消已完成';
        awardStampBtn.style.backgroundColor = '#f44336';
    }
    
    awardStampBtn.disabled = false;
    awardStampBtn.style.display = 'block';
    
    // 存储当前印章ID和取消动作
    modal.dataset.stampId = stamp.id;
    modal.dataset.action = 'cancel';
    
    // 显示模态框
    modal.style.display = 'flex';
}

// 关闭模态框
function closeModalHandler() {
    modal.style.display = 'none';
    // 清理模态框状态
    modal.dataset.action = '';
    modal.dataset.stampId = '';
    // 重置按钮样式
    awardStampBtn.style.backgroundColor = '';
    awardStampBtn.disabled = false;
}

// 授予印章
function awardStamp() {
    const stampId = parseInt(modal.dataset.stampId);
    const action = modal.dataset.action;
    
    // 检查动作类型
    if (action === 'cancel') {
        // 取消印章操作
        if (currentStudentId) {
            // 取消单个学生的印章
            cancelStudentStamp(currentStudentId, stampId);
        } else {
            // 批量取消印章
            batchCancelStamp(stampId);
        }
    } else {
        // 正常授予印章操作
        if (!currentStudentId) {
            alert('请先选择一个学生');
            return;
        }
        
        const student = studentsData[currentStudentId];
        if (!student.earnedStamps.includes(stampId)) {
            student.earnedStamps.push(stampId);
            
            // 记录获得印章的日期
            if (!student.stampDates) {
                student.stampDates = {};
            }
            student.stampDates[stampId] = getCurrentDate();
            
            // 显示成功消息
            showNotification('已完成标记成功！');
        }
    }
    
    // 重新渲染印章和进度
    renderStamps();
    updateProgress();
    
    // 关闭模态框
    closeModalHandler();
}

// 取消学生印章
function cancelStudentStamp(studentId, stampId) {
    const student = studentsData[studentId];
    if (student && student.earnedStamps.includes(stampId)) {
        // 移除印章
        student.earnedStamps = student.earnedStamps.filter(id => id !== stampId);
        
        // 移除日期记录
        if (student.stampDates && student.stampDates[stampId]) {
            delete student.stampDates[stampId];
        }
        
        showNotification('取消已完成标记成功！');
    }
}

// 批量取消印章
function batchCancelStamp(stampId) {
    const classStudents = getClassStudents();
    let canceledCount = 0;
    
    classStudents.forEach(student => {
        if (student.earnedStamps.includes(stampId)) {
            student.earnedStamps = student.earnedStamps.filter(id => id !== stampId);
            
            // 移除日期记录
            if (student.stampDates && student.stampDates[stampId]) {
                delete student.stampDates[stampId];
            }
            
            canceledCount++;
        }
    });
    
    showNotification(`批量取消已完成标记成功！为${canceledCount}名学生取消了已完成标记`);
}

// 更新进度条
function updateProgress() {
    if (!currentStudentId) {
        progressFill.style.width = '0%';
        currentStampsEl.textContent = '0';
        renderCategoryProgress();
        return;
    }
    
    const student = studentsData[currentStudentId];
    const earnedStamps = student ? student.earnedStamps : [];
    
    // 根据学生年级选择印章数据
    let currentStampsData;
    if (student && student.grade === 'grade2') {
        currentStampsData = grade2StampsData;
    } else {
        currentStampsData = stampsData;
    }
    
    // 计算各类别下完成的奖章数量
    const categories = ['study', 'behavior', 'teamwork', 'responsibility', 'unity', 'honesty', 'habit'];
    let completedCategories = 0;
    
    categories.forEach(category => {
        const categoryStamps = currentStampsData.filter(stamp => stamp.category === category);
        const earnedCategoryStamps = categoryStamps.filter(stamp => earnedStamps.includes(stamp.id));
        
        // 如果该类别下所有细则都完成，则该类别奖章完成
        if (categoryStamps.length > 0 && earnedCategoryStamps.length === categoryStamps.length) {
            completedCategories++;
        }
    });
    
    const totalCategories = categories.length; // 总共7个类别奖章
    const percentage = (completedCategories / totalCategories) * 100;
    
    progressFill.style.width = `${percentage}%`;
    currentStampsEl.textContent = completedCategories;
    totalStampsEl.textContent = totalCategories;
    
    // 更新类别进度显示
    renderCategoryProgress();
}

// 渲染类别进度
function renderCategoryProgress() {
    if (!categoryProgress) return;
    
    categoryProgress.innerHTML = '';
    
    if (!currentStudentId) {
        return;
    }
    
    const categories = ['study', 'behavior', 'teamwork', 'responsibility', 'unity', 'honesty', 'habit'];
    
    categories.forEach(category => {
        const status = getCategoryCompletionStatus(category, currentStudentId);
        const categoryEl = document.createElement('div');
        categoryEl.className = `category-item ${status.isComplete ? 'completed' : ''}`;
        
        categoryEl.innerHTML = `
            <div class="category-name">${getCategoryName(category)}</div>
            <div class="category-status">${status.completed}/${status.total}</div>
            <div class="category-badge"></div>
        `;
        
        categoryProgress.appendChild(categoryEl);
    });
}

// 显示通知
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
    notification.style.zIndex = '2000';
    notification.style.animation = 'slideIn 0.3s, slideOut 0.3s 2.7s';
    notification.style.animationFillMode = 'forwards';
    
    // 根据类型设置样式
    if (type === 'error') {
        notification.style.backgroundColor = '#f44336';
        notification.style.color = 'white';
    } else {
        notification.style.backgroundColor = '#4caf50';
        notification.style.color = 'white';
    }
    
    document.body.appendChild(notification);
    
    // 3秒后移除通知
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

// 获取当前月份标识
function getCurrentMonthKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

// 更新当前月份显示
function updateCurrentMonth() {
    if (!currentMonth) return;
    
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    currentMonth.textContent = `当前月份：${year}年${month}月`;
}

// 处理重新集章
function handleResetStamps() {
    console.log('handleResetStamps 被调用了'); // 调试信息
    console.log('currentGrade:', currentGrade, 'currentClass:', currentClass); // 调试信息
    
    if (!currentGrade || !currentClass) {
        showNotification('请先选择年级和班级！', 'error');
        return;
    }
    
    // 显示自定义确认模态框
    const gradeName = getGradeName(currentGrade);
    const className = getClassName(currentClass);
    confirmResetMessage.textContent = `确定要为${gradeName}${className}的所有学生重置集章状态吗？`;
    confirmResetModal.style.display = 'flex';
}

// 确认重置集章
function confirmResetStamps() {
    closeConfirmResetModal();
    
    const gradeName = getGradeName(currentGrade);
    const className = getClassName(currentClass);
    showNotification(`正在为${gradeName}${className}重置集章状态...`);
    
    resetClassStamps();
}

// 关闭确认重置模态框
function closeConfirmResetModal() {
    confirmResetModal.style.display = 'none';
}

// 重置班级集章状态
function resetClassStamps() {
    const currentMonthKey = getCurrentMonthKey();
    let resetCount = 0;
    
    // 遍历所有学生，找到当前班级的学生
    Object.keys(studentsData).forEach(studentId => {
        const student = studentsData[studentId];
        if (student.grade === currentGrade && student.class === currentClass) {
            // 保存当前月份的集章记录到历史中
            if (!student.monthlyHistory) {
                student.monthlyHistory = {};
            }
            
            // 计算当前月份获得的奖章数
            const currentAwards = calculateMonthlyAwards(student.earnedStamps, student.grade);
            
            student.monthlyHistory[currentMonthKey] = {
                earnedStamps: [...student.earnedStamps],
                stampDates: { ...student.stampDates },
                awards: currentAwards,
                resetDate: getCurrentDate()
            };
            
            // 清空当前集章状态
            student.earnedStamps = [];
            student.stampDates = {};
            
            resetCount++;
        }
    });
    
    // 显示成功消息
    showNotification(`成功为${getGradeName(currentGrade)}${getClassName(currentClass)}的${resetCount}名学生重置了集章状态！`);
    
    // 更新界面
    renderStamps();
    updateProgress();
}

// 计算月度奖章数
function calculateMonthlyAwards(earnedStamps, studentGrade) {
    const categories = ['study', 'behavior', 'teamwork', 'responsibility', 'unity', 'honesty', 'habit'];
    let completedCategories = 0;
    
    // 根据学生年级选择印章数据
    let currentStampsData;
    if (studentGrade === 'grade2') {
        currentStampsData = grade2StampsData;
    } else {
        currentStampsData = stampsData;
    }
    
    categories.forEach(category => {
        const categoryStamps = currentStampsData.filter(stamp => stamp.category === category);
        const earnedCategoryStamps = categoryStamps.filter(stamp => earnedStamps.includes(stamp.id));
        
        if (categoryStamps.length > 0 && earnedCategoryStamps.length === categoryStamps.length) {
            completedCategories++;
        }
    });
    
    return completedCategories;
}

// 获取当前日期（格式化显示）
function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

// 获取随机日期（模拟数据）
function getRandomDate() {
    const start = new Date(2023, 8, 1); // 2023年9月1日
    const end = new Date(); // 今天
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime).toLocaleDateString('zh-CN');
}

// 获取随机教师名称（模拟数据）
function getRandomTeacher() {
    const teachers = ['张老师', '李老师', '王老师', '刘老师', '陈老师'];
    return teachers[Math.floor(Math.random() * teachers.length)];
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// 处理年级选择变化
function handleGradeChange() {
    currentGrade = gradeSelect.value;
    currentClass = ''; // 重置班级选择
    classSelect.value = '';
    currentStudentId = ''; // 重置学生选择
    studentSelect.value = '';
    
    // 更新班级选择框的选项
    updateClassOptions();
    
    // 更新学生列表
    updateStudentList();
    
    // 重新渲染印章
    renderStamps();
    updateProgress();
}

// 更新班级选择框的选项
function updateClassOptions() {
    // 清空现有选项
    classSelect.innerHTML = '<option value="">选择班级</option>';
    
    // 定义所有可能的班级（1班到10班）
    const allPossibleClasses = [];
    for (let i = 1; i <= 10; i++) {
        allPossibleClasses.push(`class${i}`);
    }
    
    // 获取已有学生的班级
    const existingClasses = new Set();
    Object.entries(studentsData).forEach(([id, student]) => {
        // 如果选择了年级，只添加该年级下的班级
        if (currentGrade && student.grade !== currentGrade) {
            return;
        }
        existingClasses.add(student.class);
    });
    
    // 添加所有可能的班级选项
    allPossibleClasses.forEach(className => {
        const option = document.createElement('option');
        option.value = className;
        
        // 将内部值转换为显示值
        const classNum = className.replace('class', '');
        option.textContent = `${classNum}班`;
        
        // 如果该班级有学生，可以添加特殊样式或标记
        if (existingClasses.has(className)) {
            // 可以在这里添加特殊样式，例如加粗或不同颜色
            option.style.fontWeight = 'bold';
        }
        
        classSelect.appendChild(option);
    });
}

// 处理班级选择变化
function handleClassChange() {
    currentClass = classSelect.value;
    currentStudentId = ''; // 重置学生选择
    studentSelect.value = '';
    
    // 更新学生列表
    updateStudentList();
    
    // 重新渲染印章
    renderStamps();
    updateProgress();
}

// 处理Excel上传
function handleExcelUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // 检查是否选择了年级和班级
    if (!currentGrade || !currentClass) {
        showNotification('请先选择年级和班级！', 'error');
        event.target.value = ''; // 清空文件选择
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            // 使用SheetJS解析Excel文件
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            
            // 获取第一个工作表
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            
            // 将工作表转换为JSON
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            
            // 处理学生数据
            const students = processExcelData(jsonData);
            
            // 更新学生数据
            updateStudentsData(students);
            
            // 显示成功消息
            showNotification(`成功为${getGradeName(currentGrade)}${getClassName(currentClass)}上传了${students.length}名学生！`);
            
            // 更新学生列表
            updateStudentList();
            
            // 清空文件选择，允许重新上传
            event.target.value = '';
        } catch (error) {
            showNotification('文件解析失败，请检查文件格式！', 'error');
            console.error('Excel解析错误:', error);
            event.target.value = ''; // 清空文件选择
        }
    };
    reader.readAsArrayBuffer(file);
}

// 处理Excel数据
function processExcelData(jsonData) {
    if (!jsonData || !Array.isArray(jsonData) || jsonData.length === 0) {
        showNotification('Excel文件中没有找到有效数据！', 'error');
        return [];
    }
    
    const validStudents = [];
    
    jsonData.forEach((row, index) => {
        // 确保row是一个对象
        if (!row || typeof row !== 'object') {
            console.warn(`第${index + 1}行数据格式不正确，已跳过`);
            return;
        }
        
        // 获取姓名，支持多种可能的列名
        const name = row.姓名 || row.name || row.学生姓名 || row.学生 || row.Name || row['学生姓名'] || row['姓名'];
        
        // 如果没有姓名，跳过这行
        if (!name || String(name).trim() === '') {
            console.warn(`第${index + 1}行没有姓名，已跳过`);
            return;
        }
        
        // 生成唯一ID
        const id = `${currentGrade}_${currentClass}_${index}_${Date.now()}`;
        
        // 使用当前选择的年级和班级
        const student = {
            id: id,
            name: String(name).trim(),
            grade: currentGrade,
            class: currentClass
        };
        
        validStudents.push(student);
    });
    
    return validStudents;
}

// 获取年级名称
function getGradeName(gradeValue) {
    const gradeNames = {
        'grade1': '一年级',
        'grade2': '二年级',
        'grade3': '三年级',
        'grade4': '四年级',
        'grade5': '五年级',
        'grade6': '六年级'
    };
    return gradeNames[gradeValue] || gradeValue;
}

// 获取班级名称
function getClassName(classValue) {
    if (!classValue) return '';
    const classNum = classValue.replace('class', '');
    return `${classNum}班`;
}

// 将年级转换为系统内部使用的值
function convertGradeToValue(gradeText) {
    // 检查gradeText是否存在
    if (!gradeText) return 'grade1'; // 默认值
    
    const gradeMap = {
        '一年级': 'grade1',
        '二年级': 'grade2',
        '三年级': 'grade3',
        '四年级': 'grade4',
        '五年级': 'grade5',
        '六年级': 'grade6',
        '1': 'grade1',
        '2': 'grade2',
        '3': 'grade3',
        '4': 'grade4',
        '5': 'grade5',
        '6': 'grade6'
    };
    
    // 确保gradeText是字符串
    const gradeStr = String(gradeText);
    return gradeMap[gradeStr] || 'grade1'; // 如果找不到匹配项，使用默认值
}

// 将班级转换为系统内部使用的值
function convertClassToValue(classText) {
    // 检查classText是否存在
    if (!classText) return 'class1'; // 默认值
    
    // 处理各种班级格式，如"1班"、"班1"、"1"等
    const classNum = String(classText).replace(/[^0-9]/g, '');
    return classNum ? `class${classNum}` : 'class1'; // 如果无法提取数字，使用默认值
}

// 更新学生数据
function updateStudentsData(newStudents) {
    if (!newStudents || newStudents.length === 0) {
        showNotification('没有有效的学生数据！', 'error');
        return;
    }
    
    newStudents.forEach(student => {
        // 检查是否已有同名学生在同年级同班级
        const existingStudentId = Object.keys(studentsData).find(id => {
            const existing = studentsData[id];
            return existing.name === student.name && 
                   existing.grade === student.grade && 
                   existing.class === student.class;
        });
        
        if (existingStudentId) {
            // 如果学生已存在，保留其印章数据，只更新基本信息
            console.log(`学生 ${student.name} 已存在，保留原有印章数据`);
        } else {
            // 如果是新学生，创建新记录
            studentsData[student.id] = {
                name: student.name,
                grade: student.grade,
                class: student.class,
                earnedStamps: [],
                stampDates: {}, // 添加印章获得日期记录
                monthlyHistory: {} // 添加月度历史记录
            };
        }
    });
    
    // 更新班级选项
    updateClassOptions();
}

// 处理学生搜索
function handleStudentSearch() {
    const searchTerm = studentSearch.value.toLowerCase().trim();
    
    // 获取当前年级和班级筛选后的学生
    let filteredStudents = filterStudentsByGradeAndClass();
    
    // 如果有搜索词，进一步筛选
    if (searchTerm) {
        filteredStudents = filteredStudents.filter(student => 
            student.name.toLowerCase().includes(searchTerm)
        );
    }
    
    // 更新学生选择下拉框
    updateStudentSelectOptions(filteredStudents);
}

// 根据年级和班级筛选学生
function filterStudentsByGradeAndClass() {
    return Object.entries(studentsData)
        .map(([id, student]) => ({ id, ...student }))
        .filter(student => {
            // 如果选择了年级，只显示该年级的学生
            if (currentGrade && student.grade !== currentGrade) {
                return false;
            }
            // 如果选择了班级，只显示该班级的学生
            if (currentClass && student.class !== currentClass) {
                return false;
            }
            return true;
        });
}

// 更新学生列表
function updateStudentList() {
    // 根据年级和班级筛选学生
    const filteredStudents = filterStudentsByGradeAndClass();
    
    // 更新学生选择下拉框
    updateStudentSelectOptions(filteredStudents);
}

// 更新学生选择下拉框选项
function updateStudentSelectOptions(students) {
    // 清空现有选项
    studentSelect.innerHTML = '<option value="">选择学生</option>';
    
    // 添加筛选后的学生选项
    students.forEach(student => {
        const option = document.createElement('option');
        option.value = student.id;
        // 显示学生姓名和所在班级
        const gradeName = getGradeName(student.grade);
        const className = getClassName(student.class);
        option.textContent = `${student.name} (${gradeName}${className})`;
        studentSelect.appendChild(option);
    });
    
    // 如果当前选择的学生不在筛选结果中，清空选择
    if (currentStudentId && !students.find(s => s.id === currentStudentId)) {
        currentStudentId = '';
        studentSelect.value = '';
    }
}