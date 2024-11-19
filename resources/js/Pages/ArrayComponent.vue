<template>

    <div class="container">
        <el-table :data="users" stripe style="width: 100%">
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="age" label="Age" width="180" />
            <!-- Custom rendering for 'active' column -->
            <el-table-column label="Active">
                <template #default="scope">
                    <span v-if="scope.row.active">Yes</span>
                    <span v-else>No</span>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="Operations" min-width="120">
                <template #default="scope">
                    <el-button @click="DeleteRecord(scope.row.id)" link type="primary" size="small">
                        Remove
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="d-flex justify-content-start mt-4">
        <el-radio-group v-model="radio1">
            <el-radio value="0" size="large">Normal</el-radio>
            <el-radio value="1" size="large">Compact</el-radio>
            <el-radio value="2" size="large">Unique/UniqueBy</el-radio>
            <!-- <el-radio value="3" size="large">Remove</el-radio> -->
            <el-radio value="3" size="large">TakeWhile</el-radio>
            <el-radio value="4" size="large">Reverse</el-radio>
        </el-radio-group> 
</div>

    </div>

</template>
<script setup>
import Layout from '../components/MainLayout.vue';
import { ref, watch } from 'vue';
import  compact  from 'lodash/compact';
import { uniqBy } from 'lodash';
import { remove } from 'lodash';
import { takeWhile } from 'lodash';
import { reverse } from 'lodash';


const radio1 = ref('0');


defineOptions({
    layout: Layout,
});

const users = ref([
            { id: 1, name: 'John', age: 34, active: true },
            { id: 2, name: 'Jane', age: 25, active: false },
            { id: 3, name: '', age: 40, active: true },
            { id: 4, name: 'Mike', age: null, active: true },
            { id: 5, name: 'Ronni', age: 40, active: null },
            { id: 6, name: 'Perker', age: 26, active: false },
            { id: 7, name: 'Leon', age: 34, active: false }
        ]);

watch(radio1, (newValue) => {
   

    switch (newValue) {

        case "1":
        compactArray();
            break;
        case "2":
        uniqueArray();
            //console.log("Value is 2");
            break;
        case "3":
       // takeWhileActive();
       takeWhileAge();
            break;
        case "4":
           // console.log("Value is 4");
        
        reverseArray();   
            break;
        case "5":
            console.log("Value is 5");
            break;
        default:

         normal();
            //console.log("Value is something else");
   
        }

   

  });

  const normal = () =>{

        users.value=[
            { id: 1, name: 'John', age: 34, active: true },
            { id: 2, name: 'Jane', age: 25, active: false },
            { id: 3, name: '', age: 40, active: true },
            { id: 4, name: 'Mike', age: null, active: true },
            { id: 6, name: 'Ronni', age: 40, active: null },
            { id: 7, name: 'Perker', age: 26, active: false },
            { id: 8, name: 'Leon', age: 34, active: false }
        ];
  }

  const compactArray = () =>{

        users.value = compact(users.value.map((user)=>{
            
            return user.name && user.age ? user : null // this will filter NAN, undefined values, emtystring,false and 0 also ''

        }))
  }

  const uniqueArray = () =>{

      users.value = uniqBy(users.value,'age')
  }

  const DeleteRecord = (id) =>{

      //console.log(id);

     users.value = remove(users.value,(user)=>{
         
          return user.id != id;
     });
     //console.log('worked')
  }

  const takeWhileActive = () =>{
     //console.log('takewhile')

     users.value = takeWhile(users.value,(user)=>{

          return user.active == true;
     })
  }
  
  const takeWhileAge = () =>{
     //console.log('takewhile')

     users.value = takeWhile(users.value,(user)=>{

          return user.age < 40 ;
     })
  }

  const reverseArray = ()=>{

       users.value = reverse(users.value);
  }

</script>