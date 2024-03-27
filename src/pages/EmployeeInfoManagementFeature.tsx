import React, { useState } from 'react';

interface FormState {
    company: number;
    employeeName: string;
    positionType: number;
    isEmployed: boolean;
}

const EmployeeInfoManagementFeature: React.FC = () => {
  // 定义表单的状态
  const [formState, setFormState] = useState<FormState>({
    company: 1,
    employeeName: '',
    positionType: 1,
    isEmployed: false,
  });

  // 定义搜索结果的状态
  const [searchResults, setSearchResults] = useState([]);

  // 处理表单输入框和复选框变化的函数
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormState({
      ...formState,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  // 处理表单下拉选择框变化的函数
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: Number(value),
    });
  };

  // 处理表单提交的函数
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // 执行查询逻辑，然后将结果设置到 `searchResults`
    console.log(`formState: ${formState}`)
  };

  return (
    <div className='employee-management-container'>
      <h2>社員管理</h2>
      <div className='search-form'>
        <form onSubmit={handleSubmit}>
            <label>
                所属会社
                <select name='company' value={formState.company} onChange={handleSelectChange}>
                    <option value='1'>株式会社ブライトスター</option>
                    <option value='2'>株式会社トップクラウド</option>
                </select> 
            </label>
            <label>
                社員名
                <input
                    type='text'
                    name='employeeName'
                    value={formState.employeeName}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                職業種類
                <select name='positionType' value={formState.positionType} onChange={handleSelectChange}>
                    <option value='1'>役員</option>
                    <option value='2'>総務</option>
                    <option value='3'>IT営業</option>
                    <option value='4'>ITエンジニア</option>
                    <option value='5'>不動産スタッフ</option>
                    <option value='6'>個人事業主</option>
                </select>
            </label>
            <label>
                在職
                <input
                    type='checkbox'
                    name='isEmployed'
                    checked={formState.isEmployed}
                    onChange={handleInputChange}
                />
            </label>
            <button type="submit">查询</button>
        </form>
      </div>
      <div>
        <h2>社員一覧</h2>
        <div>
            <label>件数</label>
        </div>
        <table>
            <thead>
                <tr>
                <th>所属会社</th>
                <th>社員名</th>
                <th>性別</th>
                <th>職業種類</th>
                <th>入社日</th>
                <th>退社日</th>
                <th>職務経歴書</th>
                <th>編集</th>
                </tr>

            </thead>
            <tbody>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeInfoManagementFeature;
